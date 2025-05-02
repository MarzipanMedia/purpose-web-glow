
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Critical inline styles for immediate rendering
const inlineStyles = `
  /* Critical rendering styles */
  html.js-loading .defer-animate { opacity: 0 !important; transform: translateY(20px) !important; }
  [data-lcp-element="true"] { opacity: 1 !important; transform: none !important; }
  .container-custom { width: 100%; max-width: 1280px; margin-left: auto; margin-right: auto; }
  .page-transition { opacity: 0; animation: fadeIn 0.3s forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body { opacity: 1; }
`;

// Add preconnect hints for external resources
const addResourceHints = () => {
  // Preconnect to domain that hosts the WordPress API
  const preconnectWP = document.createElement('link');
  preconnectWP.rel = 'preconnect';
  preconnectWP.href = 'https://blog.marzipan.com.au';
  preconnectWP.crossOrigin = 'anonymous';
  document.head.appendChild(preconnectWP);
  
  // Preload hero image if it exists
  const heroImage = document.querySelector('img[data-lcp-image="true"]');
  if (heroImage && heroImage.getAttribute('src')) {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = heroImage.getAttribute('src') || '';
    preloadLink.setAttribute('fetchpriority', 'high');
    document.head.appendChild(preloadLink);
  }
};

// Apply inline styles immediately
const insertCriticalCss = () => {
  const styleEl = document.createElement('style');
  styleEl.textContent = inlineStyles;
  document.head.appendChild(styleEl);
};

// Execute critical CSS insertion first
insertCriticalCss();

// Mark document as loading with JS
document.documentElement.classList.add('js-loading');

// Add resource hints
if (typeof window !== 'undefined') {
  addResourceHints();
}

// Add event listener to catch image loading errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', function(e) {
    if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
      // Handle image errors
      const img = e.target as HTMLImageElement;
      if (img.src.includes('project.jpg')) {
        img.src = '/placeholder.svg';
        img.alt = 'Project placeholder image';
      }
    }
  }, true);
}

// Create root and render App with high priority
const rootElement = document.getElementById("root");
if (rootElement) {
  const appRoot = createRoot(rootElement);
  
  // Use a microtask to ensure critical rendering happens as soon as possible
  queueMicrotask(() => {
    appRoot.render(<App />);
    
    // Mark loading complete after React hydration
    requestAnimationFrame(() => {
      // Remove loading class after initial render
      document.documentElement.classList.remove('js-loading');
      document.documentElement.classList.add('js-loaded');
      
      // Register performance metrics
      if (typeof window !== 'undefined' && 'performance' in window && 'getEntriesByType' in window.performance) {
        setTimeout(() => {
          const lcpEntry = performance.getEntriesByType('paint').find(
            entry => entry.name === 'largest-contentful-paint'
          );
          if (lcpEntry && window.dataLayer) {
            window.dataLayer.push({
              event: 'core_web_vitals',
              metric_name: 'LCP',
              metric_value: lcpEntry.startTime,
              metric_rating: lcpEntry.startTime < 2500 ? 'good' : 'needs-improvement'
            });
          }
        }, 3000);
      }
    });
  });
} else {
  console.error("Root element not found");
}

// Polyfills for older browsers - load separately to not block main thread
if (!('IntersectionObserver' in window)) {
  // Add polyfill only if needed (not included here - would be a separate import)
}
