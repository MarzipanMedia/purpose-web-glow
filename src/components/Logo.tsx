
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

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      {imageError ? (
        // Fallback display when image fails to load
        <img 
          src={fallbackLogoSrc}
          alt="Marzipan Sydney" 
          className="h-auto max-h-8 md:max-h-12 w-auto transition-transform hover:scale-[1.02]"
          width="180"
          height="48"
          loading="eager"
          decoding="async"
          onError={() => {
            console.error("Even fallback logo failed to load");
            // If even fallback fails, show text logo
          }}
        />
      ) : (
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
      
      {/* Final text fallback that will display if both images fail */}
      {imageError && fallbackLogoSrc === '/Marzipan-Logo-Rev.png' && (
        <span className="text-white font-bold text-xl ml-2">Marzipan</span>
      )}
      {imageError && fallbackLogoSrc !== '/Marzipan-Logo-Rev.png' && (
        <span className="text-brandBlue font-bold text-xl ml-2">Marzipan</span>
      )}
    </Link>
  );
};

export default Logo;
