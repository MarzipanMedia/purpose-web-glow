
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
    
    if (typeof window.requestIdleCallback !== 'undefined') {
      const idleCallbackId = window.requestIdleCallback(() => {
        if (delay > 0) {
          timeoutId = window.setTimeout(executeCallback, delay);
        } else {
          executeCallback();
        }
      });
      
      return () => {
        if (typeof window.cancelIdleCallback !== 'undefined') {
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

// Add TypeScript definitions for requestIdleCallback and cancelIdleCallback
declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: {
        didTimeout: boolean;
        timeRemaining: () => number;
      }) => void,
      opts?: { timeout: number }
    ) => number;
    cancelIdleCallback: (id: number) => void;
  }
}

export default useDefer;
