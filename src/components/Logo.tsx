
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'reversed';
  className?: string;
}

const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
  const logoSrc = variant === 'default' 
    ? '/marzipan-logo.png' 
    : '/marzipan-logo-rev.png';
  
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="Marzipan Sydney" 
        className="h-auto max-h-10 md:max-h-12 w-auto transition-transform hover:scale-[1.02]"
      />
    </Link>
  );
};

export default Logo;
