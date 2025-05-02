
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroAlt3 = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Mark this as an LCP element for browser optimization
    if (heroRef.current) {
      heroRef.current.setAttribute('fetchpriority', 'high');
      
      // Add to browser's LCP monitoring if available
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        const observer = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            // TypeScript fix: Check if the entry is LargestContentfulPaint and has element property
            const lcpEntry = entry as any;
            if (lcpEntry.element === heroRef.current) {
              // We can report this to analytics if needed
              console.log('LCP element rendered:', entry.startTime);
            }
          }
        });
        
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
        
        return () => observer.disconnect();
      }
    }
  }, []);
  
  return (
    <section className="hero-alt3 py-20 md:py-28 relative overflow-hidden" id="hero-section">
      <div className="container-alt3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            {/* Main heading optimized as primary LCP element */}
            <h1 
              ref={heroRef}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              id="hero-heading"
            >
              Ensuring your online presence is as powerful as your <span className="gradient-text">purpose</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              Your website should do more than just exist—it should drive traffic, increase conversions, and align with your values. We offer sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/services" className="btn-primary-alt3">
                Digital Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="btn-secondary-alt3">
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="relative" style={{ aspectRatio: '1/1' }}>
              {/* Simplified hero visual with aspect ratio to prevent layout shift */}
              <div className="absolute inset-0 bg-gradient-radial from-brandRed/20 to-transparent opacity-70 rounded-full"></div>
              <div 
                className="bg-gradient-to-br from-brandRed/20 via-brandRed/40 to-brandRed/60 rounded-full aspect-square flex items-center justify-center"
                style={{ width: '100%', height: 'auto' }}
              >
                <div className="text-center">
                  <p className="text-xl font-display text-white">Eco-friendly</p>
                  <h2 className="text-3xl font-display font-semibold text-white">Web Design</h2>
                  <p className="mt-2 text-white/90">For purpose-driven brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAlt3;
