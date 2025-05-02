
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Mark the hero heading as highest priority for LCP
    if (heroRef.current) {
      heroRef.current.setAttribute('fetchpriority', 'high');
    }
    
    // Monitor LCP for analytics and optimization feedback
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            // TypeScript fix: Check if the entry is LargestContentfulPaint
            const lcpEntry = entry as any;
            if (lcpEntry.element === heroRef.current) {
              // We can report this to analytics if needed
              console.log('LCP element rendered:', entry.startTime);
              
              // Add a class to trigger sequential animations after LCP is done
              if (heroSectionRef.current) {
                heroSectionRef.current.classList.add('lcp-loaded');
              }
            }
          }
        });
        
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
        
        return () => observer.disconnect();
      } catch (e) {
        console.error('Failed to observe LCP:', e);
      }
    }
  }, []);

  return (
    <section 
      ref={heroSectionRef}
      className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-br from-white via-marzipan/5 to-marzipan/10" 
      id="hero-section"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
          {/* Main content with clear LCP identification */}
          <div className="md:col-span-7 space-y-4 md:space-y-6">
            <h1 
              ref={heroRef}
              id="main-heading" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              data-lcp-element="true"
            >
              Ensuring your online presence is as powerful as your 
              <span className="gradient-text"> purpose</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl">
              Your website should do more than just exist—it should drive traffic, increase conversions, and align with your values. 
              We offer sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/services" className="btn-primary flex items-center gap-2">
                Digital Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="btn-secondary flex items-center gap-2">
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 mt-8 md:mt-0">
            <div className="relative" style={{ aspectRatio: '1/1', width: '100%' }}>
              {/* Simplified hero visual with proper aspect ratio to prevent layout shift */}
              <div className="absolute inset-0 bg-gradient-radial from-brandBlue/20 to-transparent opacity-70 rounded-full"></div>
              <div 
                className="bg-marzipan/80 rounded-full aspect-square flex items-center justify-center p-6 sm:p-8 md:p-12 relative z-10"
                style={{ width: '100%', height: 'auto' }}
              >
                <div className="text-center">
                  <p className="text-lg sm:text-xl font-display">Eco-friendly</p>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold">Web Design</h2>
                  <p className="mt-2 text-foreground/80">For purpose-driven brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
