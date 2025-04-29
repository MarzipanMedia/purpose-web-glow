
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

// Performance monitoring function
const monitorWebVitals = () => {
  // Initialize LCP reporting
  let lcpElement: Element | null = null;
  window.LCP = (element) => {
    lcpElement = element;
  };

  // Track Largest Contentful Paint
  const observer = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      // @ts-ignore - LCP entry types
      if (entry.element === lcpElement) {
        console.log('LCP registered:', entry.startTime);
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            metric_name: 'LCP',
            metric_value: entry.startTime,
            metric_id: 'LCP'
          });
        }
      }
    }
  });

  // Start observing paint entries
  observer.observe({ type: 'largest-contentful-paint', buffered: true });

  return () => {
    observer.disconnect();
  };
};

// Preload critical resources
document.addEventListener('DOMContentLoaded', () => {
  // Add preload links for critical fonts and assets
  const preloadLinks = [
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap', as: 'style' },
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap', as: 'style' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
  ];

  preloadLinks.forEach(link => {
    const linkEl = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      linkEl.setAttribute(key, value);
    });
    document.head.appendChild(linkEl);
  });
  
  // Start monitoring performance after DOM is ready
  monitorWebVitals();
  
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
});

// Add event listener to catch image loading errors
window.addEventListener('error', function(e) {
  if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
    console.error('Image loading error:', (e.target as HTMLImageElement).src);
    
    // Replace broken images with a placeholder
    const img = e.target as HTMLImageElement;
    if (img.src.includes('project.jpg')) {
      img.src = '/placeholder.svg';
      img.alt = 'Project placeholder image';
    }
  }
}, true);

// Track and report Sydney location visits for analytics
const trackSydneyVisits = () => {
  // Check if URL contains Sydney-related paths
  const isSydneyPage = window.location.pathname.toLowerCase().includes('sydney');
  
  if (isSydneyPage && window.gtag) {
    window.gtag('event', 'sydney_page_visit', {
      'event_category': 'local_pages',
      'event_label': window.location.pathname
    });
  }
};

// Set up history change listener
window.addEventListener('popstate', trackSydneyVisits);

// Optimize component mounting - create root once
const appRoot = document.getElementById("root");
if (appRoot) {
  createRoot(appRoot).render(<App />);
} else {
  console.error("Root element not found");
}
