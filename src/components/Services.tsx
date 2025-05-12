
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Sustainable Web Design",
      description: "Beautiful, eco-friendly websites that minimise environmental impact.",
      link: "/services/sustainable-web-design",
      bgColor: "bg-[#F2FCE2]" // Soft green
    },
    {
      title: "AI-Driven SEO",
      description: "Ethical optimisation strategies for purpose-driven brands.",
      link: "/services/ai-seo",
      bgColor: "bg-[#D3E4FD]" // Soft blue
    },
    {
      title: "Content Creation",
      description: "Compelling storytelling that connects with your audience.",
      link: "/services/content-creation",
      bgColor: "bg-[#FDE1D3]" // Soft peach
    },
    {
      title: "Digital Marketing",
      description: "Sustainable marketing strategies that drive meaningful growth.",
      link: "/services/digital-marketing",
      bgColor: "bg-[#E5DEFF]" // Soft purple
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 dark:text-white">
            Our Services
          </h2>
          <p className="text-foreground/80 dark:text-gray-300">
            Sustainable digital solutions tailored for purpose-driven brands.<br />Break through the noise. Drive traffic, increase conversions, and align with your values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className={`group p-6 rounded-lg border border-border/50 hover:border-border transition-colors dark:border-gray-700 dark:hover:border-gray-600 ${service.bgColor} hover:shadow-md`}
            >
              <h2 className="text-xl font-display font-semibold mb-2 dark:text-white">
                {service.title}
              </h2>
              <p className="text-foreground/70 mb-4 dark:text-gray-300">{service.description}</p>
              <div className="flex items-center text-brandBlue font-medium dark:text-brandBlue">
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
