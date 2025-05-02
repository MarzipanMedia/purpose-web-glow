
import React from 'react';
import { BarChart3, Award, Users } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-brandRed">
            Our Impact at a Glance
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <BarChart3 size={32} />,
              stat: "90%",
              text: "Lower Carbon Emissions Than Traditional Websites"
            },
            {
              icon: <Award size={32} />,
              stat: "2x",
              text: "Faster Page Load Times Than Industry Average"
            },
            {
              icon: <Users size={32} />,
              stat: "15+",
              text: "Purpose-driven Brands Successfully Launched"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandRed defer-animate"
            >
              <div className="text-brandRed mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-4xl font-display font-bold text-brandRed mb-2">{item.stat}</h3>
              <p className="text-foreground/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
