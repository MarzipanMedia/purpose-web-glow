
import React from 'react';
import { Leaf, Zap, Recycle } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Sustainability = () => {
  const isMobile = useIsMobile();
  
  const principles = [
    {
      title: "Low Carbon Footprint",
      description: "Our websites are designed to consume minimal energy, reducing CO2 emissions with every page load.",
      icon: <Leaf className="h-6 w-6" />
    },
    {
      title: "Optimised Performance",
      description: "Fast-loading pages that improve user experience while requiring fewer server resources.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Sustainable Practices",
      description: "From eco-hosting to lean code, we incorporate sustainability at every level of web development.",
      icon: <Recycle className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-marzipan/30 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full dark:bg-brandBlue/30">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">
              Sustainable Web Design <br />for a Better Internet
            </h2>
            <p className="text-lg text-foreground/80 dark:text-gray-300">
              At Marzipan, we believe the digital world shouldn't come at the cost of our physical one. 
              Our sustainable design principles create beautiful websites that minimise environmental impact.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mt-8">
              {principles.map((principle, index) => (
                <div key={index} className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="bg-marzipan rounded-full p-2 mt-1 text-brandBlue dark:bg-marzipan/80">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-medium dark:text-white">{principle.title}</h3>
                    <p className="text-foreground/70 dark:text-gray-400">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="callout-box animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {/* Updated positioning to avoid overlapping */}
            <div className={`${isMobile ? 'relative w-full' : 'floating-element'} bg-gradient-to-br from-brandBlue to-brandBlue/70 rounded-lg p-8 text-white relative z-10`}>
              <h3 className="text-2xl font-display mb-4">The Digital Footprint</h3>
              <p className="mb-6">If the internet were a country, it would be the 7th largest polluter.</p>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-display font-bold">416g</div>
                  <p>Average CO2 per page view of a standard website</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-display font-bold">~0.5g</div>
                  <p>Average CO2 per page view of our sustainable websites</p>
                </div>
              </div>
              
              <div className="mt-6 text-sm">
                Source: Website Carbon Calculator
              </div>
            </div>
            {/* Updated decorative element to avoid overlapping */}
            <div className={`${isMobile ? 'hidden' : 'absolute -top-4 -right-4 w-24 h-24 bg-marzipan rounded-full z-[-1]'}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
