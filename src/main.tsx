
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced LCP monitoring with more detailed reporting
const measureLCP = () => {
  if (!('PerformanceObserver' in window)) {
    console.warn('PerformanceObserver not supported in this browser');
    return;
  }

  try {
    // Improved LCP observer with more detailed logging
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcpEntry = entries[entries.length - 1];
      
      if (lcpEntry && 'element' in lcpEntry) {
        const lcpElement = lcpEntry.element;
        const lcpTime = lcpEntry.startTime / 1000;
        
        console.log(`LCP detected in ${lcpTime.toFixed(2)}s`);
        
        // Check if we hit our intended LCP target
        if (lcpElement && typeof lcpElement === 'object' && lcpElement !== null && 'id' in lcpElement) {
          console.log(`LCP element: ${lcpElement.id || 'unnamed element'}`);
          console.log(`LCP element type: ${lcpElement.tagName}`);
          
          if (lcpElement.id === 'main-heading') {
            console.log('✅ LCP is targeting the intended heading element');
          } else {
            console.log('❌ LCP is NOT targeting the intended heading element');
          }
        }
      }
    });
    
    lcpObserver.observe({
      type: 'largest-contentful-paint',
      buffered: true
    });
  } catch (e) {
    console.error('Error during LCP measurement:', e);
  }
};

// Execute LCP measurement
setTimeout(measureLCP, 0);

// Add event listener for font loading events to debug font issues
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    console.log('All fonts loaded and rendered!');
  });
  
  document.fonts.addEventListener('loadingdone', (event) => {
    console.log(`Font loaded: ${event.fontfaces.length} fontfaces`);
  });
  
  document.fonts.addEventListener('loadingerror', (event) => {
    console.error(`Font loading error: ${event.fontfaces.length} fontfaces failed`);
  });
}

// Add event listener for critical image loading errors
window.addEventListener('error', function(e) {
  if (e.target && 
      (e.target as HTMLElement).tagName === 'IMG' && 
      (e.target as HTMLImageElement).getAttribute('fetchpriority') === 'high') {
    console.error('Critical image loading error:', (e.target as HTMLImageElement).src);
  }
}, true);

// Create root immediately - no delay
createRoot(document.getElementById("root")!).render(<App />);
