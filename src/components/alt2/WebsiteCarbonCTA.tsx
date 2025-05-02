
import React from 'react';
import { ArrowRight, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebsiteCarbonCTA = () => {
  return (
    <section className="py-16 bg-marzipan/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 defer-animate">
            <div className="inline-block bg-brandRed/10 text-brandRed px-4 py-1 rounded-full">
              Free Tool
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">
              Is Your Website <span className="text-brandRed">Eco-Friendly</span>?
            </h2>
            <p className="text-lg text-foreground/80">
              Discover your website's carbon footprint and how it impacts the environment. 
              Our free tool helps you assess your site's sustainability and provides actionable recommendations.
            </p>
            <Link 
              to="/website-carbon" 
              className="transition-all duration-300 bg-brandRed text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-brandRed/90 hover:shadow-md"
            >
              Check Your Website <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="relative defer-animate">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-marzipan/30">
              <div className="flex justify-center mb-6">
                <div className="bg-brandRed/10 rounded-full p-4 text-brandRed">
                  <Laptop size={40} />
                </div>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-display font-semibold mb-2">Website Carbon Calculator</h3>
                <p className="text-foreground/70">Enter your URL and get instant insights</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <span className="font-medium">Carbon per page view</span>
                  <span className="text-brandRed font-display">1.45g vs. 0.5g</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <span className="font-medium">Page size reduction</span>
                  <span className="text-brandRed font-display">Up to 70%</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <span className="font-medium">Performance boost</span>
                  <span className="text-brandRed font-display">2x faster</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCarbonCTA;
