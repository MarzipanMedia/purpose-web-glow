
import React from 'react';

interface ServiceWorkProcessProps {
  isEven: boolean;
}

const ServiceWorkProcess: React.FC<ServiceWorkProcessProps> = ({ isEven }) => {
  return (
    <div className={`bg-gradient-to-br ${isEven ? 'from-brandBlue to-brandBlue/70' : 'from-marzipan to-marzipan/70'} rounded-lg p-8 relative h-full`}>
      <div className={`text-${isEven ? 'white' : 'foreground'} space-y-6`}>
        <h3 className="text-2xl font-display">Working Process</h3>
        <ol className="space-y-6">
          <li className="flex gap-4">
            <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${isEven ? 'bg-white/20 text-white' : 'bg-brandBlue/20 text-brandBlue'}`}>1</span>
            <div>
              <h4 className="font-medium">Discovery & Strategy</h4>
              <p className={`${isEven ? 'text-white/80' : 'text-foreground/80'} text-sm mt-1`}>We learn about your brand, goals, and values</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${isEven ? 'bg-white/20 text-white' : 'bg-brandBlue/20 text-brandBlue'}`}>2</span>
            <div>
              <h4 className="font-medium">Planning & Design</h4>
              <p className={`${isEven ? 'text-white/80' : 'text-foreground/80'} text-sm mt-1`}>Creating sustainable solutions aligned with your purpose</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${isEven ? 'bg-white/20 text-white' : 'bg-brandBlue/20 text-brandBlue'}`}>3</span>
            <div>
              <h4 className="font-medium">Implementation</h4>
              <p className={`${isEven ? 'text-white/80' : 'text-foreground/80'} text-sm mt-1`}>Building eco-friendly digital assets</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${isEven ? 'bg-white/20 text-white' : 'bg-brandBlue/20 text-brandBlue'}`}>4</span>
            <div>
              <h4 className="font-medium">Measurement & Optimization</h4>
              <p className={`${isEven ? 'text-white/80' : 'text-foreground/80'} text-sm mt-1`}>Continuous improvement for better results</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ServiceWorkProcess;
