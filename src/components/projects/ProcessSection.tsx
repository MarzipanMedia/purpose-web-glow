
import React, { useState } from 'react';
import ProcessStep from './ProcessStep';
import { processSteps } from './projectsData';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  return (
    <section className="py-16 bg-marzipan/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-display font-semibold mb-4">
            Our Sustainable Development Process
          </h2>
          <p className="text-foreground/80">
            How we create digital experiences that are beautiful, effective, and environmentally responsible.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brandBlue/20 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {processSteps.map((process, index) => (
              <ProcessStep
                key={index}
                step={process.step}
                title={process.title}
                description={process.description}
                index={index}
                isActive={activeStep === index}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                icon={process.icon || undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
