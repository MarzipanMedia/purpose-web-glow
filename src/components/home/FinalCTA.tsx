
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-brandBlue to-brandBlue/90 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to work with our team?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl">
              We're passionate about creating sustainable, effective, and beautiful digital experiences for purpose-driven brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-white text-brandBlue hover:bg-white/90 px-8 text-base"
                asChild
              >
                <Link to="/contact">
                  Get in touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 text-base"
                asChild
              >
                <Link to="/link">
                  Link in Bio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our "No Waste" Promise</h3>
              <p className="mb-4">
                We don't believe in throwaway work. We create sustainable solutions that grow with your business—reducing waste, lowering costs, and minimising environmental impact.
              </p>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Carbon-conscious development</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Sustainable hosting options</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Future-proof technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
