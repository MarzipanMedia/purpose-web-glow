
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import OurMission from '../components/about/OurMission';
import OurApproach from '../components/about/OurApproach';
import OurValues from '../components/about/OurValues';
import TeamSection from '../components/about/TeamSection';
import CTASection from '../components/projects/CTASection';
import MetaHead from '../components/MetaHead';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="About Marzipan Media | Sustainable Digital Agency Sydney"
        description="Marzipan Media is a purpose-driven digital agency in Sydney creating sustainable websites and ethical AI-driven SEO strategies that help brands shine brighter online."
      />
      
      <Header />
      
      <main className="flex-grow">
        <AboutHero />
        <OurMission />
        <OurApproach />
        <OurValues />
        <TeamSection />
        <CTASection 
          title="Ready to make your digital presence as powerful as your purpose?" 
          subtitle="Let's create something sustainable together."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
