
import React from 'react';
import { useGlowEffect, useStaggeredText } from '../../hooks/useAnimations';

const ServicesHero = () => {
  const { 
    glowRef, 
    glowPosition, 
    isHovering, 
    handleMouseMove, 
    handleMouseEnter, 
    handleMouseLeave 
  } = useGlowEffect();

  const { ref: headingRef, renderWords: renderHeadingWords } = useStaggeredText(
    "Sustainable Digital Solutions for Purpose-Driven Brands", 
    0.07
  );

  return (
    <section 
      ref={glowRef}
      className="py-20 bg-gradient-subtle relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse following glow effect */}
      <div 
        className="absolute pointer-events-none bg-gradient-radial from-brandBlue/20 to-transparent rounded-full w-[400px] h-[400px] -z-0 blur-3xl transition-opacity duration-300"
        style={{
          opacity: isHovering ? 0.7 : 0,
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease, left 0.5s ease-out, top 0.5s ease-out'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-48 h-48 border-4 border-brandBlue/5 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 border-4 border-brandBlue/5 rounded-full opacity-30 animate-float-delay"></div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4 opacity-0 animate-text-reveal" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            {renderHeadingWords()}
          </h1>
          <p className="text-lg text-foreground/80 mb-8 opacity-0 animate-text-reveal" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            We combine digital expertise with sustainability principles to help your brand make a positive impact online and offline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
