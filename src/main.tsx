
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
    // Add our custom performance marks for LCP optimization
    marzipanPerfMarks: {
      lcpComplete: boolean;
      animationsEnabled: boolean;
    };
  }
}

// Initialize our performance marks
if (typeof window !== 'undefined') {
  window.marzipanPerfMarks = {
    lcpComplete: false,
    animationsEnabled: false
  };
}

// Preload critical resources
document.addEventListener('DOMContentLoaded', () => {
  // Add preload links for critical fonts
  const preloadLinks = [
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap', as: 'style' },
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap', as: 'style' }
  ];

  preloadLinks.forEach(link => {
    const linkEl = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      linkEl.setAttribute(key, value);
    });
    document.head.appendChild(linkEl);
  });
  
  // Add Sydney location breadcrumb data for Google
  // Use requestIdleCallback to delay non-critical schema injection
  const injectSchemas = () => {
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
  };
  
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(injectSchemas, { timeout: 2000 });
  } else {
    // Fallback if requestIdleCallback is not available
    setTimeout(injectSchemas, 1000);
  }
});

// Set up Web Vitals monitoring for LCP
if (PerformanceObserver && typeof window !== 'undefined') {
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      // When LCP is detected, mark it as complete
      if (lastEntry && window.marzipanPerfMarks) {
        // Mark LCP as complete
        window.marzipanPerfMarks.lcpComplete = true;
        console.debug('🚀 LCP completed at:', performance.now(), 'ms');
        
        // Enable animations after LCP
        window.marzipanPerfMarks.animationsEnabled = true;
        
        // Now we can load non-critical resources and enable animations
        document.body.classList.add('lcp-complete');
        
        // Disconnect the observer as it's not needed anymore
        lcpObserver.disconnect();
      }
    });
    
    // Start observing LCP
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.error('Error setting up LCP observer:', e);
  }
}

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

// Defer non-critical tracking operations to after LCP
const setupTracking = () => {
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

  // Set up history change listener for route changes
  window.addEventListener('popstate', trackSydneyVisits);
};

// Optimize component mounting
createRoot(document.getElementById("root")!).render(<App />);

// Defer non-critical setup
if ('requestIdleCallback' in window) {
  (window as any).requestIdleCallback(() => setupTracking(), { timeout: 2000 });
} else {
  // Fallback
  setTimeout(setupTracking, 1000);
}
