
import React, { useEffect, useRef } from 'react';

// Client logos - using static imports for better loading performance
const logos = [
  { src: "/client-logos/birchal-sem-logo.png", alt: "Birchal" },
  { src: "/client-logos/Finsia-SEO-logo.png", alt: "Finsia" },
  { src: "/client-logos/focus.png", alt: "Focus" },
  { src: "/client-logos/lagum-seo-logo.png", alt: "Lagum" },
  { src: "/client-logos/mhnsw-content-logo.png", alt: "MHNSW" },
  { src: "/client-logos/nas-adwords-logo.png", alt: "NAS" },
];

const LogosAlt3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Simple intersection observer for animation
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.fade-in');
            elements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, i * 50); // Faster staggered animation for logos
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-alt3 bg-white py-16">
      <div className="container-alt3">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Trusted by Purpose-Driven Brands
          </h2>
        </div>
        
        <div className="logo-strip">
          {logos.map((logo, index) => (
            <div key={index} className="fade-in mx-auto">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                loading="lazy" 
                width="120" 
                height="60"
                style={{ maxWidth: '120px', maxHeight: '60px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosAlt3;
