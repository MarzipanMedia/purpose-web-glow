
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'reversed';
  className?: string;
}

const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
  const logoSrc = variant === 'default' 
    ? '/marzipan-sydney-webdesign.avif' 
    : '/Marzipan-Logo-Rev.png';
    
  // Add onError handler for logo image with improved error handling
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    console.warn('Logo image failed to load:', img.src);
    
    // Fallback to PNG version if AVIF fails
    if (img.src.includes('.avif')) {
      img.src = '/Marzipan-Logo.png';
    } else if (img.src.includes('-Rev.png') && img.src !== '/Marzipan-Logo.png') {
      img.src = '/Marzipan-Logo.png';
    }
  };
  
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="Marzipan Sydney" 
        className="h-auto max-h-10 md:max-h-12 w-auto transition-transform hover:scale-[1.02]"
        width="180"
        height="48"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        onError={handleImageError}
      />
    </Link>
  );
};

export default Logo;
