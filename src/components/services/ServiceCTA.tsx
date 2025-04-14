
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCTA = () => {
  return (
    <section className="py-16 bg-brandBlue text-white">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 animate-fade-in">
          Let's work together
        </h2>
        <p className="text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Ready to create a digital presence that's as powerful as your purpose? 
          Get in touch to discuss how we can help your brand thrive online while supporting a more sustainable internet.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-white text-brandBlue px-8 py-4 rounded-lg font-medium hover:bg-marzipan transition-all animate-fade-in" 
          style={{ animationDelay: "0.2s" }}
        >
          Start Your Sustainable Journey <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default ServiceCTA;
