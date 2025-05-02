
import React, { useState, useEffect, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  mobileSrc?: string;
  sizes?: string;
  isLCP?: boolean;
  className?: string;
}

/**
 * Component for efficiently loading images with mobile optimization
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  mobileSrc,
  sizes = "100vw",
  isLCP = false,
  className = "",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Generate srcSet for responsive images
  const generateSrcSet = (imageSrc: string): string => {
    // Extract base path and extension
    const lastDot = imageSrc.lastIndexOf('.');
    const basePath = lastDot !== -1 ? imageSrc.substring(0, lastDot) : imageSrc;
    const extension = lastDot !== -1 ? imageSrc.substring(lastDot) : '';

    // Generate srcset with multiple sizes
    return `
      ${imageSrc} 1x,
      ${basePath}@2x${extension} 2x
    `;
  };
  
  // Handle image load completion
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Use effect to add loading indicator
  useEffect(() => {
    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div className="relative">
      {!isLoaded && !isLCP && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        srcSet={mobileSrc ? `
          ${mobileSrc} 480w,
          ${src} 800w
        ` : generateSrcSet(src)}
        sizes={sizes}
        loading={isLCP ? "eager" : "lazy"}
        fetchPriority={isLCP ? "high" : "auto"}
        onLoad={handleLoad}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
