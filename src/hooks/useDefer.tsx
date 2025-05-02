
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
    // Mark document as JS ready
    document.documentElement.classList.add('js-ready');
    
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
    
    // Use requestIdleCallback with a timeout to ensure execution
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleCallbackId = requestIdleCallback(runCallback, { timeout: 2000 });
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      timeoutId = setTimeout(runCallback, delay || 100);
    }
    
    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && 'cancelIdleCallback' in window && idleCallbackId) {
        cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, dependencies); // Controlled by dependencies array
};

// TypeScript interface definitions
interface IdleRequestOptions {
  timeout: number;
}

interface IdleDeadline {
  didTimeout: boolean;
  timeRemaining: () => number;
}

export default useDefer;
