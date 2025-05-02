
import React from 'react';
import { useGlowEffect, useStaggeredText } from '../../hooks/useAnimations';

const HeroSection = () => {
  const { 
    glowRef, 
    glowPosition, 
    isHovering, 
    handleMouseMove, 
    handleMouseEnter, 
    handleMouseLeave 
  } = useGlowEffect();

  const { ref: headingRef, renderWords: renderHeadingWords } = useStaggeredText(
    "Sustainable Digital Success Stories", 
    0.08
  );

  return (
    <section 
      ref={glowRef}
      className="py-20 bg-gradient-subtle relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Projects showcase with interactive effects"
    >
      {/* Mouse following glow effect */}
      <div 
        className="absolute pointer-events-none bg-gradient-radial from-brandBlue/15 to-transparent rounded-full w-[400px] h-[400px] -z-0 blur-3xl transition-opacity duration-300"
        style={{
          opacity: isHovering ? 0.7 : 0,
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease, left 0.5s ease-out, top 0.5s ease-out'
        }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 border-4 border-brandBlue/5 rounded-full opacity-50 animate-float" aria-hidden="true"></div>
      <div className="absolute -bottom-24 -left-16 w-48 h-48 border-4 border-brandBlue/5 rounded-full opacity-50 animate-float-delayed" aria-hidden="true"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4 opacity-0 animate-text-reveal" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Our Work
          </div>
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            {renderHeadingWords()}
          </h1>
          <p className="text-lg text-foreground/80 opacity-0 animate-text-reveal" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
            Explore our diverse portfolio of purpose-driven brands we've helped thrive online with sustainable web design, ethical SEO strategies, and innovative digital marketing solutions tailored to each unique vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
