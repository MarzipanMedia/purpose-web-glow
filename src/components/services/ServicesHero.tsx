
import React from 'react';

const ServicesHero = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Sustainable Digital Solutions for Purpose-Driven Brands
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            We combine digital expertise with sustainability principles to help your brand make a positive impact online and offline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
