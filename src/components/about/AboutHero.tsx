
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGlowEffect, useStaggeredText, useMagneticButton } from '../../hooks/useAnimations';

const AboutHero = () => {
  const { 
    glowRef, 
    glowPosition, 
    isHovering, 
    handleMouseMove, 
    handleMouseEnter, 
    handleMouseLeave 
  } = useGlowEffect();

  const { ref: headingRef, renderWords: renderHeadingWords } = useStaggeredText(
    "Digital marketing with purpose and impact", 
    0.08
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
      className="py-20 bg-gradient-to-br from-brandBlue/10 to-marzipan/20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse following glow effect */}
      <div 
        className="absolute pointer-events-none bg-gradient-radial from-brandBlue/20 to-transparent rounded-full w-[500px] h-[500px] -z-0 blur-3xl transition-opacity duration-300"
        style={{
          opacity: isHovering ? 0.6 : 0,
          left: `${glowPosition.x - 250}px`,
          top: `${glowPosition.y - 250}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 
              ref={headingRef as React.RefObject<HTMLHeadingElement>}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight"
            >
              {renderHeadingWords()}
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl opacity-0 animate-text-reveal" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              Marzipan Media is a digital content & marketing agency based in Sydney. 
              We create online campaigns that don't just engage audiences but resonate 
              with them as well, helping purpose-driven brands shine brighter online.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 opacity-0 animate-text-reveal" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
              <Link 
                to="/contact" 
                ref={primaryBtnRef as React.RefObject<HTMLAnchorElement>}
                className="btn-primary group relative overflow-hidden"
                onMouseMove={handlePrimaryBtnMouseMove as any}
                onMouseLeave={handlePrimaryBtnMouseLeave as any}
                style={{
                  transform: `translate(${primaryBtnPosition.x}px, ${primaryBtnPosition.y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25)'
                }}
              >
                <span className="relative z-10">Get in touch</span> 
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-brandBlue to-brandBlue/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </Link>
              <Link 
                to="/projects" 
                ref={secondaryBtnRef as React.RefObject<HTMLAnchorElement>}
                className="btn-secondary group relative overflow-hidden"
                onMouseMove={handleSecondaryBtnMouseMove as any}
                onMouseLeave={handleSecondaryBtnMouseLeave as any}
                style={{
                  transform: `translate(${secondaryBtnPosition.x}px, ${secondaryBtnPosition.y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25)'
                }}
              >
                <span className="relative z-10">See our work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-marzipan/30 to-marzipan/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden relative animate-fade-in">
              <img 
                src="/webdesign-agency-min.webp" 
                alt="Marzipan Media team working on sustainable digital solutions" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'webdesign-sydney-bondi.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div 
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-xs animate-fade-in transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl" 
              style={{ animationDelay: '0.3s' }}
            >
              <h3 className="text-lg font-semibold mb-2 opacity-0 animate-text-reveal" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>Sustainable Digital Solutions</h3>
              <p className="text-foreground/70 text-sm opacity-0 animate-text-reveal" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                Creating websites, videos and digital marketing campaigns that scale, convert, and respect our planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
