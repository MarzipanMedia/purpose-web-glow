
import React from 'react';
import { useGlowEffect, useStaggeredText } from '../../hooks/useAnimations';

const CarbonHero: React.FC = () => {
  const { 
    glowRef, 
    glowPosition, 
    isHovering, 
    handleMouseMove, 
    handleMouseEnter, 
    handleMouseLeave 
  } = useGlowEffect();

  const { ref: headingRef, renderWords: renderHeadingWords } = useStaggeredText(
    "Website Carbon Footprint Checker", 
    0.08
  );

  return (
    <div 
      ref={glowRef as React.RefObject<HTMLDivElement>}
      className="max-w-3xl mx-auto text-center animate-fade-in relative py-10"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse following glow effect */}
      <div 
        className="absolute pointer-events-none bg-gradient-radial from-brandBlue/15 to-transparent rounded-full w-[400px] h-[400px] -z-0 blur-3xl transition-opacity duration-300"
        style={{
          opacity: isHovering ? 0.6 : 0,
          left: `${glowPosition.x - 200}px`,
          top: `${glowPosition.y - 200}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease'
        }}
      />

      <div className="relative z-10">
        <div className="inline-block bg-brandBlue/10 text-brandBlue dark:bg-brandBlue/20 px-4 py-1 rounded-full mb-4 opacity-0 animate-text-reveal" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          <span className="text-sm font-medium">Free Tool</span>
        </div>
        <h1 
          ref={headingRef as React.RefObject<HTMLHeadingElement>}
          className="text-3xl md:text-5xl font-display font-bold mb-6 dark:text-white"
        >
          {renderHeadingWords()}
        </h1>
        <p className="text-lg text-foreground/80 dark:text-gray-300 mb-6 opacity-0 animate-text-reveal" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          Check the environmental impact of your website and discover how you can make it more sustainable.
        </p>
      </div>
    </div>
  );
};

export default CarbonHero;
