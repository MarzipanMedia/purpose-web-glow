
import React from 'react';
import { BarChart, Zap, Users, LineChart } from 'lucide-react';

const AdditionalServices = () => {
  const supplementaryServices = [
    {
      title: "Analytics & Reporting",
      description: "Comprehensive data analysis to track performance and optimise your digital strategy.",
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: "Performance Optimisation",
      description: "Enhance site speed and user experience while reducing environmental impact.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Conversion Rate Optimization",
      description: "Ethical CRO strategies that improve results without manipulative tactics.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Website Carbon Reduction",
      description: "Audit and implementation of strategies to minimise your site's carbon footprint.",
      icon: <LineChart className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16 bg-marzipan/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl font-display font-semibold mb-4">Additional Services</h2>
          <p className="text-foreground/80">
            Supporting services to enhance your digital ecosystem and maximize sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supplementaryServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-marzipan/20 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-display font-medium mb-2">{service.title}</h3>
              <p className="text-foreground/70 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
