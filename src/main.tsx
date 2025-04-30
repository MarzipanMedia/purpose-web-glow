
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
  }
}

// Performance monitoring function - optimized with lower overhead
const monitorWebVitals = () => {
  // Initialize LCP reporting with passive observation
  let lcpElement: Element | null = null;
  window.LCP = (element) => {
    lcpElement = element;
  };

  // Only observe if not in development mode
  if (process.env.NODE_ENV === 'production') {
    // Track Largest Contentful Paint with minimal overhead
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        // @ts-ignore - LCP entry types
        if (entry.element === lcpElement) {
          console.log('LCP registered:', entry.startTime);
          if (window.gtag) {
            // Defer analytics reporting
            setTimeout(() => {
              window.gtag('event', 'web_vitals', {
                metric_name: 'LCP',
                metric_value: entry.startTime,
                metric_id: 'LCP'
              });
            }, 1000);
          }
        }
      }
    });

    // Start observing paint entries with minimal overhead
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  }
};

// Use requestIdleCallback to preload critical resources
const preloadCriticalResources = () => {
  // Add preload links for critical fonts and assets
  const preloadLinks = [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600&display=swap', as: 'style' },
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap', as: 'style' },
  ];

  preloadLinks.forEach(link => {
    const linkEl = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      linkEl.setAttribute(key, value);
    });
    document.head.appendChild(linkEl);
  });
  
  // Add Sydney location breadcrumb data for Google
  const locationScript = document.createElement('script');
  locationScript.type = 'application/ld+json';
  locationScript.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Australia",
        "item": "https://marzipan.com.au/australia"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "New South Wales",
        "item": "https://marzipan.com.au/australia/nsw"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Sydney",
        "item": "https://marzipan.com.au/australia/nsw/sydney"
      }
    ]
  });
  document.head.appendChild(locationScript);
  
  // Start monitoring performance after resources loaded
  monitorWebVitals();
};

// Add event listener to catch image loading errors with lower overhead
window.addEventListener('error', function(e) {
  if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
    const img = e.target as HTMLImageElement;
    if (img.src.includes('project.jpg')) {
      img.src = '/placeholder.svg';
      img.alt = 'Project placeholder image';
    }
  }
}, {passive: true});

// Track Sydney location visits for analytics - with deferred execution
const trackSydneyVisits = () => {
  // Check if URL contains Sydney-related paths
  const isSydneyPage = window.location.pathname.toLowerCase().includes('sydney');
  
  if (isSydneyPage && window.gtag) {
    // Use setTimeout to defer analytics to avoid blocking main thread
    setTimeout(() => {
      window.gtag('event', 'sydney_page_visit', {
        'event_category': 'local_pages',
        'event_label': window.location.pathname
      });
    }, 2000);
  }
};

// Optimize component mounting - create root once
const appRoot = document.getElementById("root");
if (appRoot) {
  // Initialize the app
  createRoot(appRoot).render(<App />);
  
  // Use requestIdleCallback to load non-critical resources
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(preloadCriticalResources);
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(preloadCriticalResources, 1);
  }
  
  // Set up history change listener with passive option
  window.addEventListener('popstate', trackSydneyVisits, { passive: true });
} else {
  console.error("Root element not found");
}
