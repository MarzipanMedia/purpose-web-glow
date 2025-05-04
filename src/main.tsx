
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Preload only Questrial and Mulish fonts
const preloadFonts = () => {
  // Add preload links for critical fonts with higher priority
  const preloadLinks = [
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Questrial&family=Mulish:wght@300;400;500;600;700&display=swap', as: 'style', importance: 'high' }
  ];

  preloadLinks.forEach(link => {
    const linkEl = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      linkEl.setAttribute(key, value);
    });
    document.head.appendChild(linkEl);
  });
  
  // Actually load and apply the fonts after preloading
  preloadLinks.forEach(link => {
    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = link.href;
    document.head.appendChild(linkEl);
  });
};

// Execute preloading immediately
preloadFonts();

// Preload logo image
const preloadLogo = () => {
  const logoLink = document.createElement('link');
  logoLink.rel = 'preload';
  logoLink.as = 'image';
  logoLink.href = '/marzipan-sydney-webdesign.avif';
  logoLink.type = 'image/avif';
  document.head.appendChild(logoLink);
};

// Execute logo preloading
preloadLogo();

// Enhanced LCP monitoring with proper TypeScript typing
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

    // Observe LCP with proper TypeScript typing
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcpEntry = entries[entries.length - 1];
      console.log('LCP detected:', lcpEntry);
      console.log('LCP time:', lcpEntry.startTime);
      
      // Use type assertion and proper checking for LargestContentfulPaint entries
      if (lcpEntry && 'element' in lcpEntry) {
        // Properly type the LCP element
        const lcpElement = lcpEntry.element as HTMLElement;
        console.log('LCP element:', lcpElement);
        
        if (lcpElement && lcpElement instanceof HTMLElement) {
          console.log('LCP element HTML:', lcpElement.outerHTML);
          
          // Check if the LCP element is the one we marked with data-lcp="true"
          const isMarkedAsLCP = lcpElement.hasAttribute('data-lcp');
          console.log('Is this element marked as LCP?', isMarkedAsLCP);
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

// Execute LCP measurement after initial render
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(measureLCP, 500); // Give some time for content to load
});

// Optimize component mounting
createRoot(document.getElementById("root")!).render(<App />);
