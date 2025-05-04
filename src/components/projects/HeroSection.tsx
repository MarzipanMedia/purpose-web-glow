
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-marzipan/20 to-brandBlue/10">
      <div className="container-custom">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
            Our Work
          </div>
          <h1 
            className="text-4xl md:text-5xl font-display font-bold mb-6"
            fetchpriority="high"
            id="projects-heading"
          >
            Sustainable Digital Success Stories
          </h1>
          <p className="text-lg text-foreground/80">
            Explore our portfolio of purpose-driven brands we've helped thrive online with sustainable web design and ethical SEO strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
