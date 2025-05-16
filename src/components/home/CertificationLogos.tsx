
import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  link: string; 
}

const CertificationLogos = () => {
  const logos: LogoProps[] = [
    {
      src: "/certification-logos/google.webp", 
      alt: "Google Ads Search Certified",
      link: "https://skillshop.credential.net/707f58b4-de69-4ba0-bb2a-71bd6b0b8b71"
    },
    {
      src: "/certification-logos/DAN-member-badge-dark-h.webp", 
      alt: "Digital Agency Network Verified Agency",
      link: "https://digitalagencynetwork.com/agency/marzipan-media/"
    },
    {
      src: "/certification-logos/Top-WEB-DESIGN-Agencies.png", 
      alt: "Top Web Design Agencies",
      link: "https://digitalagencynetwork.com/agency/marzipan-media/"
    },
    {
      src: "/certification-logos/SEO04.webp", 
      alt: "Top Web Design Agencies Sydney",
      link: "https://www.pandia.com/au/bondi-nsw/seo-company#list4"
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
