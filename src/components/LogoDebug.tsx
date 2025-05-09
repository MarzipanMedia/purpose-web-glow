
import React from 'react';

const LogoDebug = () => {
  const logoFiles = [
    '/marzipan-sydney-webdesign.avif',
    '/Marzipan-Logo.png',
    '/Marzipan-Logo-Rev.png'
  ];

  return (
    <div className="hidden">
      {/* This component is hidden but will help debug image loading issues */}
      {logoFiles.map((logoPath, index) => (
        <img 
          key={index}
          src={`${logoPath}?v=${new Date().getTime()}`}
          alt="Logo test"
          width="1"
          height="1"
          style={{ visibility: 'hidden', position: 'absolute' }}
          onLoad={() => console.log(`✅ Logo loaded successfully: ${logoPath}`)}
          onError={() => console.error(`❌ Logo failed to load: ${logoPath}`)}
        />
      ))}
    </div>
  );
};

export default LogoDebug;
