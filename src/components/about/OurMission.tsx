
import React from 'react';
import { Award, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurMission = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Our Mission</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            We're here to help you reach your purpose-driven business objectives on time, 
            on brand and on budget. Ensuring your online presence is as powerful as your purpose.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="h-10 w-10 text-brandBlue" />,
              title: "Sustainable Digital Presence",
              description: "We create lightweight, high-speed, and environmentally responsible websites that minimise digital carbon footprints.",
              link: "/services/sustainable-web-design"
            },
            {
              icon: <Award className="h-10 w-10 text-brandRed" />,
              title: "Ethical AI-Driven SEO",
              description: "Our AI-driven SEO strategies help purpose-driven brands rank higher on Google while maintaining ethical standards.",
              link: "/services/ai-seo"
            },
            {
              icon: <Users className="h-10 w-10 text-brandBlue" />,
              title: "Meaningful Engagement",
              description: "We build digital experiences that don't just attract visitors—they create meaningful connections with your audience.",
              link: "/services/digital-content-creation"
            }
          ].map((item, index) => (
            <Link 
              key={index} 
              to={item.link}
              className="p-8 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:shadow-md transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-brandBlue dark:group-hover:text-marzipan transition-colors">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
