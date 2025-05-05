
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => {
    // Initial state based on window.innerWidth if available, false for SSR
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT;
    }
    return false;
  });

  React.useEffect(() => {
    // Skip effect during SSR
    if (typeof window === 'undefined') return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Use optimized resize listener
    const debouncedResize = debounce(checkMobile, 100);
    window.addEventListener('resize', debouncedResize);
    
    // Check once on mount to ensure correct initial value
    checkMobile();
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return isMobile;
}

// Simple debounce function to prevent excessive resize calculations
function debounce(fn: Function, ms = 300) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function(this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}
