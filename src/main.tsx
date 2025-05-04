
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Simplified LCP monitoring for better performance
const measureLCP = () => {
  if (!('PerformanceObserver' in window)) {
    return; // Silently exit if not supported
  }

  try {
    // Lightweight LCP observer with minimal operations
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcpEntry = entries[entries.length - 1];
      
      if (lcpEntry && 'element' in lcpEntry) {
        const lcpElement = lcpEntry.element;
        
        // Check if we hit our intended LCP target
        // Fix: Add type guard to ensure lcpElement has an id property
        if (lcpElement && 'id' in lcpElement && lcpElement.id === 'main-heading') {
          console.log('LCP is targeting the intended element');
        }
      }
    });
    
    lcpObserver.observe({
      type: 'largest-contentful-paint',
      buffered: true
    });
  } catch (e) {
    // Silent error - don't impact page performance with error handling
  }
};

// Execute LCP measurement only if not a mobile device with slow connection
// This helps prioritize rendering over measurement on slower devices
if (!('connection' in navigator) || 
    (navigator.connection && 
     !(navigator.connection as any).saveData && 
     (navigator.connection as any).effectiveType !== 'slow-2g' && 
     (navigator.connection as any).effectiveType !== '2g')) {
  
  // Delay LCP measurement until after initial render
  setTimeout(measureLCP, 100); 
}

// Add event listener for only critical image loading errors
window.addEventListener('error', function(e) {
  if (e.target && 
      (e.target as HTMLElement).tagName === 'IMG' && 
      (e.target as HTMLImageElement).getAttribute('fetchpriority') === 'high') {
    console.error('Critical image loading error:', (e.target as HTMLImageElement).src);
  }
}, true);

// Create root immediately - no delay
createRoot(document.getElementById("root")!).render(<App />);
