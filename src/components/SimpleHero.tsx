
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SimpleHero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-subtle">
      {/* Simple gradient background instead of mouse-following effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-brandBlue/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight hero-headline">
              <div>
                <span className="inline-block opacity-0 animate-text-reveal" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>Ensuring</span>{' '}
                <span className="inline-block opacity-0 animate-text-reveal" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>your</span>{' '}
                <span className="inline-block opacity-0 animate-text-reveal" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>online</span>{' '}
                <span className="inline-block opacity-0 animate-text-reveal" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>presence</span>{' '}
                <span className="inline-block opacity-0 animate-text-reveal" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>is</span>{' '}
                <span className="inline-block opacity-0 animate-text-reveal" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>as</span>{' '}
                <span className="inline-block opacity-0 animate-text-reveal" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>powerful</span>{' '}
                <span className="inline-block opacity-0 animate-text-reveal" style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}>as</span>{' '}
                <span className="inline-block opacity-0 animate-text-reveal" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>your</span>
              </div>
              <span className="gradient-text block mt-2 opacity-0 animate-text-reveal" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>purpose</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl opacity-0 animate-text-reveal" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              Your website should do more than just exist—it should drive traffic, increase conversions, and align with your values. We offer sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. 
              We help businesses shine brighter online without costing the earth.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-text-reveal" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
              <Link 
                to="/services" 
                className="btn-primary flex items-center gap-2 overflow-hidden relative group transition-all duration-300 hover:shadow-md"
              >
                <span className="relative z-10">Digital Services</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-brandBlue to-brandBlue/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </Link>
              
              <Link 
                to="/projects" 
                className="btn-secondary flex items-center gap-2 overflow-hidden relative group transition-all duration-300 hover:shadow-md"
              >
                <span className="relative z-10">View Our Work</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-marzipan/30 to-marzipan/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Static circles with simple CSS animations instead of JS-driven ones */}
              <div className="absolute inset-0 bg-gradient-radial from-brandBlue/20 to-transparent opacity-70 rounded-full animate-pulse" style={{ animationDuration: "3s" }}></div>
              <div className="absolute inset-0 bg-gradient-radial from-brandBlue/10 to-transparent opacity-70 rounded-full animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }}></div>
              <div className="absolute inset-0 bg-gradient-radial from-brandBlue/5 to-transparent opacity-70 rounded-full animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }}></div>
              
              <div className="bg-marzipan/80 rounded-full aspect-square flex items-center justify-center p-12 relative z-10 transition-transform duration-300 hover:scale-105">
                <div className="text-center">
                  <p className="text-xl font-display opacity-0 animate-text-reveal" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>Eco-friendly</p>
                  <h2 className="text-3xl font-display font-semibold opacity-0 animate-text-reveal" style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}>Web Design</h2>
                  <p className="mt-2 text-foreground/80 opacity-0 animate-text-reveal" style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}>For purpose-driven brands</p>
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

export default SimpleHero;
