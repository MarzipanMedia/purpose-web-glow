
import React from 'react';
import { BarChart3, Award, Users } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-brandBlue">
            Our Impact at a Glance
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandBlue animate-on-scroll opacity-0" style={{ transitionDelay: "0.1s" }}>
            <div className="text-brandBlue mb-4 flex justify-center">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-4xl font-display font-bold text-brandBlue mb-2">90%</h3>
            <p className="text-foreground/80">Lower Carbon Emissions Than Traditional Websites</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandBlue animate-on-scroll opacity-0" style={{ transitionDelay: "0.2s" }}>
            <div className="text-brandBlue mb-4 flex justify-center">
              <Award size={32} />
            </div>
            <h3 className="text-4xl font-display font-bold text-brandBlue mb-2">2x</h3>
            <p className="text-foreground/80">Faster Page Load Times Than Industry Average</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandBlue animate-on-scroll opacity-0" style={{ transitionDelay: "0.3s" }}>
            <div className="text-brandBlue mb-4 flex justify-center">
              <Users size={32} />
            </div>
            <h3 className="text-4xl font-display font-bold text-brandBlue mb-2">15+</h3>
            <p className="text-foreground/80">Purpose-driven Brands Successfully Launched</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
