
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const BenAdamsHero = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-square w-full max-w-xl mx-auto mb-8 rounded-2xl overflow-hidden bg-marzipan/20">
            <img 
              src="/marzipan-ben.webp"
              alt="Ben Adams" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-display font-semibold mb-4">Ben Adams</h1>
            <p className="text-xl text-brandBlue dark:text-marzipan mb-4">Co-Founder & Technical Director</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://linkedin.com/in/benadams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-brandBlue dark:hover:text-marzipan transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:benadams@marzipan.com.au"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-brandBlue dark:hover:text-marzipan transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenAdamsHero;
