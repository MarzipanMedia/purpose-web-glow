
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Check } from 'lucide-react';
import { useGlowEffect, useStaggeredText, useMagneticButton } from '../../hooks/useAnimations';

const AiSeoHero = () => {
  const { 
    glowRef, 
    glowPosition, 
    isHovering, 
    handleMouseMove, 
    handleMouseEnter, 
    handleMouseLeave 
  } = useGlowEffect();

  const { ref: headingRef, renderWords: renderHeadingWords } = useStaggeredText(
    "Ethical AI SEO for Sustainable Growth", 
    0.08
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
      className="py-20 bg-gradient-subtle relative overflow-hidden"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4 opacity-0 animate-text-reveal" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              AI-Driven Strategies
            </div>
            <h1 
              ref={headingRef as React.RefObject<HTMLHeadingElement>}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              {renderHeadingWords()}
            </h1>
            <p className="text-lg text-foreground/80 mb-8 opacity-0 animate-text-reveal" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              Harness the power of AI to drive sustainable SEO strategies that align with your values and deliver long-term results.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-text-reveal" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
              <Link 
                to="#contact" 
                ref={primaryBtnRef}
                className="btn-primary group relative overflow-hidden flex items-center gap-2"
                onMouseMove={handlePrimaryBtnMouseMove}
                onMouseLeave={handlePrimaryBtnMouseLeave}
                style={{
                  transform: `translate(${primaryBtnPosition.x}px, ${primaryBtnPosition.y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25)'
                }}
              >
                <span className="relative z-10">Get Started</span> 
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-brandBlue to-brandBlue/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </Link>
              <Link 
                to="/projects" 
                ref={secondaryBtnRef}
                className="btn-secondary group relative overflow-hidden flex items-center gap-2"
                onMouseMove={handleSecondaryBtnMouseMove}
                onMouseLeave={handleSecondaryBtnMouseLeave}
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
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div 
              className="bg-gradient-to-br from-brandBlue to-brandBlue/70 rounded-lg p-8 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Brain className="h-10 w-10 mr-4 text-white" />
                <h2 className="text-2xl font-display text-white">Why Choose AI SEO?</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Ethical AI practices that respect user privacy",
                  "Data-driven insights for informed decision-making",
                  "Sustainable strategies that benefit both your business and the planet",
                  "Improved search rankings and organic traffic"
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start opacity-0 animate-text-reveal"
                    style={{ animationDelay: `${0.8 + index * 0.1}s`, animationFillMode: "forwards" }}
                  >
                    <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSeoHero;
