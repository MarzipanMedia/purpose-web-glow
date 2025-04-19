
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brandBlue/10 to-marzipan/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              Digital marketing with <span className="gradient-text">purpose</span> and <span className="gradient-text">impact</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl">
              Marzipan Media is a digital content & marketing agency based in Sydney. 
              We create online campaigns that don't just engage audiences but resonate 
              with them as well, helping purpose-driven brands shine brighter online.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/projects" className="btn-secondary">
                See our work
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden relative animate-fade-in">
              <img 
                src="/about-hero.jpg" 
                alt="Marzipan Media team working on sustainable digital solutions" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-xs animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold mb-2">Sustainable Digital Solutions</h3>
              <p className="text-foreground/70 text-sm">
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
