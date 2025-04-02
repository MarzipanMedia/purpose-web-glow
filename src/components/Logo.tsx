
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'reversed';
  className?: string;
}

const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
  // Colors based on variant
  const sunraysColor = variant === 'default' ? '#ae2012' : '#F1E9D0';
  const wavesColor = variant === 'default' ? '#186074' : '#ae2012';
  const textColor = variant === 'default' ? '#ae2012' : '#F1E9D0';
  
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className="h-10 w-10">
        <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
          {/* Sunrays */}
          <g fill={sunraysColor}>
            <path d="M120 10 L120 40" strokeWidth="12" stroke={sunraysColor} strokeLinecap="round" />
            <path d="M80 20 L100 45" strokeWidth="12" stroke={sunraysColor} strokeLinecap="round" />
            <path d="M50 40 L80 60" strokeWidth="12" stroke={sunraysColor} strokeLinecap="round" />
            <path d="M160 20 L140 45" strokeWidth="12" stroke={sunraysColor} strokeLinecap="round" />
            <path d="M190 40 L160 60" strokeWidth="12" stroke={sunraysColor} strokeLinecap="round" />
          </g>
          {/* Waves */}
          <path 
            d="M60 100 C80 80, 100 120, 120 100 C140 80, 160 120, 180 100" 
            strokeWidth="12" 
            stroke={wavesColor} 
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="font-display text-2xl font-semibold" style={{ color: textColor }}>
        marzipan<span className={variant === 'default' ? 'text-brandRed' : 'text-brandRed'}>.</span>
      </div>
    </Link>
  );
};

export default Logo;
