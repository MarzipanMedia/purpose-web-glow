
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * Hook to optimize image loading for better web vitals
 * @param src Image source URL
 * @param options Additional options like alt text, dimensions, and priority
 * @returns Image props and loading status
 */
export const useOptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  // Generate optimized image attributes
  const imageProps = {
    src,
    alt,
    width: width || undefined,
    height: height || undefined,
    loading: priority ? 'eager' : 'lazy',
    fetchpriority: priority ? 'high' : 'auto',
    onLoad: () => setIsLoaded(true),
    onError: (e: any) => setError(e),
    style: {
      // Set aspect ratio if dimensions are provided to prevent layout shift
      aspectRatio: width && height ? `${width}/${height}` : undefined
    }
  };
  
  // Preload high priority images
  useEffect(() => {
    if (priority && typeof window !== 'undefined') {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = src;
      preloadLink.fetchPriority = 'high';
      document.head.appendChild(preloadLink);
      
      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [src, priority]);
  
  return { imageProps, isLoaded, error };
};

export default useOptimizedImage;
