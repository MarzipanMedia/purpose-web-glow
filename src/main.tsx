
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add gtag type declaration
declare global {
  interface Window {
    gtag: (
      command: string, 
      action: string, 
      params?: Record<string, any>
    ) => void;
    dataLayer: any[];
    LCP: (element: Element) => void;
    requestIdleCallback: (
      callback: IdleRequestCallback,
      options?: IdleRequestOptions
    ) => number;
    cancelIdleCallback: (id: number) => void;
  }
}

// Polyfill for requestIdleCallback and cancelIdleCallback
if (typeof window !== 'undefined') {
  // Properly typed polyfill for browsers that don't support requestIdleCallback
  window.requestIdleCallback = window.requestIdleCallback || function(
    callback: IdleRequestCallback,
    options?: IdleRequestOptions
  ) {
    // Use a numeric timeout ID and ensure it's properly cast to match the expected return type
    const timeoutId = setTimeout(() => callback({
      didTimeout: false,
      timeRemaining: function() { return Infinity; }
    }), options?.timeout || 1);
    
    // Convert the timeout ID to a number to match the requestIdleCallback signature
    return Number(timeoutId);
  };

  window.cancelIdleCallback = window.cancelIdleCallback || function(id: number) {
    clearTimeout(id);
  };
}

// Simplified performance monitoring function
const monitorWebVitals = () => {
  if (process.env.NODE_ENV === 'production') {
    // Minimal LCP observer
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          console.log('LCP measured:', entries[0].startTime);
          // Defer analytics reporting to not block main thread
          setTimeout(() => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                metric_name: 'LCP',
                metric_value: entries[0].startTime,
                metric_id: 'LCP'
              });
            }
          }, 1000);
        }
      });
      
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      console.error('PerformanceObserver not supported', e);
    }
  }
};

// Simplified preload function
const preloadCriticalResources = () => {
  // Only preconnect to essential domains to save resources
  const preconnects = [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
  ];

  preconnects.forEach(link => {
    const linkEl = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      linkEl.setAttribute(key, value);
    });
    document.head.appendChild(linkEl);
  });
  
  // Initialize monitoring after critical resources
  monitorWebVitals();
};

// Optimize image error handling - use passive listeners
window.addEventListener('error', function(e) {
  if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
    const img = e.target as HTMLImageElement;
    if (img.src.includes('project.jpg')) {
      img.src = '/placeholder.svg';
      img.alt = 'Project placeholder image';
    }
  }
}, {passive: true});

// Optimize component mounting
const appRoot = document.getElementById("root");
if (appRoot) {
  // Initialize the app
  createRoot(appRoot).render(<App />);
  
  // Preload critical resources soon but don't block initial render
  setTimeout(preloadCriticalResources, 20);
} else {
  console.error("Root element not found");
}
