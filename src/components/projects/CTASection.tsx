
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-brandBlue text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 animate-fade-in">
          Ready to join our success stories?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Let's create a digital presence for your brand that's both effective and environmentally responsible.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-white text-brandBlue px-8 py-4 rounded-lg font-medium hover:bg-marzipan transition-all animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Start a Project <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
