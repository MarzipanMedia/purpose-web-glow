
import React from 'react';
import { Link } from 'react-router-dom';

const CarbonShowcase: React.FC = () => {
  // Load carbon badge script only after the component is mounted and visible
  React.useEffect(() => {
    let mounted = true;
    
    // Use Intersection Observer to load the script only when the component is visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && mounted) {
        // Delayed loading of non-critical script
        setTimeout(() => {
          if (!mounted) return;
          
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/@websitecarbon/badge@1/dist/wcbadge.js';
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
          
          observer.disconnect();
        }, 1000); // Delay loading to prioritize more critical content
      }
    }, { threshold: 0.1 });
    
    // Start observing the container element
    const container = document.querySelector('.wcb-container');
    if (container) {
      observer.observe(container);
    }
    
    return () => {
      mounted = false;
      observer.disconnect();
      
      // Clean up script when component unmounts
      const script = document.querySelector('script[src="https://unpkg.com/@websitecarbon/badge@1/dist/wcbadge.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Why Check Your Website's Carbon Footprint?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Websites consume energy, contributing to carbon emissions. By understanding your website's impact, you can take steps to reduce its environmental footprint.
            </p>
            <Link to="/website-carbon" className="text-blue-600 hover:underline dark:text-blue-400">
              Check your website's carbon footprint →
            </Link>
          </div>
          <div className="flex justify-center wcb-container">
            <div className="wcb-badge" aria-label="Website Carbon Badge will load here"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonShowcase;
