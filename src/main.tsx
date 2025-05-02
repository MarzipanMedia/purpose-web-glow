
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced critical inline styles for immediate rendering
const inlineStyles = `
  /* Critical rendering styles */
  body { margin: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
  .page-transition { opacity: 0; animation: fadeIn 0.3s forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  
  /* Pre-sized content to prevent layout shifts */
  #hero-section { min-height: 60vh; }
  [data-lcp-element="true"] { display: block; }
`;

// Enhanced resource hints
const addResourceHints = () => {
  if (typeof document === 'undefined') return;
  
  // More comprehensive resource hints
  const resourceHints = [
    // Preconnect to critical domains
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    // Preload critical assets
    { rel: 'preload', href: '/marzipan-logo.webp', as: 'image', fetchpriority: 'high' }
  ];
  
  resourceHints.forEach(hint => {
    const linkEl = document.createElement('link');
    linkEl.rel = hint.rel;
    linkEl.href = hint.href;
    
    if (hint.crossOrigin) {
      linkEl.crossOrigin = hint.crossOrigin;
    }
    
    if (hint.as) {
      linkEl.setAttribute('as', hint.as);
    }
    
    if (hint.fetchpriority) {
      linkEl.setAttribute('fetchpriority', hint.fetchpriority);
    }
    
    document.head.appendChild(linkEl);
  });
};

// Insert critical CSS
const insertCriticalCss = () => {
  if (typeof document === 'undefined') return;
  
  const styleEl = document.createElement('style');
  styleEl.textContent = inlineStyles;
  document.head.appendChild(styleEl);
};

// Execute critical-path optimizations before any rendering
insertCriticalCss();
addResourceHints();

// Mark document as JS-enabled immediately
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('js-enabled');
}

// Create root and render App with minimal initial JS execution
const rootElement = document.getElementById("root");
if (rootElement) {
  const appRoot = createRoot(rootElement);
  appRoot.render(<App />);
  
  // Setup simple performance monitoring - deferred to not block main thread
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback to defer non-critical performance monitoring
    const setupPerformanceMonitoring = () => {
      // Report CLS, LCP and FID/INP when they become available
      if ('PerformanceObserver' in window) {
        try {
          // LCP Observer
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            if (entries.length > 0) {
              console.log('LCP:', entries[0].startTime);
            }
          }).observe({ type: 'largest-contentful-paint', buffered: true });
          
          // CLS Observer
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            let clsScore = 0;
            entries.forEach(entry => {
              clsScore += (entry as any).value;
            });
            console.log('CLS:', clsScore);
          }).observe({ type: 'layout-shift', buffered: true });
          
          // FID/INP Observer
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            if (entries.length > 0) {
              // Fix TypeScript error by using type assertion
              const fidEntry = entries[0] as any;
              console.log('FID/INP:', fidEntry.processingStart - fidEntry.startTime);
            }
          }).observe({ type: 'first-input', buffered: true });
        } catch (e) {
          console.error('Performance observer failed:', e);
        }
      }
    };
    
    // Defer performance monitoring setup
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(setupPerformanceMonitoring);
    } else {
      setTimeout(setupPerformanceMonitoring, 1000);
    }
  }
} else {
  console.error("Root element not found");
}
