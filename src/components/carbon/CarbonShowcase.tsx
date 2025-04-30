import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Schedule tasks safely with fallback for browsers without requestIdleCallback
const scheduleIdleTask = (callback: () => void, timeout = 100) => {
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(callback);
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(callback, timeout);
  }
};

const CarbonShowcase: React.FC = () => {
  useEffect(() => {
    // Load carbon badge script using the polyfill
    const loadCarbonBadge = () => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@websitecarbon/badge@1/dist/wcbadge.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log('Carbon badge script loaded');
      };

      script.onerror = () => {
        console.error('Failed to load carbon badge script');
      };
    };

    scheduleIdleTask(loadCarbonBadge);

    return () => {
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
          <div className="flex justify-center">
            <div className="wcb-badge"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonShowcase;
