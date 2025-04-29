
import React from 'react';
import { 
  LineChart, Zap, Palette, Code, Cloud, BarChart, SearchCheck,
  LucideIcon
} from 'lucide-react';

export interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  index: number;
  isActive?: boolean;
  onClick?: () => void;
  icon?: LucideIcon;
}

const ProcessStep = ({ 
  step, 
  title, 
  description, 
  index,
  isActive = false,
  onClick,
  icon
}: ProcessStepProps) => {
  // Default icons for each step based on index
  const icons = {
    '01': SearchCheck, // Audit
    '02': LineChart,   // Planning
    '03': Palette,     // Design 
    '04': Code,        // Development
    '05': Cloud,       // Hosting
    '06': BarChart     // Optimisation
  };
  
  // Choose the icon from props or default based on step
  const StepIcon = icon || icons[step as keyof typeof icons] || Zap;
  
  return (
    <div 
      className={`relative animate-fade-in transition-all duration-300 ${isActive ? 'scale-105' : ''}`} 
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className={`lg:text-right ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
          <div 
            className={`bg-white p-6 rounded-lg border border-marzipan/20 shadow-sm relative cursor-pointer
                      transition-all duration-300
                      ${isActive ? 'ring-2 ring-brandBlue shadow-md' : 'hover:shadow-md'}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick && onClick();
              }
            }}
          >
            <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full
                         ${isActive ? 'bg-brandRed scale-110' : 'bg-brandBlue'} 
                         text-white font-display font-medium text-lg z-10 shadow-md 
                         transition-all duration-300
                         lg:left-0 lg:-translate-x-1/2`}>
              <span className="sr-only">Process step {step}</span>
              <StepIcon className="h-5 w-5" />
            </div>
            
            <div className="lg:hidden flex items-center gap-3 mb-3">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full 
                            ${isActive ? 'bg-brandRed scale-110' : 'bg-brandBlue'} 
                            text-white transition-all duration-300`}>
                <StepIcon className="h-4 w-4" />
              </div>
              <h3 className="text-xl font-display font-medium">{title}</h3>
            </div>
            
            <div className="hidden lg:block">
              <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
            </div>
            
            <p className="text-foreground/70">{description}</p>
            
            {isActive && (
              <div className="mt-4 pt-4 border-t border-marzipan/30 text-sm text-foreground/70 animate-fade-in">
                <p>This step is critical for ensuring your project meets both business goals and sustainability standards.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Empty column for alternating layout */}
        <div className={index % 2 === 0 ? 'hidden lg:block' : ''}></div>
      </div>
    </div>
  );
};

export default ProcessStep;
