
import { useState, useEffect } from 'react';

/**
 * Hook to detect when the Largest Contentful Paint has occurred
 * @returns {boolean} Whether LCP has completed
 */
export const useLCP = (): boolean => {
  const [lcpComplete, setLcpComplete] = useState(false);

  useEffect(() => {
    if (!window.PerformanceObserver) {
      // If PerformanceObserver is not available, assume LCP is complete
      setLcpComplete(true);
      return;
    }

    // Create a performance observer to track LCP
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      // When we have the LCP entry, mark it as complete
      if (lastEntry) {
        console.debug('LCP detected:', lastEntry.startTime);
        setLcpComplete(true);
        observer.disconnect();
      }
    });

    try {
      // Start observing largest-contentful-paint entries
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      
      // Fallback: If LCP doesn't fire within 3 seconds, assume it's complete
      const timeoutId = setTimeout(() => {
        setLcpComplete(true);
        observer.disconnect();
        console.debug('LCP fallback timeout reached');
      }, 3000);
      
      return () => {
        observer.disconnect();
        clearTimeout(timeoutId);
      };
    } catch (e) {
      console.error('Error setting up LCP observer:', e);
      setLcpComplete(true);
      return;
    }
  }, []);

  return lcpComplete;
};
