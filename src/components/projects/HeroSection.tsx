
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container-custom">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
            Our Work
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Sustainable Digital Success Stories
          </h1>
          <p className="text-lg text-foreground/80">
            Explore our diverse portfolio of purpose-driven brands we've helped thrive online with sustainable web design, ethical SEO strategies, and innovative digital marketing solutions tailored to each unique vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
