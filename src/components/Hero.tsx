
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-br from-white via-brandRed/5 to-brandRed/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="md:col-span-7 space-y-4 md:space-y-6">
            {/* Critical text rendering with optimized attributes */}
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              id="main-heading"
              data-lcp="true"
              fetchpriority="high"
              style={{ fontDisplay: 'swap' as any }}
            >
              Ensuring your online presence is as powerful as your 
              <span className="gradient-text"> purpose</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl">
              Your website should do more than just exist—it should drive traffic, increase conversions, and align with your values. We offer sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. 
              We help businesses shine brighter online without costing the earth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/services" className="btn-primary flex items-center gap-2">
                Digital Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="btn-secondary flex items-center gap-2">
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Defer non-critical content */}
          <div className="md:col-span-5 mt-6 md:mt-0">
            {!isMobile && (
              <div className="relative">
                <div 
                  className="bg-gradient-to-br from-yellow-500 via-brandRed to-brandRed/80 rounded-full aspect-square flex items-center justify-center p-8 md:p-12 relative z-10 text-white shadow-lg"
                >
                  <div className="text-center">
                    <p className="text-lg md:text-xl">Eco-friendly</p>
                    <h2 className="text-2xl md:text-3xl font-semibold">Web Design</h2>
                    <p className="mt-2 text-white/80">For purpose-driven brands</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
