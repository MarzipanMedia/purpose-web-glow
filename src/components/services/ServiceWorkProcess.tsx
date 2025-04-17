
import React from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

interface ServiceWorkProcessProps {
  isEven: boolean;
}

const ServiceWorkProcess: React.FC<ServiceWorkProcessProps> = ({ isEven }) => {
  const steps = [
    "Discovery",
    "Strategy",
    "Design",
    "Development",
    "Launch"
  ];
  
  const isMobile = useIsMobile();
  
  return (
    <div className="relative min-h-[300px] lg:min-h-[400px] bg-gradient-to-br from-marzipan/40 to-marzipan/10 rounded-lg p-6 md:p-8 mt-2 border border-marzipan/30 dark:from-marzipan/30 dark:to-transparent dark:border-marzipan/20">
      <h3 className="text-xl md:text-2xl font-display font-medium mb-6 dark:text-white">How We Work</h3>
      
      <div className="relative z-10">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 mb-6"
          >
            <div className="bg-white dark:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center text-brandBlue font-medium shadow-sm border border-marzipan/50">
              {index + 1}
            </div>
            <div className="text-lg font-display dark:text-white">{step}</div>
          </div>
        ))}
      </div>
      
      {!isMobile && (
        <div className="absolute bottom-0 right-0 p-4 lg:p-8">
          <svg 
            width="180" 
            height="180" 
            viewBox="0 0 200 200" 
            className="text-brandBlue/10 dark:text-white/5"
          >
            <circle cx="100" cy="100" r="80" fill="currentColor" fillOpacity="0.2" />
            <circle cx="100" cy="100" r="50" fill="currentColor" fillOpacity="0.3" />
            <circle cx="100" cy="100" r="20" fill="currentColor" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ServiceWorkProcess;
