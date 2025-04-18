
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-brandBlue text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 animate-on-scroll opacity-0">
          Ready to make an impact with your online presence?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 animate-on-scroll opacity-0" style={{ transitionDelay: "0.1s" }}>
          Let's create a sustainable website that aligns with your values and helps you reach your goals.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-white text-brandBlue px-8 py-4 rounded-lg font-medium hover:bg-marzipan transition-all animate-on-scroll opacity-0 shadow-md"
          style={{ transitionDelay: "0.2s" }}
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
