
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
    // Mark document as JS ready
    document.documentElement.classList.add('js-ready');
    
    let timeoutId: number | ReturnType<typeof setTimeout>;
    const executeCallback = () => {
      callbackRef.current();
    };
    
    // Check if requestIdleCallback is available in the browser
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const idleCallbackId = requestIdleCallback(() => {
        if (delay > 0) {
          timeoutId = setTimeout(executeCallback, delay);
        } else {
          executeCallback();
        }
      });
      
      return () => {
        if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
          cancelIdleCallback(idleCallbackId);
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

// Use proper type definitions that won't cause TypeScript errors
interface IdleRequestOptions {
  timeout: number;
}

interface IdleRequestCallback {
  (deadline: IdleDeadline): void;
}

interface IdleDeadline {
  didTimeout: boolean;
  timeRemaining: () => number;
}

// No need to augment Window interface, TypeScript already has these types
// Just provide proper return type for the hook
export default useDefer;
