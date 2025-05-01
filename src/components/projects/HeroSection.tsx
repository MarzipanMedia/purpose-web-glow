
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="py-20 bg-gradient-subtle relative overflow-hidden"
      aria-label="Projects showcase"
    >
      {/* Static background */}
      <div className="absolute inset-0 bg-gradient-radial from-brandBlue/10 to-transparent opacity-50"></div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 border-4 border-brandBlue/5 rounded-full opacity-50 animate-float" aria-hidden="true"></div>
      <div className="absolute -bottom-24 -left-16 w-48 h-48 border-4 border-brandBlue/5 rounded-full opacity-50 animate-float-delayed" aria-hidden="true"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4 animate-text-reveal">
            Our Work
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-text-reveal">
            Sustainable Digital Success Stories
          </h1>
          <p className="text-lg text-foreground/80 animate-text-reveal">
            Explore our diverse portfolio of purpose-driven brands we've helped thrive online with sustainable web design, ethical SEO strategies, and innovative digital marketing solutions tailored to each unique vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
