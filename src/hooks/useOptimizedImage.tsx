
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  lcpImage?: boolean;
}

/**
 * Hook to optimize image loading for better web vitals
 */
export const useOptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  lcpImage = false,
  className = ''
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  // Generate optimized image attributes
  const imageProps = {
    src,
    alt,
    width: width || undefined,
    height: height || undefined,
    loading: priority || lcpImage ? 'eager' : 'lazy', // Don't set loading for priority images
    fetchpriority: priority || lcpImage ? 'high' : 'auto',
    className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0 blur-sm'} transition-opacity duration-300`,
    onLoad: () => setIsLoaded(true),
    onError: (e: any) => setError(e),
    'data-lcp-image': lcpImage ? 'true' : undefined,
    style: {
      // Set aspect ratio if dimensions are provided to prevent layout shift
      aspectRatio: width && height ? `${width}/${height}` : undefined
    }
  };
  
  // Preload high priority images
  useEffect(() => {
    if ((priority || lcpImage) && typeof window !== 'undefined') {
      const img = new Image();
      img.src = src;
      
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = src;
      if (typeof document !== 'undefined') {
        preloadLink.setAttribute('fetchpriority', 'high');
        document.head.appendChild(preloadLink);
      
        return () => {
          if (document.head.contains(preloadLink)) {
            document.head.removeChild(preloadLink);
          }
        };
      }
    }
  }, [src, priority, lcpImage]);
  
  return { imageProps, isLoaded, error };
};

export default useOptimizedImage;
