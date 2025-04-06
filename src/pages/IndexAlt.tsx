
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroAlt from '../components/HeroAlt';
import Services from '../components/Services';
import Sustainability from '../components/Sustainability';
import RecentProjects from '../components/RecentProjects';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, BarChart3, Laptop } from 'lucide-react';

const IndexAlt = () => {
  const testimonials = [
    {
      quote: "Working with Marzipan completely transformed our online presence. Not only is our website beautiful and performant, but we feel good about our reduced digital footprint.",
      author: "Sarah Johnson",
      company: "EcoLiving Collective",
      image: null
    },
    {
      quote: "As a B-Corp, sustainability is at our core. Marzipan understood our values and created a website that perfectly represents our brand while being environmentally conscious.",
      author: "Michael Chen",
      company: "Sustainable Solutions Co.",
      image: null
    },
    {
      quote: "The SEO results speak for themselves. Our organic traffic has increased by 150% since working with Marzipan, and our page load speeds are incredibly fast.",
      author: "Jessica Williams",
      company: "Green Growth Partners",
      image: null
    }
  ];

  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroAlt />
        
        {/* Earthy Stats Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandRed animate-on-scroll opacity-0" style={{ transitionDelay: "0.1s" }}>
                <div className="text-brandRed mb-4 flex justify-center">
                  <BarChart3 size={32} />
                </div>
                <div className="text-4xl font-display font-bold text-brandRed mb-2">90%</div>
                <p className="text-foreground/80">Lower Carbon Emissions Than Traditional Websites</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandRed animate-on-scroll opacity-0" style={{ transitionDelay: "0.2s" }}>
                <div className="text-brandRed mb-4 flex justify-center">
                  <Award size={32} />
                </div>
                <div className="text-4xl font-display font-bold text-brandRed mb-2">2x</div>
                <p className="text-foreground/80">Faster Page Load Times Than Industry Average</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-brandRed animate-on-scroll opacity-0" style={{ transitionDelay: "0.3s" }}>
                <div className="text-brandRed mb-4 flex justify-center">
                  <Users size={32} />
                </div>
                <div className="text-4xl font-display font-bold text-brandRed mb-2">15+</div>
                <p className="text-foreground/80">Purpose-driven Brands Successfully Launched</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section with red accents */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white">
          <Services />
        </section>
        
        {/* Sustainability Section with earthy tone */}
        <section className="relative">
          <Sustainability />
        </section>
        
        {/* Website Carbon CTA */}
        <section className="py-16 bg-marzipan/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 animate-on-scroll opacity-0">
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
                  className="bg-brandRed text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-brandRed/90 transition-all hover:shadow-md hover:scale-[1.02] hover:translate-y-[-2px] duration-300"
                >
                  Check Your Website <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="relative animate-on-scroll opacity-0" style={{ transitionDelay: "0.2s" }}>
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
                  
                  <div className="mt-6 text-center">
                    <Link 
                      to="/website-carbon" 
                      className="text-brandRed font-medium hover-link inline-flex items-center gap-1"
                    >
                      Check Your Website Now <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brandRed/20 rounded-full z-[-1]"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Projects Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white">
          <RecentProjects />
        </section>
        
        {/* Blog Preview Section - New addition */}
        <BlogPreview />
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll opacity-0">
              <div className="inline-block bg-brandRed/10 text-brandRed px-4 py-1 rounded-full mb-4">
                Client Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white to-brandRed/5 p-6 rounded-lg border border-brandRed/20 animate-on-scroll opacity-0"
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="mb-4 text-brandRed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.03a4.13 4.13 0 0 1 1.3-.93l.01-.014c.1-.05.2-.106.31-.167 1.6-.903 2.11-1.302 2.11-1.304.18-.108.33-.22.36-.335.02-.06.02-.11.02-.17 0-.06-.01-.11-.02-.17-.04-.16-.21-.3-.42-.4-.96-.493-1.98-.74-3.02-.74-1.14 0-2.2.25-3.2.75-.95.5-1.73 1.17-2.33 2.04-.61.87-.92 1.85-.92 2.94 0 1.01.26 1.95.77 2.82.52.87 1.23 1.56 2.13 2.06.9.5 1.88.75 2.94.75 1.08 0 2.08-.25 3.01-.75.93-.5 1.67-1.18 2.21-2.02.55-.84.82-1.75.82-2.72zm9.43 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.7-1.327-.817-.56-.12-1.07-.12-1.54-.01-.07-.16-.13-.29-.23-.41-.077-.1-.167-.17-.27-.244l.01-.04c.1-.05.2-.09.31-.15 1.6-.89 2.11-1.3 2.11-1.3.18-.1.33-.22.36-.338.02-.06.02-.11.02-.17 0-.05 0-.1-.02-.15-.02-.08-.06-.15-.1-.22-.08-.12-.21-.23-.36-.3-.77-.38-1.6-.62-2.5-.62-.84 0-1.65.16-2.41.48l-.74.36-.76.43c-.16.1-.28.2-.36.301-.08.102-.143.21-.19.33L11 11.98c-.05.3-.05.52 0 .75.038.228.1.4.18.52.08.12.18.21.3.26.12.06.26.08.4.08.14 0 .26-.02.37-.08.12-.05.22-.14.34-.26.27-.31.68-.77 1.24-1.37l.13-.15c.1-.13.23-.29.4-.45.06-.05.08-.06.08-.06.1.15.19.31.25.5.60.33.12.17.17.3l-.03.24c-.04.51 0 .8.05.98a1.13 1.13 0 0 0 .2.4c.08.1.2.17.3.2.1.03.2.05.32.05.18 0 .32-.05.45-.14.1-.06.19-.15.24-.25.06-.1.1-.21.13-.33l.05-.18c.02-.09.03-.18.05-.27l.02-.1c.02-.12.02-.13.02-.16 0-.3-.13-.56-.33-.72l-.4-.3v-.01c-.02-.02-.03-.02-.05 0 .6-.78 1.55-1.17 2.85-1.17 1.44 0 2.43.9 3.03 2.7-.05.32-.08.67-.08 1.04v.02c0 1.82.53 3.262 1.592 4.325 1.06 1.06 2.624 1.594 4.697 1.594.24 0 .5-.02.76-.06a7.16 7.16 0 0 0 .91-.18c.24-.06.45-.15.63-.26.18-.11.34-.24.48-.4a.94.94 0 0 0 .21-.33c.05-.13.08-.27.08-.42 0-.16-.03-.32-.09-.47a1.07 1.07 0 0 0-.25-.36 1.12 1.12 0 0 0-.36-.24 1.33 1.33 0 0 0-.44-.08c-.22 0-.24.01-.56.05-1.1.14-1.83.2-2.18.2-.8 0-1.38-.16-1.75-.48a1.54 1.54 0 0 1-.5-.71 3.25 3.25 0 0 1-.16-1.03v-.01c0-.83.22-1.56.66-2.2.16-.22.35-.42.58-.58.76-.57 1.79-.57 2.8-.14.06.03.28.13.47.27l.02.01c.09.07.22.19.31.32.09.12.17.28.23.45.05.16.08.33.08.51 0 .18-.03.35-.09.5a1.34 1.34 0 0 1-.27.46l.01.01c.63.72 1.27 1.07 1.91 1.07.31 0 .6-.08.86-.23.27-.15.49-.36.67-.63.18-.27.27-.58.27-.91 0-1.03-.5-1.98-1.5-2.86-.99-.87-2.27-1.3-3.84-1.3-1.62 0-3 .47-4.12 1.4a6.48 6.48 0 0 0-1.91 2.19c-.4.82-.6 1.65-.6 2.48z" />
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
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 animate-on-scroll opacity-0">
              Ready to make an impact with your online presence?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 animate-on-scroll opacity-0" style={{ transitionDelay: "0.1s" }}>
              Let's create a sustainable website that aligns with your values and helps you reach your goals.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-brandBlue px-8 py-4 rounded-lg font-medium hover:bg-marzipan transition-all animate-on-scroll opacity-0 shadow-md"
              style={{ transitionDelay: "0.2s" }}
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

export default IndexAlt;
