
import React from 'react';
import { LucideIcon } from 'lucide-react';
import ServiceWorkProcess from './ServiceWorkProcess';

interface MainServiceProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
  };
  index: number;
}

const MainService: React.FC<MainServiceProps> = ({ service, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div id={service.id} className="scroll-mt-20">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        <div className="space-y-6 animate-fade-in">
          <div className="bg-marzipan/30 inline-block p-3 rounded-full text-brandBlue">
            {service.icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold">
            {service.title}
          </h2>
          <p className="text-lg text-foreground/80">
            {service.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-brandRed"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`animate-fade-in ${isEven ? 'lg:order-last' : ''}`} style={{ animationDelay: "0.2s" }}>
          <ServiceWorkProcess isEven={isEven} />
        </div>
      </div>
    </div>
  );
};

export default MainService;
