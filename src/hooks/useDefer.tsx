
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
    let timeoutId: number;
    const executeCallback = () => {
      callbackRef.current();
    };
    
    // Check if requestIdleCallback is available in the browser
    if ('requestIdleCallback' in window) {
      const idleCallbackId = window.requestIdleCallback(() => {
        if (delay > 0) {
          timeoutId = window.setTimeout(executeCallback, delay);
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
      timeoutId = window.setTimeout(executeCallback, delay || 100);
      
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, dependencies);
};

// Make TypeScript aware of requestIdleCallback and cancelIdleCallback if not already defined
// Uses module augmentation rather than redefinition to prevent conflicts
declare global {
  interface Window {
    requestIdleCallback?: (
      callback: IdleRequestCallback,
      options?: IdleRequestOptions
    ) => number;
    cancelIdleCallback?: (id: number) => void;
  }
}

export default useDefer;
