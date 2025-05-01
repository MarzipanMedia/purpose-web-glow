import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Define types for requestIdleCallback and cancelIdleCallback
interface IdleRequestOptions {
  timeout?: number;
}

interface IdleRequestCallback {
  (deadline: IdleDeadline): void;
}

interface IdleDeadline {
  didTimeout: boolean;
  timeRemaining: () => number;
}

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

// More robust polyfill for requestIdleCallback and cancelIdleCallback
if (typeof window !== 'undefined') {
  // Properly typed polyfill for browsers that don't support requestIdleCallback
  if (!('requestIdleCallback' in window)) {
    window.requestIdleCallback = function(
      callback: IdleRequestCallback,
      options?: IdleRequestOptions
    ) {
      const start = Date.now();
      return setTimeout(() => {
        callback({
          didTimeout: false,
          timeRemaining: function() { 
            return Math.max(0, 50 - (Date.now() - start)); 
          }
        });
      }, options?.timeout || 1) as unknown as number;
    };
  }

  if (!('cancelIdleCallback' in window)) {
    window.cancelIdleCallback = function(id: number) {
      clearTimeout(id);
    };
  }
  
  // Simple LCP marking utility that doesn't rely on requestIdleCallback
  window.LCP = function markLCP(element: Element) {
    if (!element) return;
    
    // Use PerformanceObserver if available
    if ('PerformanceObserver' in window) {
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            console.log('LCP recorded:', entries[0].startTime);
            if (window.gtag) {
              setTimeout(() => {
                window.gtag('event', 'web_vitals', {
                  metric_name: 'LCP',
                  metric_value: entries[0].startTime,
                  metric_id: 'LCP'
                });
              }, 0);
            }
          }
        }).observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        console.error('PerformanceObserver error:', e);
      }
    }
  };
}

// Simplified preload function for critical resources
const preloadCriticalResources = () => {
  // Only preconnect to essential domains to save resources
  const preconnects = [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
  ];

  preconnects.forEach(link => {
    const linkEl = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      if (value !== undefined) {
        linkEl.setAttribute(key, value);
      }
    });
    document.head.appendChild(linkEl);
  });
};

// Run preload immediately but with low priority
preloadCriticalResources();

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
  
  // Simple web vitals monitoring
  if (process.env.NODE_ENV === 'production') {
    setTimeout(() => {
      try {
        const lcpElement = document.querySelector('.hero-headline');
        if (lcpElement && window.LCP) {
          window.LCP(lcpElement);
        }
      } catch (e) {
        console.error('LCP marking error:', e);
      }
    }, 0);
  }
} else {
  console.error("Root element not found");
}
