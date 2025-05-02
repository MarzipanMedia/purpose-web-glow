
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaHead from '@/components/MetaHead';
import HeroAlt3 from '@/components/alt3/HeroAlt3';
import ServicesAlt3 from '@/components/alt3/ServicesAlt3';
import ImpactAlt3 from '@/components/alt3/ImpactAlt3';
import ApproachAlt3 from '@/components/alt3/ApproachAlt3';
import LogosAlt3 from '@/components/alt3/LogosAlt3';
import ProjectsAlt3 from '@/components/alt3/ProjectsAlt3';
import CtaAlt3 from '@/components/alt3/CtaAlt3';
import WebsiteCheckerBanner from '@/components/alt3/WebsiteCheckerBanner';

const IndexAlt3 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design & Affordable SEO | Marzipan" 
        description="Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. Ensuring your online presence is as powerful as your purpose."
      />
      <Header />
      
      <main className="flex-grow">
        {/* Main hero section - optimized for LCP */}
        <HeroAlt3 />
        
        {/* Core sections */}
        <ImpactAlt3 />
        <ServicesAlt3 />
        <ApproachAlt3 />
        <WebsiteCheckerBanner />
        <LogosAlt3 />
        <ProjectsAlt3 />
        <CtaAlt3 />
      </main>
      
      <Footer />
    </div>
  );
};

export default IndexAlt3;
