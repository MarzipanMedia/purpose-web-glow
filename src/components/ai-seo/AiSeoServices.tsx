
import React from 'react';
import { Search, ShieldCheck, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AiSeoServices = () => {
  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "AI Keyword Research",
      description: "Identify high-value keywords with AI-driven analysis to target the right audience and drive relevant traffic."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "AI Content Optimisation",
      description: "Enhance your content with AI-powered recommendations to improve readability, relevance, and search engine rankings."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Link Building",
      description: "Build high-quality backlinks with AI-driven strategies that identify relevant and authoritative websites."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl font-display font-semibold mb-4">
            Our AI SEO Services
          </h2>
          <p className="text-foreground/80">
            Leverage our AI-powered SEO solutions to enhance your online presence, drive organic growth, and make a positive impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-medium mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiSeoServices;
