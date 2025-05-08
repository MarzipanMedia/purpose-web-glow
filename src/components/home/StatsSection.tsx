
import React from 'react';
import { BarChart3, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-brandBlue">
            Our Impact at a Glance
          </h2>
          <p>We help purpose-driven brands rank higher on Google with AI-driven SEO while ensuring their digital presence is lightweight, high-speed, and environmentally responsible.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Link to="/services/sustainable-web-design" className="group">
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandBlue animate-on-scroll opacity-0 group-hover:shadow-lg transition-all duration-300" style={{ transitionDelay: "0.1s" }}>
              <div className="text-brandBlue mb-4 flex justify-center">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-4xl font-display font-bold text-brandBlue mb-2">90%</h3>
              <p className="text-foreground/80">Lower Carbon Emissions Than Traditional Websites</p>
            </div>
          </Link>
          <Link to="/services/ai-seo" className="group">
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandBlue animate-on-scroll opacity-0 group-hover:shadow-lg transition-all duration-300" style={{ transitionDelay: "0.2s" }}>
              <div className="text-brandBlue mb-4 flex justify-center">
                <Award size={32} />
              </div>
              <h3 className="text-4xl font-display font-bold text-brandBlue mb-2">2x</h3>
              <p className="text-foreground/80">Faster Page Load Times Than Industry Average</p>
            </div>
          </Link>
          <Link to="/projects" className="group">
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandBlue animate-on-scroll opacity-0 group-hover:shadow-lg transition-all duration-300" style={{ transitionDelay: "0.3s" }}>
              <div className="text-brandBlue mb-4 flex justify-center">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-display font-bold text-brandBlue mb-2">15+</h3>
              <p className="text-foreground/80">Purpose-driven Brands Successfully Launched</p>
            </div>
          </Link>
        </div>
        <div className="text-center mt-8">
          <Link to="/about" className="text-brandBlue hover:underline inline-flex items-center gap-2">
            Learn more about our approach <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
