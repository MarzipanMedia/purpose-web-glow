
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Minimal critical inline styles for immediate rendering
const inlineStyles = `
  /* Critical rendering styles */
  .page-transition { opacity: 0; animation: fadeIn 0.3s forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

// Simplified resource hints
const addResourceHints = () => {
  if (typeof document === 'undefined') return;
  
  // Only add critical resource hints
  const resourceHints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  ];
  
  resourceHints.forEach(hint => {
    const linkEl = document.createElement('link');
    linkEl.rel = hint.rel;
    linkEl.href = hint.href;
    if (hint.crossOrigin) linkEl.crossOrigin = hint.crossOrigin;
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

// Execute critical-path optimizations
insertCriticalCss();
addResourceHints();

// Mark document as JS-enabled
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('js-enabled');
}

// Create root and render App
const rootElement = document.getElementById("root");
if (rootElement) {
  const appRoot = createRoot(rootElement);
  appRoot.render(<App />);
  
  // Setup simple performance monitoring
  if (typeof window !== 'undefined') {
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
            console.log('FID/INP:', entries[0].processingStart - entries[0].startTime);
          }
        }).observe({ type: 'first-input', buffered: true });
      } catch (e) {
        console.error('Performance observer failed:', e);
      }
    }
  }
} else {
  console.error("Root element not found");
}
