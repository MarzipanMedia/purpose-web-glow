
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    number: 1,
    title: "AI-Driven Audit",
    description: "Comprehensive website analysis using AI to identify opportunities for improvement."
  },
  {
    number: 2,
    title: "Strategy Development",
    description: "Crafting a tailored SEO strategy based on AI insights and your unique business goals."
  },
  {
    number: 3,
    title: "Ethical Implementation",
    description: "Implementing AI-powered SEO techniques with a focus on ethical practices and user experience."
  },
  {
    number: 4,
    title: "Analysis & Optimisation",
    description: "Continuous monitoring and data-driven refinement to improve search performance."
  }
];

const AiSeoProcess = () => {
  return (
   <section className="py-16 bg-marzipan/20">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-display font-semibold">
          Our AI SEO Process
        </h2>
        <p className="text-lg text-foreground/80">
          We leverage cutting-edge AI technology to develop and implement ethical SEO strategies that drive sustainable growth.
        </p>

        <div className="space-y-6 mt-8">
          {processSteps.map((step) => (
            <div key={step.number} className="flex gap-4 items-start">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">
                {step.number}
              </span>
              <div>
                <h4 className="text-xl font-medium mb-1">{step.title}</h4>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-secondary to-secondary/40 p-8 rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
          <h3 className="text-2xl font-display font-semibold mb-4 text-center">
            Free AI SEO Consultation
          </h3>
          <div className="space-y-6">
            <p className="text-foreground/80">
              Get a complimentary consultation to discover how AI can transform your SEO strategy.
            </p>
            <div className="space-y-3 mb-8 md:mb-12">
              {[
                "AI-driven website audit",
                "Keyword opportunity analysis",
                "Competitor benchmarking",
                "Actionable AI SEO recommendations"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <Link 
              to="#contact" 
              className="btn-primary w-full justify-center mt-6 md:mt-8 mb-4"
            >
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default AiSeoProcess;
