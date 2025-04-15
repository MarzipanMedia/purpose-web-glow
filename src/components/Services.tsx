
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Sustainable Web Design",
      description: "Beautiful, eco-friendly websites that minimize environmental impact.",
      link: "/services/sustainable-web-design"
    },
    {
      title: "AI-Driven SEO",
      description: "Ethical optimization strategies for purpose-driven brands.",
      link: "/services/ai-seo"
    },
    {
      title: "Content Creation",
      description: "Compelling storytelling that connects with your audience.",
      link: "/services/content-creation"
    },
    {
      title: "Digital Marketing",
      description: "Sustainable marketing strategies that drive meaningful growth.",
      link: "/services/digital-marketing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Our Services
          </h2>
          <p className="text-foreground/80">
            Sustainable digital solutions tailored for purpose-driven brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="group p-6 bg-background rounded-lg border border-border/50 hover:border-border transition-colors"
            >
              <h3 className="text-xl font-display font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-foreground/70 mb-4">{service.description}</p>
              <div className="flex items-center text-brandBlue font-medium">
                Learn More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
