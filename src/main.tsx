
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced LCP monitoring with proper TypeScript typing and error handling
const measureLCP = () => {
  if (!('PerformanceObserver' in window)) {
    console.warn('PerformanceObserver not supported in this browser');
    return;
  }

  try {
    // Find elements marked as LCP
    const lcpElements = document.querySelectorAll('[data-lcp="true"]');
    if (lcpElements.length === 0) {
      console.warn('No elements marked as LCP found on page');
    } else if (lcpElements.length > 1) {
      console.warn(`Found ${lcpElements.length} elements marked as LCP. Should only have one.`);
      lcpElements.forEach((el, i) => {
        console.log(`LCP candidate ${i+1}:`, el);
      });
    } else {
      console.log('Found LCP element:', lcpElements[0]);
    }

    // Observe LCP with proper TypeScript typing and error handling
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcpEntry = entries[entries.length - 1];
      console.log('LCP detected:', lcpEntry);
      
      if (lcpEntry && 'startTime' in lcpEntry) {
        console.log('LCP time:', lcpEntry.startTime);
      }
      
      // Use type assertion and property checks with optional chaining
      if (lcpEntry && 'element' in lcpEntry) {
        const lcpElement = lcpEntry.element;
        console.log('LCP element:', lcpElement);
        
        if (lcpElement && lcpElement instanceof HTMLElement) {
          console.log('LCP element HTML:', lcpElement.outerHTML);
          
          // Check if the LCP element is the one we marked with data-lcp="true"
          if (lcpElement.hasAttribute && typeof lcpElement.hasAttribute === 'function') {
            const isMarkedAsLCP = lcpElement.hasAttribute('data-lcp');
            console.log('Is this element marked as LCP?', isMarkedAsLCP);
          }
        }
      }
    });
    
    lcpObserver.observe({
      type: 'largest-contentful-paint',
      buffered: true
    });
  } catch (e) {
    console.error('LCP measurement error:', e);
  }
};

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

// Execute LCP measurement after initial render - ensure DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(measureLCP, 100);
  });
} else {
  // DOM already ready, run measurement after a small delay
  setTimeout(measureLCP, 100);
}

// Optimize component mounting - reduced delay for faster LCP
createRoot(document.getElementById("root")!).render(<App />);
