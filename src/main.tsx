
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced LCP monitoring with more detailed reporting and improved error handling
const measureLCP = () => {
  if (!('PerformanceObserver' in window)) {
    console.warn('PerformanceObserver not supported in this browser');
    return;
  }

  try {
    // Mark the start time for LCP measurement
    if (performance && performance.mark) {
      performance.mark('lcp-measurement-start');
    }
    
    // Create improved LCP observer with more reliable detection
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcpEntry = entries[entries.length - 1];
      
      if (lcpEntry && 'element' in lcpEntry) {
        const lcpElement = lcpEntry.element;
        const lcpTime = lcpEntry.startTime / 1000;
        
        console.log(`LCP detected in ${lcpTime.toFixed(2)}s`);
        
        // Check if we hit our intended LCP target
        if (lcpElement && lcpElement instanceof Element) {
          console.log(`LCP element: ${lcpElement.id || 'unnamed element'}`);
          console.log(`LCP element type: ${lcpElement.tagName}`);
          
          if (lcpElement.id === 'main-heading') {
            console.log('✅ LCP is targeting the intended heading element');
            document.documentElement.classList.add('lcp-detected');
          } else {
            console.log('❌ LCP is NOT targeting the intended heading element');
            // Try to force LCP to the right element
            setTimeout(() => {
              const mainHeading = document.getElementById('main-heading');
              if (mainHeading) {
                mainHeading.style.display = 'block';
                mainHeading.style.contentVisibility = 'visible';
                mainHeading.style.contain = 'none';
                console.log('Applied forced visibility to main heading');
              }
            }, 0);
          }
          
          // Record performance mark for LCP element identified
          if (performance && performance.mark) {
            performance.mark('lcp-element-identified');
          }
        }
      }
    });
    
    // Observe LCP events with buffering to catch early events
    lcpObserver.observe({
      type: 'largest-contentful-paint',
      buffered: true
    });
    
    // Additional observer for layout shifts that might affect LCP
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        console.log(`Layout shift detected: ${entries.length} shifts`);
      }
    });
    
    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      console.log('CLS observation not supported');
    }
    
  } catch (e) {
    console.error('Error during LCP measurement:', e);
  }
};

// Execute LCP measurement with priority scheduling
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(() => measureLCP(), { timeout: 1000 });
} else {
  // Immediate fallback for browsers without requestIdleCallback
  setTimeout(measureLCP, 0);
}

// Add event listener for font loading events to debug font issues
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    console.log('All fonts loaded and rendered!');
    // Force re-evaluation of LCP after fonts are loaded
    const mainHeading = document.getElementById('main-heading');
    if (mainHeading) {
      mainHeading.style.opacity = '0.99';
      setTimeout(() => {
        mainHeading.style.opacity = '1';
      }, 0);
    }
  });
  
  document.fonts.addEventListener('loadingdone', (event) => {
    const fontFaceEvent = event as FontFaceSetLoadEvent;
    console.log(`Font loaded: ${fontFaceEvent.fontfaces?.length || 0} fontfaces`);
  });
  
  document.fonts.addEventListener('loadingerror', (event) => {
    const fontFaceEvent = event as FontFaceSetLoadEvent;
    console.error(`Font loading error: ${fontFaceEvent.fontfaces?.length || 0} fontfaces failed`);
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

// Use createRoot with minimal delay to speed up hydration
const root = document.getElementById("root");
if (root) {
  const startRender = performance.now();
  createRoot(root).render(<App />);
  const renderTime = performance.now() - startRender;
  console.log(`Initial render completed in ${renderTime.toFixed(2)}ms`);
} else {
  console.error("Root element not found");
}
