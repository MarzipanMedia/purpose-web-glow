
import { useEffect, useRef } from 'react';

type DeferCallback = () => void;

/**
 * Hook to defer non-critical operations
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
  
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  
  useEffect(() => {
    let timeoutId: number | NodeJS.Timeout;
    const executeCallback = () => {
      callbackRef.current();
    };
    
    // Check if requestIdleCallback is available in the browser
    if ('requestIdleCallback' in window) {
      const idleCallbackId = window.requestIdleCallback(() => {
        if (delay > 0) {
          timeoutId = setTimeout(executeCallback, delay);
        } else {
          executeCallback();
        }
      });
      
      return () => {
        if ('cancelIdleCallback' in window) {
          window.cancelIdleCallback(idleCallbackId);
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      timeoutId = setTimeout(executeCallback, delay || 100);
      
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, dependencies);
};

// Use proper interface augmentation for TypeScript
declare global {
  interface Window {
    requestIdleCallback: (
      callback: IdleRequestCallback, 
      options?: IdleRequestOptions
    ) => number;
    cancelIdleCallback: (handle: number) => void;
  }
}

export default useDefer;
