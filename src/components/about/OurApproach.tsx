
import React from 'react';
import { Check } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const OurApproach = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-gradient-to-br from-marzipan/20 to-brandBlue/10 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">What Makes Us Different</h3>
              
              <div className="space-y-4">
                {[
                  "Combining sustainable web design with cutting-edge AI technology",
                  "Creating digital strategies that prioritize both performance and planet",
                  "Building websites that load faster and use less energy",
                  "Implementing ethical SEO practices that generate real results",
                  "Focusing on ROI-driven metrics that matter to your business"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 bg-brandBlue rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-foreground/80 dark:text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Adjust positioning and responsiveness for the call-out box */}
            <div className={`
              absolute 
              bg-brandRed 
              text-white 
              p-6 
              rounded-lg 
              shadow-lg 
              max-w-xs 
              animate-fade-in 
              ${isMobile 
                ? 'relative mt-6 w-full' 
                : '-bottom-6 -right-6'
              }`} 
              style={{ animationDelay: '0.4s' }}
            >
              <h3 className="text-lg font-semibold mb-2">Grow Impact, Not Just Traffic</h3>
              <p className="text-white/90 text-sm">
                Our approach focuses on creating websites that don't just grow traffic—they grow impact.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight dark:text-white">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-lg text-foreground/80 dark:text-gray-200">
              We help purpose-driven brands rank higher on Google with AI-driven SEO while ensuring 
              their digital presence is lightweight, high-speed, and environmentally responsible.
            </p>
            <p className="text-foreground/70 dark:text-gray-300">
              By combining ethical AI, sustainable web design, and performance-driven SEO strategies, 
              we create websites that align with your values while delivering exceptional results.
            </p>
            <p className="text-foreground/70 dark:text-gray-300">
              Our collaborative approach ensures that your digital presence isn't just beautiful and 
              functional—it's a true extension of your brand's mission and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
