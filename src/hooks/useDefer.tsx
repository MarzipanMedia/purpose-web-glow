
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
    if (typeof window === 'undefined') return;
    
    let timeoutId: number | ReturnType<typeof setTimeout>;
    let idleCallbackId: number;
    
    // Function to execute after delay or immediately
    const runCallback = () => {
      if (delay > 0) {
        timeoutId = setTimeout(executeCallback, delay);
      } else {
        executeCallback();
      }
    };
    
    // Wait until after the main content is painted
    const onLoad = () => {
      // Use requestIdleCallback with a timeout to ensure execution
      if ('requestIdleCallback' in window) {
        idleCallbackId = requestIdleCallback(runCallback, { timeout: 2000 });
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        timeoutId = setTimeout(runCallback, delay || 100);
      }
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }
    
    // Cleanup function
    return () => {
      if ('cancelIdleCallback' in window && idleCallbackId) {
        cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('load', onLoad);
    };
  }, dependencies); // Controlled by dependencies array
};

export default useDefer;
