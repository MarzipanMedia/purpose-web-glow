
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStaticAnimation } from '../../hooks/useAnimations';

const AboutHero = () => {
  const { isLoaded } = useStaticAnimation();

  return (
    <section 
      className="py-20 bg-gradient-to-br from-brandBlue/10 to-marzipan/20 relative overflow-hidden"
    >
      {/* Static background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-brandBlue/10 to-transparent opacity-50"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              Digital marketing with <span className="bg-gradient-to-r from-brandBlue to-brandRed bg-clip-text text-transparent">purpose</span> and <span className="bg-gradient-to-r from-brandBlue to-brandRed bg-clip-text text-transparent">impact</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl animate-text-reveal">
              Marzipan Media is a digital content & marketing agency based in Sydney. 
              We create online campaigns that don't just engage audiences but resonate 
              with them as well, helping purpose-driven brands shine brighter online.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 animate-text-reveal">
              <Link 
                to="/contact" 
                className="btn-primary group transition-all hover:shadow-md hover:translate-y-[-2px]"
              >
                <span className="relative z-10">Get in touch</span> 
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/projects" 
                className="btn-secondary group transition-all hover:shadow-md hover:translate-y-[-2px]"
              >
                <span className="relative z-10">See our work</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
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
            >
              <h3 className="text-lg font-semibold mb-2 animate-text-reveal">Sustainable Digital Solutions</h3>
              <p className="text-foreground/70 text-sm animate-text-reveal">
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
