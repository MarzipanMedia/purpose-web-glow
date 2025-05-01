
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useStaticAnimation } from '../hooks/useAnimations';

const Hero = () => {
  const { isLoaded } = useStaticAnimation();
  
  useEffect(() => {
    // Report LCP element to improve metrics
    const reportLcp = () => {
      const lcpElement = document.querySelector('.hero-headline');
      if (lcpElement) {
        // @ts-ignore - Using web vitals API
        if (window.LCP) window.LCP(lcpElement);
      }
    };
    
    // Execute after a short delay to ensure the element is properly rendered
    setTimeout(reportLcp, 100);
  }, []);

  return (
    <section 
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-subtle"
    >
      {/* Simplified static background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-brandBlue/5 via-transparent to-transparent opacity-50"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight hero-headline">
              Ensuring your online presence is as powerful as your
              <span className="gradient-text block mt-2">purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl animate-text-reveal">
              Your website should do more than just exist—it should drive traffic, increase conversions, and align with your values. We offer sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. 
              We help businesses shine brighter online without costing the earth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 animate-text-reveal">
              <Link 
                to="/services" 
                className="btn-primary flex items-center gap-2 transition-all hover:shadow-md hover:translate-y-[-2px] group"
              >
                <span>Digital Services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/projects" 
                className="btn-secondary flex items-center gap-2 transition-all hover:shadow-md hover:translate-y-[-2px] group"
              >
                <span>View Our Work</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in">
            <div className="relative">
              <div className="bg-marzipan/80 rounded-full aspect-square flex items-center justify-center p-12 relative z-10 transition-transform duration-300 hover:scale-105">
                <div className="text-center">
                  <p className="text-xl font-display animate-text-reveal">Eco-friendly</p>
                  <h2 className="text-3xl font-display font-semibold animate-text-reveal">Web Design</h2>
                  <p className="mt-2 text-foreground/80 animate-text-reveal">For purpose-driven brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
