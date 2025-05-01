
import React, { useRef } from 'react';
import MetaHead from '@/components/MetaHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation, useParallax } from '../hooks/useAnimations';

const AlwaysWas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const { isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const parallaxOffset = useParallax();

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Acknowledgment of Country" 
        description="Marzipan acknowledges the Traditional Owners of Country throughout Australia and their continuing connection to land, waters and community."
      />
      <Header />
      <main className="flex-grow">
        <section 
          ref={sectionRef}
          className="min-h-[80vh] relative flex items-center justify-center bg-gradient-to-br from-[#f8f4e9] to-[#eacda3] overflow-hidden"
        >
          {/* Simplified static decorative elements */}
          <div 
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] border-4 border-brandRed/20 rounded-full opacity-50 animate-float"
          />
          <div 
            className="absolute top-[-8%] right-[-3%] w-[450px] h-[450px] border-4 border-brandRed/30 rounded-full opacity-40 animate-float-delay"
          />
          
          {/* Background subtle patterns */}
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-display font-semibold mb-8 animate-fade-in highlight-text">
                Acknowledgment of Country
              </h1>
              <p 
                ref={textRef}
                className="text-brandRed text-lg md:text-xl leading-relaxed md:leading-relaxed animate-text-reveal"
              >
                Marzipan acknowledges the Traditional Owners of Country throughout Australia and acknowledges their continuing connection to land, waters and community. We pay our respects to the people, the cultures and the Elders past and present, and thank them for preserving the land on which we sit, swim and play.
              </p>
              
              {/* Animated flourish */}
              <div className="mt-16 flex justify-center">
                <div className="w-16 h-1 bg-brandRed/40 rounded animate-expand"></div>
              </div>
            </div>
          </div>
          
          {/* Simplified decorative element */}
          <div 
            className="absolute bottom-[10%] left-[10%] w-[200px] h-[200px] border-2 border-brandRed/10 rounded-full animate-pulse-slow"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AlwaysWas;
