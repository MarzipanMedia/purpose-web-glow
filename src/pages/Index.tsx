
import React, { useEffect, lazy, Suspense } from 'react';
import Header from '../components/Header';
import SimpleHero from '../components/SimpleHero';
import Services from '../components/Services';
import MetaHead from '@/components/MetaHead';
import StatsSection from '@/components/home/StatsSection';

// Preload critical assets
const preloadCriticalAssets = () => {
  // Preload critical images
  const imagesToPreload = [
    '/marzipan-web-design-syd-min.webp',
    '/marzipan-logo.webp'
  ];
  
  imagesToPreload.forEach(imgSrc => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imgSrc;
    link.type = 'image/webp';
    document.head.appendChild(link);
  });
};

// Lazy load components that aren't needed for initial render
const ClientLogos = lazy(() => import('../components/ClientLogos'));
const CarbonShowcase = lazy(() => import('@/components/carbon/CarbonShowcase'));
const Sustainability = lazy(() => import('../components/Sustainability'));
const RecentProjects = lazy(() => import('../components/RecentProjects'));
const BlogPreview = lazy(() => import('../components/BlogPreview'));
const Footer = lazy(() => import('../components/Footer'));
const WebsiteCarbonCTA = lazy(() => import('@/components/home/WebsiteCarbonCTA'));
const TestimonialsSection = lazy(() => import('@/components/home/TestimonialsSection'));
const FinalCTA = lazy(() => import('@/components/home/FinalCTA'));

// Loading fallback component
const LoadingFallback = () => <div className="min-h-[200px] flex items-center justify-center">
  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
</div>;

const Index = () => {
  // Add important elements preload
  useEffect(() => {
    // Initialize critical assets preloading with minimal overhead
    requestIdleCallback ? 
      requestIdleCallback(() => preloadCriticalAssets()) : 
      setTimeout(preloadCriticalAssets, 100);
    
    // Mark LCP element for performance monitoring
    const lcpElement = document.querySelector('.hero-headline');
    if (lcpElement && window.LCP) window.LCP(lcpElement);
  }, []);

  // Add scroll animation observer - improved to use IntersectionObserver once
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Defer animation setup until after initial load
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer.observe(el));
    }, 1000);

    return () => observer.disconnect();
  }, []);

  // Home page specific schema data
  const homeSchemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Marzipan Digital",
      "description": "Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands in Sydney. Creating eco-friendly websites that deliver results.",
      "url": "https://marzipan.com.au",
      "logo": "https://marzipan.com.au/marzipan-logo.webp",
      "image": "https://marzipan.com.au/marzipan-web-design-syd-min.webp",
      "telephone": "+61-2-8005-0403",
      "email": "hello@marzipan.com.au",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22-36 Mountain St",
        "addressLocality": "Ultimo",
        "addressRegion": "NSW",
        "postalCode": "2007",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -33.880836,
        "longitude": 151.199997
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:30"
      },
      "sameAs": [
        "https://www.instagram.com/marzipanmedia",
        "https://linkedin.com/company/18211194"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design & Affordable SEO" 
        description="Marzipan Digital creates eco-friendly websites and ethical AI-driven SEO strategies for purpose-driven Australian brands. Lower your digital carbon footprint while increasing visibility."
        image="/marzipan-web-design-syd-min.webp"
        keywords="sustainable web design Sydney, eco-friendly websites, ethical SEO, purpose-driven digital marketing, low carbon websites"
        schemaData={homeSchemaData}
      />
      <Header />
      
      <main className="flex-grow">
        {/* Critical above-the-fold content */}
        <SimpleHero />
        <StatsSection />
        
        {/* Non-critical content loaded with Suspense - with more granular chunks */}
        <Suspense fallback={<LoadingFallback />}>
          <CarbonShowcase />
        </Suspense>
          
        <section className="relative bg-gradient-to-b from-gray-50 to-white">
          <Services />
        </section>
        
        <Suspense fallback={<LoadingFallback />}>
          <section className="relative">
            <Sustainability />
          </section>
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <WebsiteCarbonCTA />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <ClientLogos />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <RecentProjects />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <BlogPreview />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <FinalCTA />
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
