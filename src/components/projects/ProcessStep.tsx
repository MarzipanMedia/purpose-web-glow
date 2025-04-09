
import React from 'react';

export interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  index: number;
}

const ProcessStep = ({ step, title, description, index }: ProcessStepProps) => {
  return (
    <div className="relative animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className={`lg:text-right ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
          <div className="bg-white p-6 rounded-lg border border-marzipan/20 shadow-sm relative">
            <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-brandBlue text-white font-display font-medium text-lg z-10 shadow-md
                         lg:left-0 lg:-translate-x-1/2">
              {step}
            </div>
            
            <div className="lg:hidden flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brandBlue text-white font-display font-medium text-sm">
                {step}
              </div>
              <h3 className="text-xl font-display font-medium">{title}</h3>
            </div>
            
            <div className="hidden lg:block">
              <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
            </div>
            
            <p className="text-foreground/70">{description}</p>
          </div>
        </div>
        
        {/* Empty column for alternating layout */}
        <div className={index % 2 === 0 ? 'hidden lg:block' : ''}></div>
      </div>
    </div>
  );
};

export default ProcessStep;
