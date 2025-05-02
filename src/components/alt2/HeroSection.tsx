
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-white via-brandRed/5 to-brandRed/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brandRed/10 text-brandRed px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M15.5 9l-6 6"></path><circle cx="17" cy="11" r="2"></circle><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 7h18"></path></svg>
              Sustainable Web Design
            </div>
            <h1 
              id="main-heading" 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              data-lcp-element="true"
              fetchpriority="high"
            >
              Ensuring your online presence is as powerful as your 
              <span className="text-brandRed"> purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. 
              We help purpose-led businesses thrive online without costing the earth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/services" className="transition-all duration-300 bg-brandRed text-white px-6 py-3 rounded-lg hover:bg-brandRed/90 hover:shadow-md flex items-center gap-2">
                Our Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="transition-all duration-300 bg-white border border-brandRed/20 text-foreground px-6 py-3 rounded-lg hover:bg-brandRed/5 hover:shadow-md flex items-center gap-2">
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="relative">
              <div 
                className="bg-gradient-to-br from-yellow-500 via-brandRed to-brandRed/80 rounded-full aspect-square flex items-center justify-center p-12 shadow-lg text-white"
                style={{width: "100%", height: "auto"}}
              >
                <div className="text-center">
                  <p className="text-xl font-display">Eco-friendly</p>
                  <h2 className="text-3xl font-display font-semibold">Web Design</h2>
                  <p className="mt-2 text-white/80">For purpose-driven brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
