
import React from 'react';
import { Globe, Search, Lightbulb, MessageSquare } from 'lucide-react';
import MainService from './MainService';

const MainServices = () => {
  const mainServices = [
    {
      id: "sustainable-web",
      title: "Sustainable Web Design",
      description: "Beautiful, eco-friendly websites that minimise environmental impact while maximising user experience and conversion rates.",
      icon: <Globe className="h-10 w-10" />,
      features: [
        "Low-carbon design practices",
        "Optimised page load speeds",
        "Energy-efficient hosting options",
        "Streamlined code and assets",
        "Responsive and accessible interfaces",
        "Green hosting recommendations"
      ]
    },
    {
      id: "ai-seo",
      title: "AI-Driven SEO",
      description: "Ethical optimisation strategies powered by the latest AI tools, backed by 10 years of human experience, to help you reach the right audience.",
      icon: <Search className="h-10 w-10" />,
      features: [
        "Keyword research and analysis",
        "AI content optimisation",
        "Technical SEO audits",
        "Local SEO strategies",
        "Voice search optimisation",
        "Sustainable SEO practices"
      ]
    },
    {
      id: "brand-strategy",
      title: "Brand Strategy",
      description: "Align your digital presence with your mission and values for authentic communication that resonates with your audience.",
      icon: <Lightbulb className="h-10 w-10" />,
      features: [
        "Brand positioning",
        "Value proposition development",
        "Visual identity system",
        "Brand voice and messaging",
        "Competitive analysis",
        "Purpose-driven storytelling"
      ]
    },
    {
      id: "content",
      title: "Content Creation",
      description: "Compelling storytelling that connects with your audience and drives meaningful engagement and conversions.",
      icon: <MessageSquare className="h-10 w-10" />,
      features: [
        "Blog post creation",
        "Email marketing campaigns",
        "Social media content",
        "Case studies and whitepapers",
        "Video script writing",
        "Analytics reporting"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="space-y-24">
          {mainServices.map((service, index) => (
            <MainService key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
