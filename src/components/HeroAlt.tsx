
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';

const HeroAlt = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-white via-brandRed/5 to-brandRed/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 bg-brandRed/10 text-brandRed px-4 py-2 rounded-full">
              <Leaf className="h-4 w-4" /> Sustainable Web Design
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Ensuring your online presence is as powerful as your 
              <span className="text-brandRed"> purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. 
              We help purpose-led businesses thrive online without costing the earth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/services" className="bg-brandRed text-white px-6 py-3 rounded-lg hover:bg-brandRed/90 transition-all hover:shadow-md hover:scale-[1.02] hover:translate-y-[-2px] duration-300 flex items-center gap-2">
                Our Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="bg-white border border-brandRed/20 text-foreground px-6 py-3 rounded-lg hover:bg-brandRed/5 transition-all hover:shadow-md hover:scale-[1.02] hover:translate-y-[-2px] duration-300 flex items-center gap-2">
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Sun-like rays around the circle */}
              <div className="absolute inset-0 w-full h-full">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 h-[120%] w-3 bg-gradient-to-t from-brandRed/0 via-brandRed/20 to-brandRed/0 rounded-full origin-bottom"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                      opacity: 0.8
                    }}
                  />
                ))}
              </div>
              
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-yellow-500/30 via-brandRed/20 to-transparent opacity-70 rounded-full animate-pulse-slow"></div>
              
              {/* Main sun/circle with gradient */}
              <div className="bg-gradient-to-br from-yellow-500 via-brandRed to-brandRed/80 rounded-full aspect-square flex items-center justify-center p-12 transition-all duration-700 animate-pulse-slow text-white shadow-lg">
                <div className="text-center">
                  <p className="text-xl font-display">Eco-friendly</p>
                  <h3 className="text-3xl font-display font-semibold">Web Design</h3>
                  <p className="mt-2 text-white/80">For purpose-driven brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave border at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.8,0,102.86,19.14,151.91,55.54A528.67,528.67,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroAlt;
