
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Search, MessageSquare, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Sustainable Web Design",
      description: "Eco-friendly websites that minimise carbon footprint while maximising user experience.",
      icon: <Globe className="h-6 w-6" />,
      link: "/services/sustainable-web-design"
    },
    {
      title: "AI-Driven SEO",
      description: "Ethical optimisation strategies that help your purpose-driven brand reach the right audience.",
      icon: <Search className="h-6 w-6" />,
      link: "/services/ai-seo"
    },
    {
      title: "Digital Marketing",
      description: "Social media and Google Ads strategies that amplify your message to the right audience.",
      icon: <Megaphone className="h-6 w-6" />,
      link: "/services/digital-marketing"
    },
    {
      title: "Content Creation",
      description: "Compelling storytelling that resonates with your audience and drives meaningful engagement.",
      icon: <MessageSquare className="h-6 w-6" />,
      link: "/services/content-creation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Our Services</h2>
          <p className="text-lg text-foreground/80">
            We combine sustainability with digital excellence to create meaningful online experiences that align with your values.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link 
              to={service.link}
              key={index}
              className="group bg-marzipan/20 hover:bg-marzipan/40 rounded-lg p-6 transition-all duration-300 border border-transparent hover:border-marzipan animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-brandBlue group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-medium mb-2">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-marzipan/20">
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-display font-medium mb-3">Free Sustainability Tools</h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
              Check how sustainable your website is with our free website carbon checker tool
            </p>
            <Link 
              to="/website-carbon" 
              className="inline-flex items-center gap-2 bg-brandBlue text-white px-6 py-3 rounded-lg font-medium hover:bg-brandBlue/90 transition-all"
            >
              Check Website Carbon Footprint
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
