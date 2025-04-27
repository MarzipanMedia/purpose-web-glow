
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
  
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      {variant === 'default' ? (
        <picture>
          <source srcSet="/marzipan-logo.webp" type="image/webp" />
          <img 
            src="/Marzipan-Logo.png" 
            alt="Marzipan Sydney" 
            className="h-auto max-h-10 md:max-h-12 w-auto transition-transform hover:scale-[1.02]"
          />
        </picture>
      ) : (
        <img 
          src={logoSrc} 
          alt="Marzipan Sydney" 
          className="h-auto max-h-10 md:max-h-12 w-auto transition-transform hover:scale-[1.02]"
        />
      )}
    </Link>
  );
};

export default Logo;
