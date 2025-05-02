
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WebsiteCheckerBanner = () => {
  return (
    <section className="bg-gradient-to-r from-brandRed to-brandRed/80 text-white py-12">
      <div className="container-alt3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2">
              How sustainable is your website?
            </h3>
            <p className="text-white/90 max-w-lg">
              Use our free tool to check your website's carbon footprint and get actionable tips to make it more sustainable.
            </p>
          </div>
          <div>
            <Link 
              to="/website-carbon" 
              className="btn-secondary-alt3"
            >
              Check My Website <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCheckerBanner;
