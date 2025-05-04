
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
      />
    </Link>
  );
};

export default Logo;
