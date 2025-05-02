
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'reversed';
  className?: string;
}

const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
  const logoSrc = variant === 'default' 
    ? '/marzipan-logo.webp' 
    : '/Marzipan-Logo-Rev.png';
  
  const altText = "Marzipan Digital - Sustainable Web Design & SEO Agency Sydney";
  
  return (
    <Link to="/" className={`flex items-center ${className}`} aria-label="Marzipan Digital homepage">
      {variant === 'default' ? (
        <picture>
          <source srcSet="/marzipan-logo.webp" type="image/webp" />
          <img 
            src="/Marzipan-Logo.png" 
            alt={altText} 
            className="h-auto max-h-10 md:max-h-12 w-auto transition-transform hover:scale-[1.02]"
            width="180"
            height="48"
            loading="eager"
          />
        </picture>
      ) : (
        <img 
          src={logoSrc} 
          alt={altText} 
          className="h-auto max-h-10 md:max-h-12 w-auto transition-transform hover:scale-[1.02]"
          width="180"
          height="48"
          loading="eager"
        />
      )}
    </Link>
  );
};

export default Logo;
