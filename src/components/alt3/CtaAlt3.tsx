
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaAlt3 = () => {
  return (
    <section className="section-alt3 bg-brandRed text-white">
      <div className="container-alt3 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
          Ready to make an impact with your online presence?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Let's create a sustainable website that aligns with your values and helps you reach your goals.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-white text-brandRed px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default CtaAlt3;
