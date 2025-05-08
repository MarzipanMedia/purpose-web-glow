
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { Link } from 'react-router-dom';

const OurApproach = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-gradient-to-br from-marzipan/20 to-brandBlue/10 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
          {/* First column - What Makes Us Different */}
          <div className="order-2 lg:order-1 relative pb-24 lg:pb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">What Makes Us Different</h3>
              
              <div className="space-y-4">
                {[
                  {
                    text: "Combining sustainable web design with cutting-edge AI technology",
                    link: "/services/sustainable-web-design"
                  },
                  {
                    text: "Creating digital strategies that prioritize both performance and planet",
                    link: "/website-carbon"
                  },
                  {
                    text: "Building websites that load faster and use less energy",
                    link: "/services"
                  },
                  {
                    text: "Implementing ethical SEO practices that generate real results",
                    link: "/services/ai-seo"
                  },
                  {
                    text: "Focusing on ROI-driven metrics that matter to your business",
                    link: "/projects"
                  }
                ].map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.link}
                    className="flex items-start gap-3 animate-fade-in group hover:bg-marzipan/10 p-2 rounded-md transition-colors"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 bg-brandBlue rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-foreground/80 dark:text-gray-200 group-hover:text-brandBlue dark:group-hover:text-marzipan transition-colors">{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Callout box with adjusted positioning and margins */}
            <div className={`
              ${isMobile 
                ? 'relative mt-8 w-full' 
                : 'absolute -right-4 -bottom-12 lg:translate-x-1/4 max-w-xs'}
              bg-brandRed text-white p-6 rounded-lg shadow-lg animate-fade-in
              transition-all duration-300
            `}
              style={{ animationDelay: '0.4s' }}
            >
              <h4 className="text-lg font-semibold mb-2">Grow Impact, Not Just Traffic</h4>
              <p className="text-white/90 text-sm mb-3">
                Our approach focuses on creating websites that don't just grow traffic—they grow impact.
              </p>
              <Link to="/contact" className="inline-flex items-center text-white font-medium text-sm hover:underline">
                Learn how we can help <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Second column - Our Approach text content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight dark:text-white">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-lg text-foreground/80 dark:text-gray-200">
              We help purpose-driven brands rank higher on Google with <Link to="/services/ai-seo" className="text-brandBlue hover:underline">AI-driven SEO</Link> while ensuring 
              their digital presence is lightweight, high-speed, and environmentally responsible.
            </p>
            <p className="text-foreground/70 dark:text-gray-300">
              By combining <Link to="/services/ai-seo" className="text-brandBlue hover:underline">ethical AI</Link>, <Link to="/services/sustainable-web-design" className="text-brandBlue hover:underline">sustainable web design</Link>, and performance-driven SEO strategies, 
              we create websites that align with your values while delivering exceptional results.
            </p>
            <p className="text-foreground/70 dark:text-gray-300">
              Our collaborative approach ensures that your digital presence isn't just beautiful and 
              functional—it's a true extension of your brand's mission and purpose. See our <Link to="/projects" className="text-brandBlue hover:underline">successful projects</Link>.
            </p>
            
            <div className="pt-4">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
