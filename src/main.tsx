
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Critical inline styles for immediate rendering
const inlineStyles = `
  /* Critical rendering styles */
  html.js-loading .defer-animate { opacity: 0; }
  [data-lcp-element="true"] { opacity: 1 !important; transform: none !important; }
  .page-transition { opacity: 0; animation: fadeIn 0.3s forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

// Apply inline styles immediately
const styleEl = document.createElement('style');
styleEl.textContent = inlineStyles;
document.head.appendChild(styleEl);

// Optimized function to add preconnect and preload links
const addResourceHints = () => {
  // Add preconnect for Google Fonts domain
  const preconnectLinks = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: '' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
  ];

  // Add preload for critical fonts and styles - Optimized order
  const preloadLinks = [
    { rel: 'preload', href: '/marzipan-logo.webp', as: 'image', fetchpriority: 'high' },
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap', as: 'style' }
  ];

  // Add all resource hints to document head with priority
  [...preconnectLinks, ...preloadLinks].forEach(link => {
    const linkEl = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      if (value !== undefined) linkEl.setAttribute(key, value);
    });
    document.head.appendChild(linkEl);
  });

  // Add display=swap to font links for faster text rendering
  const existingLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  existingLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.includes('display=swap')) {
      link.setAttribute('href', `${href}&display=swap`);
    }
  });
  
  // Prioritize initial page render
  document.documentElement.classList.add('js-loading');
};

// Execute resource hints immediately - don't wait for DOMContentLoaded
addResourceHints();

// Add event listener to catch image loading errors
window.addEventListener('error', function(e) {
  if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
    const img = e.target as HTMLImageElement;
    if (img.src.includes('project.jpg')) {
      img.src = '/placeholder.svg';
      img.alt = 'Project placeholder image';
    }
  }
}, true);

// Create root and render App with high priority
const rootElement = document.getElementById("root");
if (rootElement) {
  const appRoot = createRoot(rootElement);
  
  // Use a microtask to ensure critical rendering happens as soon as possible
  queueMicrotask(() => {
    appRoot.render(<App />);
    
    // Mark loading complete after initial render
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('js-loading');
      document.documentElement.classList.add('js-loaded');
    });
  });
} else {
  console.error("Root element not found");
}
