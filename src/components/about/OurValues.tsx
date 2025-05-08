
import React from 'react';
import { Link } from 'react-router-dom';

const OurValues = () => {
  const values = [
    {
      title: "Sustainability",
      description: "We believe digital innovation and environmental responsibility can go hand in hand.",
      color: "bg-green-100 dark:bg-green-900",
      textColor: "text-green-800 dark:text-green-100",
      link: "/website-carbon"
    },
    {
      title: "Ethical Technology",
      description: "We implement AI and digital solutions with clear ethical guidelines and transparency.",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-800 dark:text-blue-100",
      link: "/services/ai-seo"
    },
    {
      title: "Purpose-Driven",
      description: "We prioritise working with brands that are making a positive impact on the world.",
      color: "bg-purple-100 dark:bg-purple-900",
      textColor: "text-purple-800 dark:text-purple-100",
      link: "/projects"
    },
    {
      title: "Performance",
      description: "We believe in delivering measurable results that contribute to your business goals.",
      color: "bg-amber-100 dark:bg-amber-900",
      textColor: "text-amber-800 dark:text-amber-100",
      link: "/services"
    },
    {
      title: "Collaboration",
      description: "We work as an extension of your team, ensuring transparency and communication.",
      color: "bg-rose-100 dark:bg-rose-900",
      textColor: "text-rose-800 dark:text-rose-100",
      link: "/contact"
    },
    {
      title: "Innovation",
      description: "We continuously explore new technologies and approaches to deliver better results.",
      color: "bg-indigo-100 dark:bg-indigo-900",
      textColor: "text-indigo-800 dark:text-indigo-100",
      link: "/blog"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 dark:text-white">Our Values</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg dark:text-gray-300">
            What we believe in, what we stand for, and how we help good people (like you) Shine Brighter Online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Link 
              key={index} 
              to={value.link}
              className={`p-6 rounded-lg ${value.color} animate-fade-in hover:shadow-md transition-all duration-300 group`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <h3 className={`text-xl font-semibold mb-3 ${value.textColor} group-hover:text-opacity-80 transition-colors`}>{value.title}</h3>
              <p className="text-foreground/80 dark:text-gray-200">{value.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
