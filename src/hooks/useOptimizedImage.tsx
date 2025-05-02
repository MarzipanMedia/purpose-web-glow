
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
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
    loading: priority ? undefined : 'lazy', // Don't set loading for priority images
    className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0 blur-sm'} transition-opacity duration-300`,
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
          document.head.removeChild(preloadLink);
        };
      }
    }
  }, [src, priority]);
  
  return { imageProps, isLoaded, error };
};

export default useOptimizedImage;
