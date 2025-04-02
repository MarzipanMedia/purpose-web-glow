
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Lightbulb, Search, Globe, MessageSquare, BarChart, Zap, Users, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      id: "sustainable-web",
      title: "Sustainable Web Design",
      description: "Beautiful, eco-friendly websites that minimize environmental impact while maximizing user experience and conversion rates.",
      icon: <Globe className="h-10 w-10" />,
      features: [
        "Low-carbon design practices",
        "Optimized page load speeds",
        "Energy-efficient hosting options",
        "Streamlined code and assets",
        "Responsive and accessible interfaces",
        "Green hosting recommendations"
      ]
    },
    {
      id: "ai-seo",
      title: "AI-Driven SEO",
      description: "Ethical optimization strategies powered by the latest AI tools to help your purpose-driven brand reach the right audience.",
      icon: <Search className="h-10 w-10" />,
      features: [
        "Keyword research and analysis",
        "AI content optimization",
        "Technical SEO audits",
        "Local SEO strategies",
        "Voice search optimization",
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
        "Sustainability reporting"
      ]
    }
  ];

  const supplementaryServices = [
    {
      title: "Analytics & Reporting",
      description: "Comprehensive data analysis to track performance and optimize your digital strategy.",
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: "Performance Optimization",
      description: "Enhance site speed and user experience while reducing environmental impact.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Conversion Rate Optimization",
      description: "Ethical CRO strategies that improve results without manipulative tactics.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Website Carbon Reduction",
      description: "Audit and implementation of strategies to minimize your site's carbon footprint.",
      icon: <LineChart className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Sustainable Digital Solutions for Purpose-Driven Brands
              </h1>
              <p className="text-lg text-foreground/80 mb-8">
                We combine digital expertise with sustainability principles to help your brand make a positive impact online and offline.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="space-y-24">
              {mainServices.map((service, index) => (
                <div key={index} id={service.id} className="scroll-mt-20">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-marzipan/30 inline-block p-3 rounded-full text-brandBlue">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-semibold">
                        {service.title}
                      </h2>
                      <p className="text-lg text-foreground/80">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-brandRed"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`animate-fade-in ${index % 2 === 0 ? 'lg:order-last' : ''}`} style={{ animationDelay: "0.2s" }}>
                      <div className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-brandBlue to-brandBlue/70' : 'from-marzipan to-marzipan/70'} rounded-lg p-8 relative h-full`}>
                        <div className={`text-${index % 2 === 0 ? 'white' : 'foreground'} space-y-6`}>
                          <h3 className="text-2xl font-display">Working Process</h3>
                          <ol className="space-y-6">
                            <li className="flex gap-4">
                              <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${index % 2 === 0 ? 'bg-white/20 text-white' : 'bg-brandBlue/20 text-brandBlue'}`}>1</span>
                              <div>
                                <h4 className="font-medium">Discovery & Strategy</h4>
                                <p className={`${index % 2 === 0 ? 'text-white/80' : 'text-foreground/80'} text-sm mt-1`}>We learn about your brand, goals, and values</p>
                              </div>
                            </li>
                            <li className="flex gap-4">
                              <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${index % 2 === 0 ? 'bg-white/20 text-white' : 'bg-brandBlue/20 text-brandBlue'}`}>2</span>
                              <div>
                                <h4 className="font-medium">Planning & Design</h4>
                                <p className={`${index % 2 === 0 ? 'text-white/80' : 'text-foreground/80'} text-sm mt-1`}>Creating sustainable solutions aligned with your purpose</p>
                              </div>
                            </li>
                            <li className="flex gap-4">
                              <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${index % 2 === 0 ? 'bg-white/20 text-white' : 'bg-brandBlue/20 text-brandBlue'}`}>3</span>
                              <div>
                                <h4 className="font-medium">Implementation</h4>
                                <p className={`${index % 2 === 0 ? 'text-white/80' : 'text-foreground/80'} text-sm mt-1`}>Building eco-friendly digital assets</p>
                              </div>
                            </li>
                            <li className="flex gap-4">
                              <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${index % 2 === 0 ? 'bg-white/20 text-white' : 'bg-brandBlue/20 text-brandBlue'}`}>4</span>
                              <div>
                                <h4 className="font-medium">Measurement & Optimization</h4>
                                <p className={`${index % 2 === 0 ? 'text-white/80' : 'text-foreground/80'} text-sm mt-1`}>Continuous improvement for better results</p>
                              </div>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Supplementary Services */}
        <section className="py-16 bg-marzipan/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">Additional Services</h2>
              <p className="text-foreground/80">
                Supporting services to enhance your digital ecosystem and maximize sustainability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supplementaryServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-marzipan/20 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-display font-medium mb-2">{service.title}</h3>
                  <p className="text-foreground/70 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-brandBlue text-white">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 animate-fade-in">
              Let's work together
            </h2>
            <p className="text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Ready to create a digital presence that's as powerful as your purpose? 
              Get in touch to discuss how we can help your brand thrive online while supporting a more sustainable internet.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-brandBlue px-8 py-4 rounded-lg font-medium hover:bg-marzipan transition-all animate-fade-in" 
              style={{ animationDelay: "0.2s" }}
            >
              Start Your Sustainable Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
