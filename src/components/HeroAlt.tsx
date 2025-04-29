
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { useGlowEffect, useStaggeredText, useMagneticButton } from '../hooks/useAnimations';

const HeroAlt = () => {
  const { 
    glowRef, 
    glowPosition, 
    isHovering, 
    handleMouseMove, 
    handleMouseEnter, 
    handleMouseLeave 
  } = useGlowEffect();

  const { ref: headingRef, renderWords: renderHeadingWords } = useStaggeredText(
    "Ensuring your online presence is as powerful as your", 
    0.06
  );

  const { 
    buttonRef: primaryBtnRef, 
    position: primaryBtnPosition, 
    handleMouseMove: handlePrimaryBtnMouseMove, 
    handleMouseLeave: handlePrimaryBtnMouseLeave 
  } = useMagneticButton<HTMLAnchorElement>(0.2);

  const { 
    buttonRef: secondaryBtnRef, 
    position: secondaryBtnPosition, 
    handleMouseMove: handleSecondaryBtnMouseMove, 
    handleMouseLeave: handleSecondaryBtnMouseLeave 
  } = useMagneticButton<HTMLAnchorElement>(0.2);

  return (
    <section 
      ref={glowRef as React.RefObject<HTMLDivElement>}
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-white via-brandRed/5 to-brandRed/10"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect that follows mouse */}
      <div 
        className="absolute pointer-events-none bg-gradient-radial from-brandRed/20 to-transparent rounded-full w-[500px] h-[500px] -z-0 blur-3xl transition-opacity duration-300"
        style={{
          opacity: isHovering ? 0.6 : 0,
          left: `${glowPosition.x - 250}px`,
          top: `${glowPosition.y - 250}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 bg-brandRed/10 text-brandRed px-4 py-2 rounded-full opacity-0 animate-text-reveal" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <Leaf className="h-4 w-4" /> Sustainable Web Design
            </div>
            <h1 
              ref={headingRef as React.RefObject<HTMLHeadingElement>}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
            >
              {renderHeadingWords()}
              <span className="text-brandRed block mt-2 opacity-0 animate-text-reveal" style={{ animationDelay: "1s", animationFillMode: "forwards" }}> purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl opacity-0 animate-text-reveal" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. 
              We help purpose-led businesses thrive online without costing the earth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-text-reveal" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
              <Link 
                to="/services" 
                ref={primaryBtnRef}
                className="bg-brandRed text-white px-6 py-3 rounded-lg hover:bg-brandRed/90 transition-all hover:shadow-md hover:scale-[1.02] hover:translate-y-[-2px] duration-300 flex items-center gap-2 overflow-hidden relative group"
                onMouseMove={handlePrimaryBtnMouseMove}
                onMouseLeave={handlePrimaryBtnMouseLeave}
                style={{
                  transform: `translate(${primaryBtnPosition.x}px, ${primaryBtnPosition.y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25)'
                }}
              >
                <span className="relative z-10">Our Services</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-brandRed to-brandRed/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </Link>
              <Link 
                to="/projects" 
                ref={secondaryBtnRef}
                className="bg-white border border-brandRed/20 text-foreground px-6 py-3 rounded-lg hover:bg-brandRed/5 transition-all hover:shadow-md hover:scale-[1.02] hover:translate-y-[-2px] duration-300 flex items-center gap-2 overflow-hidden relative group"
                onMouseMove={handleSecondaryBtnMouseMove}
                onMouseLeave={handleSecondaryBtnMouseLeave}
                style={{
                  transform: `translate(${secondaryBtnPosition.x}px, ${secondaryBtnPosition.y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25)'
                }}
              >
                <span className="relative z-10">View Our Work</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-marzipan/10 to-marzipan/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 w-full h-full">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 h-[120%] w-3 bg-gradient-to-t from-brandRed/0 via-brandRed/20 to-brandRed/0 rounded-full origin-bottom"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                      opacity: 0.8,
                      animation: `pulse-slow ${3 + i * 0.2}s infinite alternate ease-in-out`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              
              <div 
                className="absolute inset-0 bg-gradient-radial from-yellow-500/30 via-brandRed/20 to-transparent opacity-70 rounded-full"
                style={{
                  transform: isHovering ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.5s ease-out'
                }}
              ></div>
              
              <div 
                className="bg-gradient-to-br from-yellow-500 via-brandRed to-brandRed/80 rounded-full aspect-square flex items-center justify-center p-12 transition-all duration-700 text-white shadow-lg hover:shadow-xl"
                style={{
                  transform: isHovering ? 'scale(1.03)' : 'scale(1)',
                  transition: 'transform 0.5s ease-out, box-shadow 0.3s ease'
                }}
              >
                <div className="text-center">
                  <p className="text-xl font-display opacity-0 animate-text-reveal" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>Eco-friendly</p>
                  <h3 className="text-3xl font-display font-semibold opacity-0 animate-text-reveal" style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}>Web Design</h3>
                  <p className="mt-2 text-white/80 opacity-0 animate-text-reveal" style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}>For purpose-driven brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAlt;
