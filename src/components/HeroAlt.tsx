
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { useStaticAnimation } from '../hooks/useAnimations';

const HeroAlt = () => {
  const { isLoaded } = useStaticAnimation();

  return (
    <section 
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-white via-brandRed/5 to-brandRed/10"
    >
      {/* Static background */}
      <div className="absolute inset-0 bg-gradient-radial from-brandRed/10 to-transparent opacity-50"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-brandRed/10 text-brandRed px-4 py-2 rounded-full animate-text-reveal">
              <Leaf className="h-4 w-4" /> Sustainable Web Design
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Ensuring your online presence is as powerful as your
              <span className="text-brandRed block mt-2 animate-text-reveal">purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl animate-text-reveal">
              Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. 
              We help purpose-led businesses thrive online without costing the earth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 animate-text-reveal">
              <Link 
                to="/services" 
                className="bg-brandRed text-white px-6 py-3 rounded-lg hover:bg-brandRed/90 transition-all hover:shadow-md hover:scale-[1.02] hover:translate-y-[-2px] duration-300 flex items-center gap-2 group"
              >
                <span>Our Services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/projects" 
                className="bg-white border border-brandRed/20 text-foreground px-6 py-3 rounded-lg hover:bg-brandRed/5 transition-all hover:shadow-md hover:scale-[1.02] hover:translate-y-[-2px] duration-300 flex items-center gap-2 group"
              >
                <span>View Our Work</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in">
            <div className="relative">              
              <div 
                className="bg-gradient-to-br from-yellow-500 via-brandRed to-brandRed/80 rounded-full aspect-square flex items-center justify-center p-12 transition-all duration-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.03]"
              >
                <div className="text-center">
                  <p className="text-xl font-display animate-text-reveal">Eco-friendly</p>
                  <h3 className="text-3xl font-display font-semibold animate-text-reveal">Web Design</h3>
                  <p className="mt-2 text-white/80 animate-text-reveal">For purpose-driven brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAlt;
