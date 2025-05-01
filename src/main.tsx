
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Define these types only once, outside of React's render cycle
// Make sure to use declaration merging properly
interface CustomWindow extends Window {
  requestIdleCallback: (
    callback: IdleRequestCallback,
    options?: IdleRequestOptions
  ) => number;
  cancelIdleCallback: (handle: number) => void;
  LCP?: (element: Element) => void;
  gtag?: (...args: any[]) => void;
}

declare global {
  interface Window {
    requestIdleCallback: (
      callback: IdleRequestCallback,
      options?: IdleRequestOptions
    ) => number;
    cancelIdleCallback: (handle: number) => void;
    LCP?: (element: Element) => void;
    gtag?: (...args: any[]) => void;
  }
}

// Polyfill requestIdleCallback for browsers that don't support it
const requestIdleCallback = 
  (window as CustomWindow).requestIdleCallback ||
  function(cb: IdleRequestCallback) {
    const start = Date.now();
    return setTimeout(function() {
      cb({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - start));
        }
      });
    }, 1);
  };

const cancelIdleCallback = 
  (window as CustomWindow).cancelIdleCallback || 
  function(id: number) {
    clearTimeout(id);
  };

// Make polyfills available globally if needed
if (!(window as CustomWindow).requestIdleCallback) {
  (window as CustomWindow).requestIdleCallback = requestIdleCallback;
  (window as CustomWindow).cancelIdleCallback = cancelIdleCallback;
}

// Report web vitals
const reportWebVitals = (metric: any) => {
  // Analytics code...
  if ((window as CustomWindow).gtag) {
    (window as CustomWindow).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
  console.log(metric);
};

// Configure LCP reporting if needed
const configureLCP = () => {
  if ((window as CustomWindow).LCP) {
    // Most important content
    const h1Elements = document.querySelectorAll('.hero-headline');
    if (h1Elements.length > 0) {
      (window as CustomWindow).LCP?.(h1Elements[0]);
    }
  }
};

// Initial render
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Configure performance measurements after render
requestIdleCallback(() => {
  // Report LCP element if needed
  configureLCP();
  
  // Add performance observers or other post-load tasks...
});
