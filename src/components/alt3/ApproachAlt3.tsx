
import React, { useEffect, useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Research & Analysis",
    description: "We research your industry, competition, and target audience to understand what will make your digital presence effective and impactful."
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "We create a customized strategy aligned with your purpose and business objectives, focusing on sustainable best practices."
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our team builds your digital assets with a focus on performance, sustainability, and excellent user experience."
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description: "We continuously measure, learn, and optimize to ensure your digital presence grows and evolves with your business."
  }
];

const ApproachAlt3 = () => {
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
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Our <span className="gradient-text">Approach</span>
          </h2>
          <p className="text-lg">
            We follow a proven methodology that delivers results while staying true to our sustainable values and your brand purpose.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brandRed/10 flex items-center justify-center text-brandRed font-display font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-foreground/80">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-6 top-16 bottom-0 w-0.5 bg-brandRed/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachAlt3;
