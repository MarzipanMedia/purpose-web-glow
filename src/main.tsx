import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced LCP monitoring for debugging
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
      console.info('Found LCP element:', lcpElements[0]);
    }

    // Observe LCP more robustly
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcpEntry = entries[entries.length - 1];
      console.info('LCP detected:', lcpEntry);
      console.info('LCP time:', lcpEntry.startTime);
      
      if (lcpEntry && 'element' in lcpEntry) {
        const lcpElement = lcpEntry.element;
        console.info('LCP element:', lcpElement);
        console.info('LCP element HTML:', lcpElement.outerHTML);
        
        // Check if the LCP element is the one we marked with data-lcp="true"
        const isMarkedAsLCP = lcpElement.hasAttribute('data-lcp');
        console.info('Is this element marked as LCP?', isMarkedAsLCP);
        
        // If it's not the element we expected, log additional info
        if (!isMarkedAsLCP) {
          console.warn('Browser chose a different element as LCP than what we marked');
          console.info('Browser-selected LCP element:', lcpElement);
          console.info('Our marked LCP element:', lcpElements[0]);
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

// Add more robust image error handling
window.addEventListener('error', function(e) {
  if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
    console.error('Image loading error:', (e.target as HTMLImageElement).src);
    
    // Replace broken images with a placeholder
    const img = e.target as HTMLImageElement;
    // Save original alt text as it contains important context
    const originalAlt = img.alt;
    
    // Replace with placeholder but keep the original alt text for accessibility
    img.src = '/placeholder.svg';
    img.alt = originalAlt ? `${originalAlt} (placeholder image)` : 'Placeholder image';
    
    // Add a CSS class to style the placeholder
    img.classList.add('image-placeholder');
  }
}, true);

// Execute LCP measurement after initial render
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(measureLCP, 300); // Give some time for content to load
});

// Optimize component mounting
createRoot(document.getElementById("root")!).render(<App />);
