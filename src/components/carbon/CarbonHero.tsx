
import React from 'react';

const CarbonHero: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center animate-fade-in">
      <div className="inline-block bg-brandBlue/10 text-brandBlue dark:bg-brandBlue/20 px-4 py-1 rounded-full mb-4">
        <span className="text-sm font-medium">Free Tool</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 dark:text-white">
        Website Carbon Footprint Checker
      </h1>
      <p className="text-lg text-foreground/80 dark:text-gray-300 mb-6">
        Check the environmental impact of your website and discover how you can make it more sustainable.
      </p>
    </div>
  );
};

export default CarbonHero;
