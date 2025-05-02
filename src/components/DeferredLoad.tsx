
import React, { ReactNode, Suspense, lazy, useState, useEffect } from 'react';
import { useDefer } from '../hooks/useDefer';

type DeferredLoadProps = {
  /**
   * Content to render when ready
   */
  children: ReactNode;
  /**
   * Optional placeholder to show while loading
   */
  placeholder?: ReactNode;
  /**
   * Options for when to defer loading
   */
  options?: {
    waitForLCP?: boolean;
    delay?: number;
    waitForIdle?: boolean;
  };
};

/**
 * Component that defers rendering its children until after LCP
 * and/or when the browser is idle
 */
const DeferredLoad: React.FC<DeferredLoadProps> = ({ 
  children, 
  placeholder = null,
  options = { waitForLCP: true, delay: 0, waitForIdle: true }
}) => {
  const shouldRender = useDefer(options);
  
  return (
    <>
      {shouldRender ? children : placeholder}
    </>
  );
};

export default DeferredLoad;

/**
 * Higher order component to create a deferred version of any component
 */
export const withDeferredLoad = <P extends object>(
  Component: React.ComponentType<P>,
  options?: { waitForLCP?: boolean; delay?: number; waitForIdle?: boolean },
  PlaceholderComponent: React.ComponentType<any> | null = null
) => {
  return (props: P) => (
    <DeferredLoad 
      options={options}
      placeholder={PlaceholderComponent ? <PlaceholderComponent /> : null}
    >
      <Component {...props} />
    </DeferredLoad>
  );
};
