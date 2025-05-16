
import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
}

const CertificationLogos = () => {
  const logos: LogoProps[] = [
    {
      src: "/google.webp", // 
      alt: "Google Ads Search Certified"
    },
    {
      src: "/path-to-dan-logo.png", // 
      alt: "Digital Agency Network Verified Agency"
    },
    {
      src: "/Top-WEB-DESIGN-Agencies.png", // 
      alt: "Top Digital Perdie"
    },
    {
      src: "/SEO04.webp", // 
      alt: "Top Web Design Agencies Sydney"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationLogos;
