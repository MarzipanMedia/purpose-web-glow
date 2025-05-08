
import React from 'react';
import { ArrowRight, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebsiteCarbonCTA = () => {
  return (
    <section className="py-16 bg-marzipan/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-on-scroll opacity-0">
            <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full">
              <h2 className="text-sm font-medium">Free Tool</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-semibold">
              Is Your Website <span className="text-brandBlue">Eco-Friendly</span>?
            </h3>
            <p className="text-lg text-foreground/80">
              Discover your website's carbon footprint and how it impacts the environment. 
              Our free tool helps you assess your site's sustainability and provides actionable recommendations.
              See how <Link to="/services/sustainable-web-design" className="text-brandBlue hover:underline">sustainable web design</Link> can benefit your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/website-carbon" 
                className="bg-brandBlue text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-brandBlue/90 transition-all hover:shadow-md hover:scale-[1.02] hover:translate-y-[-2px] duration-300"
              >
                Check Your Website <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="text-brandBlue hover:underline inline-flex items-center gap-2"
              >
                View case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="relative animate-on-scroll opacity-0" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-marzipan/30">
              <div className="flex justify-center mb-6">
                <div className="bg-brandBlue/10 rounded-full p-4 text-brandBlue">
                  <Laptop size={40} />
                </div>
              </div>
              <div className="text-center mb-6">
                <h4 className="text-xl font-display font-semibold mb-2">Website Carbon Calculator</h4>
                <p className="text-foreground/70">Enter your URL and get instant insights</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <span className="font-medium">Carbon per page view</span>
                  <span className="text-brandBlue font-display">1.45g vs. 0.5g</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <span className="font-medium">Page size reduction</span>
                  <span className="text-brandBlue font-display">Up to 70%</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <span className="font-medium">Performance boost</span>
                  <span className="text-brandBlue font-display">2x faster</span>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link 
                  to="/website-carbon" 
                  className="text-brandBlue font-medium hover-link inline-flex items-center gap-1"
                >
                  Check Your Website Now <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brandBlue/20 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCarbonCTA;
