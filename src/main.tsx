
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Move font preloading to happen immediately
// Preload critical resources
const preloadFonts = () => {
  // Add preload links for critical fonts with higher priority
  const preloadLinks = [
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap', as: 'style', importance: 'high' },
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap', as: 'style', importance: 'high' }
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

// Monitor and report LCP for debugging
const measureLCP = () => {
  if (!('PerformanceObserver' in window)) return;

  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcpEntry = entries[entries.length - 1];
      console.log('LCP:', lcpEntry.startTime);
      // Type assertion for LargestContentfulPaint entry which has the element property
      if (lcpEntry && 'element' in lcpEntry) {
        console.log('LCP element:', lcpEntry.element);
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

// Execute LCP measurement
measureLCP();

// Optimize component mounting
createRoot(document.getElementById("root")!).render(<App />);
