
import React from 'react';

const ServicesHero = () => {
  return (
    <section 
      className="py-20 bg-gradient-subtle relative overflow-hidden"
    >
      {/* Static background elements */}
      <div className="absolute top-10 left-10 w-48 h-48 border-4 border-brandBlue/5 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 border-4 border-brandBlue/5 rounded-full opacity-30 animate-float-delay"></div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4 animate-text-reveal">
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-text-reveal">
            Sustainable Digital Solutions for Purpose-Driven Brands
          </h1>
          <p className="text-lg text-foreground/80 mb-8 animate-text-reveal">
            We combine digital expertise with sustainability principles to help your brand make a positive impact online and offline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
