
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useGlowEffect, useStaggeredText, useMagneticButton } from '../hooks/useAnimations';

const Hero = () => {
  const { 
    glowRef, 
    glowPosition, 
    isHovering, 
    handleMouseMove, 
    handleMouseEnter, 
    handleMouseLeave 
  } = useGlowEffect();

  const { ref: headingRef, renderWords: renderHeadingWords } = useStaggeredText(
    "Ensuring your online presence is as powerful as your purpose", 
    0.06
  );

  const { 
    buttonRef: primaryBtnRef, 
    position: primaryBtnPosition, 
    handleMouseMove: handlePrimaryBtnMouseMove, 
    handleMouseLeave: handlePrimaryBtnMouseLeave 
  } = useMagneticButton(0.2);

  const { 
    buttonRef: secondaryBtnRef, 
    position: secondaryBtnPosition, 
    handleMouseMove: handleSecondaryBtnMouseMove, 
    handleMouseLeave: handleSecondaryBtnMouseLeave 
  } = useMagneticButton(0.2);

  return (
    <section 
      ref={glowRef as React.RefObject<HTMLDivElement>}
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-subtle"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect that follows mouse */}
      <div 
        className="absolute pointer-events-none bg-gradient-radial from-brandBlue/10 to-transparent rounded-full w-[500px] h-[500px] -z-0 blur-3xl transition-opacity duration-300"
        style={{
          opacity: isHovering ? 0.7 : 0,
          left: `${glowPosition.x - 250}px`,
          top: `${glowPosition.y - 250}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 
              ref={headingRef as React.RefObject<HTMLHeadingElement>}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
            >
              {renderHeadingWords()}
              <span className="gradient-text block mt-2"> purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl opacity-0 animate-text-reveal" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              Your website should do more than just exist—it should drive traffic, increase conversions, and align with your values. We offer sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. 
              We help businesses shine brighter online without costing the earth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-text-reveal" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
              <Link 
                to="/services" 
                ref={primaryBtnRef as React.RefObject<HTMLAnchorElement>}
                className="btn-primary flex items-center gap-2 overflow-hidden relative group"
                onMouseMove={handlePrimaryBtnMouseMove as any}
                onMouseLeave={handlePrimaryBtnMouseLeave as any}
                style={{
                  transform: `translate(${primaryBtnPosition.x}px, ${primaryBtnPosition.y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25)'
                }}
              >
                <span className="relative z-10">Digital Services</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-brandBlue to-brandBlue/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </Link>
              <Link 
                to="/projects" 
                ref={secondaryBtnRef as React.RefObject<HTMLAnchorElement>}
                className="btn-secondary flex items-center gap-2 overflow-hidden relative group"
                onMouseMove={handleSecondaryBtnMouseMove as any}
                onMouseLeave={handleSecondaryBtnMouseLeave as any}
                style={{
                  transform: `translate(${secondaryBtnPosition.x}px, ${secondaryBtnPosition.y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25)'
                }}
              >
                <span className="relative z-10">View Our Work</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-marzipan/30 to-marzipan/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Add multiple pulse rings */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 bg-gradient-radial from-brandBlue/20 to-transparent opacity-70 rounded-full animate-pulse-slow"
                  style={{ 
                    animationDelay: `${i * 1.3}s`,
                    transform: `scale(${1 + i * 0.05})` 
                  }}
                />
              ))}
              <div className="bg-marzipan/80 rounded-full aspect-square flex items-center justify-center p-12 relative z-10 transition-transform duration-300 hover:scale-105">
                <div className="text-center">
                  <p className="text-xl font-display opacity-0 animate-text-reveal" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>Eco-friendly</p>
                  <h2 className="text-3xl font-display font-semibold opacity-0 animate-text-reveal" style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}>Web Design</h2>
                  <p className="mt-2 text-foreground/80 opacity-0 animate-text-reveal" style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}>For purpose-driven brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
