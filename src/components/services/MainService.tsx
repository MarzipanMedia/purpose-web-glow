
import React from 'react';
import { LucideIcon } from 'lucide-react';
import ServiceWorkProcess from './ServiceWorkProcess';
import { useIsMobile } from '../../hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <div id={service.id} className="scroll-mt-20 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className={`space-y-6 animate-fade-in ${isEven ? '' : 'lg:order-2'}`}>
          <div className="bg-marzipan/30 inline-block p-3 rounded-full text-brandBlue">
            {service.icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold">
            {service.title}
          </h2>
          <p className="text-lg text-foreground/80 dark:text-gray-300">
            {service.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-brandRed flex-shrink-0"></div>
                <span className="dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`${isEven ? 'lg:order-2' : ''} w-full mt-8 lg:mt-0`}>
          <div className="w-full animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ServiceWorkProcess isEven={isEven} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainService;
