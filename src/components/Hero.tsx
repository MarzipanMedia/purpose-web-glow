
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-white via-marzipan/5 to-marzipan/10" id="hero-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main content with clear LCP identification */}
          <div className="md:col-span-7 space-y-6">
            <h1 
              id="main-heading" 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              fetchpriority="high"
            >
              Ensuring your online presence is as powerful as your 
              <span className="gradient-text"> purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
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
          
          <div className="md:col-span-5">
            <div className="relative" style={{ aspectRatio: '1/1', width: '100%' }}>
              {/* Using consistent CSS-based styling for visuals */}
              <div className="absolute inset-0 bg-gradient-radial from-brandBlue/20 to-transparent opacity-70 rounded-full"></div>
              <div 
                className="bg-marzipan/80 rounded-full aspect-square flex items-center justify-center p-12 relative z-10"
                style={{ width: '100%', height: 'auto' }}
              >
                <div className="text-center">
                  <p className="text-xl font-display">Eco-friendly</p>
                  <h2 className="text-3xl font-display font-semibold">Web Design</h2>
                  <p className="mt-2 text-foreground/80">For purpose-driven brands</p>
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
