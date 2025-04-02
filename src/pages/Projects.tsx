
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "EcoLiving Collective",
      category: "Sustainable E-commerce",
      description: "A carbon-neutral online store for eco-friendly home products with optimized images and minimal server requests.",
      features: ["90% lighter than average e-commerce sites", "Green hosting", "Optimized checkout flow"],
      color: "bg-[#C8D6AF]",
      textColor: "text-foreground"
    },
    {
      title: "Ocean Conservation Alliance",
      category: "Non-profit Organization",
      description: "Accessible, lightweight website showcasing the organization's impact with text-based storytelling instead of heavy media.",
      features: ["Static site generation", "Text-focused content strategy", "Offline capability"],
      color: "bg-brandBlue",
      textColor: "text-white"
    },
    {
      title: "Mindful Markets",
      category: "Ethical Marketplace",
      description: "A progressive web app connecting conscious consumers with sustainable local businesses.",
      features: ["Geo-location services", "Low-bandwidth image strategy", "Progressive loading"],
      color: "bg-marzipan",
      textColor: "text-foreground"
    },
    {
      title: "GreenTech Solutions",
      category: "Technology Company",
      description: "Corporate website with sustainability reporting dashboard and minimal animation energy usage.",
      features: ["Performance-optimized animations", "Dark mode by default", "Low-energy design patterns"],
      color: "bg-[#73A580]",
      textColor: "text-white"
    },
    {
      title: "Urban Farming Initiative",
      category: "Community Project",
      description: "Community-focused platform with offline-first approach for low-income area accessibility.",
      features: ["Works without JavaScript", "Minimal dependency architecture", "Print-friendly resources"],
      color: "bg-brandRed",
      textColor: "text-white"
    },
    {
      title: "Sustainable Fashion Collective",
      category: "Fashion Brand",
      description: "Image-focused site with optimal compression and lazy loading to minimize environmental impact.",
      features: ["Next-gen image formats", "Selective loading strategy", "Green hosting"],
      color: "bg-[#E6CCAE]",
      textColor: "text-foreground"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom">
            <div className="max-w-3xl animate-fade-in">
              <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
                Our Work
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Sustainable Digital Success Stories
              </h1>
              <p className="text-lg text-foreground/80">
                Explore our portfolio of purpose-driven brands we've helped thrive online with sustainable web design and ethical SEO strategies.
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`rounded-lg overflow-hidden animate-fade-in ${project.color}`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className={`p-8 ${project.textColor}`}>
                    <div className="mb-2 text-sm font-medium opacity-80">{project.category}</div>
                    <h3 className="text-2xl font-display font-semibold mb-4">{project.title}</h3>
                    <p className="mb-6 opacity-90">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Sustainability Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, i) => (
                          <span 
                            key={i} 
                            className={`text-xs px-3 py-1 rounded-full ${project.textColor === 'text-white' ? 'bg-white/20' : 'bg-brandBlue/10'}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <button 
                        className={`inline-flex items-center gap-1 text-sm font-medium ${project.textColor === 'text-white' ? 'hover:text-white/80' : 'hover:text-foreground/80'}`}
                      >
                        View Case Study <ArrowRight className="h-4 w-4" />
                      </button>
                      <button 
                        className={`inline-flex items-center gap-1 text-sm font-medium ${project.textColor === 'text-white' ? 'hover:text-white/80' : 'hover:text-foreground/80'}`}
                      >
                        Visit Website <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-marzipan/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Our Sustainable Development Process
              </h2>
              <p className="text-foreground/80">
                How we create digital experiences that are beautiful, effective, and environmentally responsible.
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brandBlue/20 -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Sustainability Audit",
                    description: "We assess your current digital footprint and identify opportunities for sustainable improvements."
                  },
                  {
                    step: "02",
                    title: "Strategic Planning",
                    description: "We create a roadmap for your digital presence that balances business goals with environmental responsibility."
                  },
                  {
                    step: "03",
                    title: "Eco-Friendly Design",
                    description: "Our designs minimize resource usage while creating beautiful, effective user experiences."
                  },
                  {
                    step: "04",
                    title: "Efficient Development",
                    description: "Clean, optimized code ensures your website runs as efficiently as possible."
                  },
                  {
                    step: "05",
                    title: "Green Hosting Setup",
                    description: "We configure your site on renewable-powered hosting providers with optimal caching."
                  },
                  {
                    step: "06",
                    title: "Continuous Optimization",
                    description: "Regular audits and improvements to maintain and enhance sustainability over time."
                  }
                ].map((process, index) => (
                  <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                      <div className={`lg:text-right ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className="bg-white p-6 rounded-lg border border-marzipan/20 shadow-sm relative">
                          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-brandBlue text-white font-display font-medium text-lg z-10 shadow-md
                                       lg:left-0 lg:-translate-x-1/2">
                            {process.step}
                          </div>
                          
                          <div className="lg:hidden flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brandBlue text-white font-display font-medium text-sm">
                              {process.step}
                            </div>
                            <h3 className="text-xl font-display font-medium">{process.title}</h3>
                          </div>
                          
                          <div className="hidden lg:block">
                            <h3 className="text-xl font-display font-medium mb-2">{process.title}</h3>
                          </div>
                          
                          <p className="text-foreground/70">{process.description}</p>
                        </div>
                      </div>
                      
                      {/* Empty column for alternating layout */}
                      <div className={index % 2 === 0 ? 'hidden lg:block' : ''}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-brandBlue text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 animate-fade-in">
              Ready to join our success stories?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Let's create a digital presence for your brand that's both effective and environmentally responsible.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-brandBlue px-8 py-4 rounded-lg font-medium hover:bg-marzipan transition-all animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
