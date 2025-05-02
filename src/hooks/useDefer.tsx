
import { useEffect, useRef, useCallback } from 'react';

type DeferCallback = () => void;

/**
 * Hook to defer non-critical operations for better LCP and TBT metrics
 * @param callback Function to run when the browser is idle
 * @param delay Optional delay in ms before running the callback (default: 0)
 * @param dependencies Array of dependencies to re-run the effect when they change
 */
export const useDefer = (
  callback: DeferCallback, 
  delay = 0, 
  dependencies: React.DependencyList = []
) => {
  const callbackRef = useRef(callback);
  
  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  
  // Memoize the execution function to avoid unnecessary re-renders
  const executeCallback = useCallback(() => {
    callbackRef.current();
  }, []);
  
  useEffect(() => {
    // Early return if not in browser environment
    if (typeof window === 'undefined') return;
    
    // Track whether this execution has completed
    let isExecuted = false;
    let timeoutId: number | NodeJS.Timeout;
    let idleCallbackId: number;
    
    // Ensure we don't miss the callback execution if LCP already completed
    const lcpState = document.readyState;
    
    // Function to execute after delay or immediately
    const runCallback = () => {
      if (isExecuted) return;
      isExecuted = true;
      
      if (delay > 0) {
        timeoutId = setTimeout(executeCallback, delay);
      } else {
        executeCallback();
      }
    };
    
    // Use PerformanceObserver to wait for LCP before deferring
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            // LCP has occurred, schedule our task
            if ('requestIdleCallback' in window) {
              idleCallbackId = requestIdleCallback(runCallback, { timeout: 2000 });
            } else {
              // Fallback for browsers that don't support requestIdleCallback
              timeoutId = setTimeout(runCallback, delay || 100);
            }
            lcpObserver.disconnect();
          }
        });
        
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        
        // Set a timeout to ensure we run even if LCP doesn't fire
        timeoutId = setTimeout(() => {
          lcpObserver.disconnect();
          runCallback();
        }, 3000); // 3 second fallback to ensure callback runs
      } catch (e) {
        // If observer fails, fall back to load event
        if (typeof window !== 'undefined') {
          window.addEventListener('load', runCallback, { once: true });
        }
      }
    } else if (lcpState === 'complete') {
      // Document already loaded
      runCallback();
    } else {
      // Fallback to load event - Fix the TypeScript error
      if (typeof window !== 'undefined') {
        window.addEventListener('load', runCallback, { once: true });
      }
    }
    
    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        if (typeof window.cancelIdleCallback === 'function' && idleCallbackId) {
          cancelIdleCallback(idleCallbackId);
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (typeof window !== 'undefined') {
          window.removeEventListener('load', runCallback);
        }
      }
    };
  }, dependencies); // Controlled by dependencies array
};

export default useDefer;
