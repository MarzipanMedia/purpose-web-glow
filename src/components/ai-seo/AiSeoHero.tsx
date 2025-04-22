
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Check } from 'lucide-react';

const AiSeoHero = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
              AI-Driven Strategies
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ethical AI SEO for Sustainable Growth
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Harness the power of AI to drive sustainable SEO strategies that align with your values and deliver long-term results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="#contact" className="btn-primary flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="btn-secondary flex items-center gap-2">
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-brandBlue to-brandBlue/70 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Brain className="h-10 w-10 mr-4 text-white" />
                <h2 className="text-2xl font-display text-white">Why Choose AI SEO?</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90">Ethical AI practices that respect user privacy</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90">Data-driven insights for informed decision-making</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90">Sustainable strategies that benefit both your business and the planet</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90">Improved search rankings and organic traffic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSeoHero;
