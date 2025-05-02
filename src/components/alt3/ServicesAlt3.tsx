
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Sustainable Web Design",
    description: "Beautiful, fast-loading websites with a minimal carbon footprint that still deliver exceptional user experiences.",
    link: "/services/sustainable-web-design",
  },
  {
    title: "AI-Driven SEO",
    description: "Data-driven search optimization powered by artificial intelligence to boost your organic traffic and rankings.",
    link: "/services/ai-seo",
  },
  {
    title: "Content Creation",
    description: "Engaging, purpose-aligned content that resonates with your audience while driving conversions.",
    link: "/services/content-creation",
  },
  {
    title: "Digital Marketing",
    description: "Sustainable, ethical digital marketing strategies that connect your brand with the right audience.",
    link: "/services/digital-marketing",
  }
];

const ServicesAlt3 = () => {
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
    <section ref={sectionRef} className="section-alt3 bg-gray-50 py-16">
      <div className="container-alt3">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg">
            We combine sustainability with digital excellence to help purpose-driven brands make a meaningful impact online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-alt3 fade-in"
            >
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/80 mb-4">{service.description}</p>
              <Link to={service.link} className="inline-flex items-center text-brandRed hover-link">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/services" className="btn-primary-alt3">
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesAlt3;
