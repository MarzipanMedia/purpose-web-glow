
import { useState, useEffect } from 'react';
import { useLCP } from './useLCP';

/**
 * Configuration options for the useDefer hook
 */
type UseDeferOptions = {
  /**
   * Whether to wait for LCP to complete before rendering
   */
  waitForLCP?: boolean;
  /**
   * Additional delay in ms after conditions are met
   */
  delay?: number;
  /**
   * Whether to wait for the component to be in viewport
   */
  waitForIdle?: boolean;
};

/**
 * Hook to defer rendering until certain conditions are met
 * @param options Configuration options
 * @returns Whether the component should render
 */
export const useDefer = (options: UseDeferOptions = {}): boolean => {
  const { waitForLCP = true, delay = 0, waitForIdle = true } = options;
  const [shouldRender, setShouldRender] = useState(!waitForLCP && !waitForIdle && !delay);
  const lcpComplete = useLCP();

  useEffect(() => {
    // If we don't need to wait for anything, render immediately
    if (!waitForLCP && !waitForIdle && !delay) {
      setShouldRender(true);
      return;
    }

    // If we need to wait for LCP and it's not complete, don't continue
    if (waitForLCP && !lcpComplete) return;

    // After LCP is complete (or we don't need to wait for it),
    // we can schedule the rest based on other options
    const scheduleRender = () => {
      const renderWithDelay = () => {
        if (delay) {
          setTimeout(() => setShouldRender(true), delay);
        } else {
          setShouldRender(true);
        }
      };

      // If we need to wait for idle, do so
      if (waitForIdle && typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        // TypeScript doesn't recognize requestIdleCallback by default
        const requestIdleCallback = (window as any).requestIdleCallback || 
          ((cb: Function) => setTimeout(cb, 1));
        
        requestIdleCallback(() => renderWithDelay());
      } else {
        // If we don't need to wait for idle, just apply the delay
        renderWithDelay();
      }
    };

    scheduleRender();
  }, [waitForLCP, lcpComplete, waitForIdle, delay]);

  return shouldRender;
};
