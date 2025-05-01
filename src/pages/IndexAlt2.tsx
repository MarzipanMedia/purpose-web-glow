
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientLogos from '../components/ClientLogos';
import RecentProjects from '../components/RecentProjects';
import BlogPreview from '../components/BlogPreview';
import MetaHead from '@/components/MetaHead';
import { ArrowRight, BarChart3, Award, Users, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDefer } from '@/hooks/useDefer';

const IndexAlt2 = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  
  // Defer non-critical animations
  useDefer(() => {
    const animatedElements = document.querySelectorAll('.defer-animate');
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).classList.add('animate-visible');
      }, index * 100);  // Stagger animations
    });
  }, 100, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design & Affordable SEO" 
        description="Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. Ensuring your online presence is as powerful as your purpose."
      />
      <Header />
      
      <main className="flex-grow" ref={mainRef}>
        {/* Hero Section - optimized for LCP */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-white via-brandRed/5 to-brandRed/10">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-brandRed/10 text-brandRed px-4 py-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M15.5 9l-6 6"></path><circle cx="17" cy="11" r="2"></circle><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 7h18"></path></svg>
                  Sustainable Web Design
                </div>
                <h1 
                  id="main-heading" 
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
                  style={{contentVisibility: "auto"}}
                >
                  Ensuring your online presence is as powerful as your 
                  <span className="text-brandRed"> purpose</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
                  Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. 
                  We help purpose-led businesses thrive online without costing the earth.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link to="/services" className="transition-all duration-300 bg-brandRed text-white px-6 py-3 rounded-lg hover:bg-brandRed/90 hover:shadow-md flex items-center gap-2">
                    Our Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/projects" className="transition-all duration-300 bg-white border border-brandRed/20 text-foreground px-6 py-3 rounded-lg hover:bg-brandRed/5 hover:shadow-md flex items-center gap-2">
                    View Our Work <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="md:col-span-5">
                <div className="relative">
                  <div 
                    className="bg-gradient-to-br from-yellow-500 via-brandRed to-brandRed/80 rounded-full aspect-square flex items-center justify-center p-12 shadow-lg text-white"
                    style={{width: "100%", height: "auto"}}
                  >
                    <div className="text-center">
                      <p className="text-xl font-display">Eco-friendly</p>
                      <h2 className="text-3xl font-display font-semibold">Web Design</h2>
                      <p className="mt-2 text-white/80">For purpose-driven brands</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-brandRed">
                Our Impact at a Glance
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: <BarChart3 size={32} />,
                  stat: "90%",
                  text: "Lower Carbon Emissions Than Traditional Websites"
                },
                {
                  icon: <Award size={32} />,
                  stat: "2x",
                  text: "Faster Page Load Times Than Industry Average"
                },
                {
                  icon: <Users size={32} />,
                  stat: "15+",
                  text: "Purpose-driven Brands Successfully Launched"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandRed defer-animate"
                >
                  <div className="text-brandRed mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-4xl font-display font-bold text-brandRed mb-2">{item.stat}</h3>
                  <p className="text-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Website Carbon CTA */}
        <section className="py-16 bg-marzipan/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 defer-animate">
                <div className="inline-block bg-brandRed/10 text-brandRed px-4 py-1 rounded-full">
                  Free Tool
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold">
                  Is Your Website <span className="text-brandRed">Eco-Friendly</span>?
                </h2>
                <p className="text-lg text-foreground/80">
                  Discover your website's carbon footprint and how it impacts the environment. 
                  Our free tool helps you assess your site's sustainability and provides actionable recommendations.
                </p>
                <Link 
                  to="/website-carbon" 
                  className="transition-all duration-300 bg-brandRed text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-brandRed/90 hover:shadow-md"
                >
                  Check Your Website <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="relative defer-animate">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-marzipan/30">
                  <div className="flex justify-center mb-6">
                    <div className="bg-brandRed/10 rounded-full p-4 text-brandRed">
                      <Laptop size={40} />
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-display font-semibold mb-2">Website Carbon Calculator</h3>
                    <p className="text-foreground/70">Enter your URL and get instant insights</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                      <span className="font-medium">Carbon per page view</span>
                      <span className="text-brandRed font-display">1.45g vs. 0.5g</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                      <span className="font-medium">Page size reduction</span>
                      <span className="text-brandRed font-display">Up to 70%</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                      <span className="font-medium">Performance boost</span>
                      <span className="text-brandRed font-display">2x faster</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Logos Section - Minimized animations */}
        <ClientLogos />
        
        {/* Other sections - deferred loading */}
        <div className="defer-animate">
          <RecentProjects />
        </div>
        
        <div className="defer-animate">
          <BlogPreview />
        </div>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 defer-animate">
              <div className="inline-block bg-brandRed/10 text-brandRed px-4 py-1 rounded-full mb-4">
                <h3 className="text-sm font-medium">Client Success Stories</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Working with Marzipan completely transformed our online presence. Not only is our website beautiful and performant, but we feel good about our reduced digital footprint.",
                  author: "Sarah Johnson",
                  company: "EcoLiving Collective"
                },
                {
                  quote: "As a B-Corp, sustainability is at our core. Marzipan understood our values and created a website that perfectly represents our brand while being environmentally conscious.",
                  author: "Michael Chen",
                  company: "Sustainable Solutions Co."
                },
                {
                  quote: "The SEO results speak for themselves. Our organic traffic has increased by 150% since working with Marzipan, and our page load speeds are incredibly fast.",
                  author: "Jessica Williams",
                  company: "Green Growth Partners"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white to-brandRed/5 p-6 rounded-lg border border-brandRed/20 defer-animate"
                >
                  <div className="mb-4 text-brandRed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.03a4.13 4.13 0 0 1 1.3-.93l.01-.014c.1-.05.2-.106.31-.167 1.6-.903 2.11-1.302 2.11-1.304.18-.108.33-.22.36-.335.02-.06.02-.11.02-.17 0-.06-.01-.11-.02-.17-.04-.16-.21-.3-.42-.4-.96-.493-1.98-.74-3.02-.74-1.14 0-2.2.25-3.2.75-.95.5-1.73 1.17-2.33 2.04-.61.87-.92 1.85-.92 2.94 0 1.01.26 1.95.77 2.82.52.87 1.23 1.56 2.13 2.06.9.5 1.88.75 2.94.75 1.08 0 2.08-.25 3.01-.75.93-.5 1.67-1.18 2.21-2.02.55-.84.82-1.75.82-2.72z"/>
                    </svg>
                  </div>
                  <blockquote className="mb-4 text-foreground/80 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-brandRed/20 flex items-center justify-center text-brandRed font-medium">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-foreground/60">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brandRed/90 via-brandRed/70 to-brandBlue/80 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 defer-animate">
              Ready to make an impact with your online presence?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 defer-animate">
              Let's create a sustainable website that aligns with your values and helps you reach your goals.
            </p>
            <Link 
              to="/contact" 
              className="transition-all duration-300 inline-flex items-center gap-2 bg-white text-brandBlue px-8 py-4 rounded-lg font-medium hover:bg-marzipan hover:shadow-md defer-animate"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndexAlt2;
