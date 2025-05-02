
import React, { useEffect, useRef } from 'react';
import { BarChart3, Award, Users } from 'lucide-react';

const ImpactAlt3 = () => {
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
              }, i * 100); // Staggered animation
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-brandRed">
            Our Impact at a Glance
          </h2>
          <p className="text-lg">
            We help purpose-driven brands rank higher on Google with AI-driven SEO while ensuring their digital presence is lightweight, high-speed, and environmentally responsible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Impact stats with optimized rendering */}
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandRed fade-in">
            <div className="text-brandRed mb-4 flex justify-center">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-4xl font-display font-bold text-brandRed mb-2">90%</h3>
            <p className="text-foreground/80">Lower Carbon Emissions Than Traditional Websites</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandRed fade-in">
            <div className="text-brandRed mb-4 flex justify-center">
              <Award size={32} />
            </div>
            <h3 className="text-4xl font-display font-bold text-brandRed mb-2">2x</h3>
            <p className="text-foreground/80">Faster Page Load Times Than Industry Average</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandRed fade-in">
            <div className="text-brandRed mb-4 flex justify-center">
              <Users size={32} />
            </div>
            <h3 className="text-4xl font-display font-bold text-brandRed mb-2">15+</h3>
            <p className="text-foreground/80">Purpose-driven Brands Successfully Launched</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAlt3;
