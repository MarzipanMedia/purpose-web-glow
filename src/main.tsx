
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Critical inline styles for immediate rendering - reduced to essentials only
const inlineStyles = `
  /* Critical rendering styles */
  html.js-loading .defer-animate { opacity: 0 !important; }
  [data-lcp-element="true"] { opacity: 1 !important; }
  .container-custom { width: 100%; max-width: 1280px; margin-left: auto; margin-right: auto; }
  .page-transition { opacity: 0; animation: fadeIn 0.3s forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

// Add preconnect hints for external resources - simplified
const addResourceHints = () => {
  // Only preconnect to critical resources
  if (typeof document === 'undefined') return;
  
  // Preconnect to domain that hosts the WordPress API
  const preconnectWP = document.createElement('link');
  preconnectWP.rel = 'preconnect';
  preconnectWP.href = 'https://blog.marzipan.com.au';
  preconnectWP.crossOrigin = 'anonymous';
  document.head.appendChild(preconnectWP);
};

// Apply inline styles immediately - simplified
const insertCriticalCss = () => {
  if (typeof document === 'undefined') return;
  
  const styleEl = document.createElement('style');
  styleEl.textContent = inlineStyles;
  document.head.appendChild(styleEl);
};

// Execute critical CSS insertion first
insertCriticalCss();

// Mark document as loading with JS
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('js-loading');
}

// Add resource hints
addResourceHints();

// Create root and render App
const rootElement = document.getElementById("root");
if (rootElement) {
  const appRoot = createRoot(rootElement);
  
  // Render app immediately
  appRoot.render(<App />);
  
  // Remove loading class after hydration
  requestAnimationFrame(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('js-loading');
      document.documentElement.classList.add('js-loaded');
    }
    
    // Register performance metrics - simplified
    if (typeof window !== 'undefined' && window.performance && 'getEntriesByType' in window.performance) {
      // Wait until all critical content is loaded
      setTimeout(() => {
        const lcpEntry = performance.getEntriesByType('paint').find(
          entry => entry.name === 'largest-contentful-paint'
        );
        
        // Report to analytics if available
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
} else {
  console.error("Root element not found");
}
