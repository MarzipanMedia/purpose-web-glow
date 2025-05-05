
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Use lazy initial state to avoid hydration issues
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initial state based on window.innerWidth if available, false for SSR
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT;
    }
    return false;
  });

  React.useEffect(() => {
    // Skip effect during SSR
    if (typeof window === 'undefined') return;
    
    // Check if we need to update mobile status on mount (for hydration consistency)
    const initialCheck = window.innerWidth < MOBILE_BREAKPOINT;
    if (initialCheck !== isMobile) {
      setIsMobile(initialCheck);
    }
    
    // Create optimized resize handler that uses RAF for better performance
    let rafId: number | null = null;
    
    const handleResize = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
          rafId = null;
        });
      }
    };
    
    // Use optimized passive event listener for better scroll performance
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Clean up event listener and any pending RAF
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isMobile]); // Including isMobile in deps to ensure consistency

  return isMobile;
}
