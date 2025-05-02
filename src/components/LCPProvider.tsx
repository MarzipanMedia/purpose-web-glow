
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LCPContextType {
  lcpLoaded: boolean;
  markLCPLoaded: () => void;
}

const LCPContext = createContext<LCPContextType>({
  lcpLoaded: false,
  markLCPLoaded: () => {}
});

export const useLCP = () => useContext(LCPContext);

interface LCPProviderProps {
  children: ReactNode;
}

/**
 * Provider component for tracking and optimizing LCP elements
 */
export const LCPProvider: React.FC<LCPProviderProps> = ({ children }) => {
  const [lcpLoaded, setLCPLoaded] = useState(false);
  
  // Function to mark LCP as loaded
  const markLCPLoaded = () => {
    if (!lcpLoaded) {
      setLCPLoaded(true);
      
      // Report to analytics if needed
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'lcp_loaded',
          lcp_time: performance.now()
        });
      }
    }
  };
  
  // Set up performance observer to detect LCP
  useEffect(() => {
    if (typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') {
      return;
    }
    
    // Create performance observer for LCP
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        markLCPLoaded();
      }
    });
    
    // Start observing LCP
    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      console.error('LCP observation failed:', e);
    }
    
    // Fallback timing in case LCP isn't detected
    const fallbackTimer = setTimeout(() => {
      markLCPLoaded();
    }, 3000);
    
    return () => {
      lcpObserver.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);
  
  return (
    <LCPContext.Provider value={{ lcpLoaded, markLCPLoaded }}>
      {children}
    </LCPContext.Provider>
  );
};

/**
 * Component to mark an element as LCP (Largest Contentful Paint)
 */
export const LCPElement: React.FC<{
  children: ReactNode;
  id?: string;
  className?: string;
}> = ({ children, id, className }) => {
  const { markLCPLoaded } = useLCP();
  
  return (
    <div 
      id={id}
      className={className}
      data-lcp-element="true"
      fetchpriority="high"
      onLoad={markLCPLoaded}
      ref={(el) => {
        if (el) {
          el.setAttribute('fetchpriority', 'high');
          el.setAttribute('data-lcp-element', 'true');
        }
      }}
    >
      {children}
    </div>
  );
};

export default LCPProvider;
