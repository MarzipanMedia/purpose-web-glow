
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'reversed';
  className?: string;
}

const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
  const [imageError, setImageError] = useState(false);
  
  // Define both primary logo paths and fallback paths
  const primaryLogoSrc = variant === 'default' 
    ? '/marzipan-sydney-webdesign.avif' 
    : '/Marzipan-Logo-Rev.png';
  
  const fallbackLogoSrc = variant === 'default'
    ? '/Marzipan-Logo.png'
    : '/Marzipan-Logo-Rev.png';

  // Handle image load errors
  const handleImageError = () => {
    console.error(`Logo image failed to load: ${primaryLogoSrc}`);
    setImageError(true);
  };

  // Track if even the fallback image failed
  const [fallbackFailed, setFallbackFailed] = useState(false);
  
  const handleFallbackError = () => {
    console.error("Even fallback logo failed to load");
    setFallbackFailed(true);
  };

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      {imageError ? (
        // Fallback display when primary image fails to load
        fallbackFailed ? (
          // Text fallback when both images fail
          variant === 'default' ? (
            <span className="text-brandBlue font-bold text-xl">Marzipan</span>
          ) : (
            <span className="text-white font-bold text-xl">Marzipan</span>
          )
        ) : (
          // Fallback image
          <img 
            src={fallbackLogoSrc}
            alt="Marzipan Sydney" 
            className="h-auto max-h-8 md:max-h-12 w-auto transition-transform hover:scale-[1.02]"
            width="180"
            height="48"
            loading="eager"
            decoding="async"
            onError={handleFallbackError}
          />
        )
      ) : (
        // Primary image
        <img 
          src={primaryLogoSrc} 
          alt="Marzipan Sydney" 
          className="h-auto max-h-8 md:max-h-12 w-auto transition-transform hover:scale-[1.02]"
          width="180"
          height="48"
          loading="eager"
          decoding="async"
          onError={handleImageError}
        />
      )}
    </Link>
  );
};

export default Logo;
