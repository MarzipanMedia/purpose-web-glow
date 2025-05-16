
import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
}

const CertificationLogos = () => {
  const logos: LogoProps[] = [
    {
      src: "/path-to-google-logo.png", // Replace with actual path when available
      alt: "Google Ads Search Certified"
    },
    {
      src: "/path-to-dan-logo.png", // Replace with actual path when available
      alt: "Digital Agency Network Verified Agency"
    },
    {
      src: "/path-to-top-logo.png", // Replace with actual path when available
      alt: "Top Digital Perdie"
    },
    {
      src: "/path-to-seo4-logo.png", // Replace with actual path when available
      alt: "Top Web Design Agencies"
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
