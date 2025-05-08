
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesHero from '../components/services/ServicesHero';
import MainServices from '../components/services/MainServices';
import AdditionalServices from '../components/services/AdditionalServices';
import ServiceCTA from '../components/services/ServiceCTA';
import MetaHead from '../components/MetaHead';
import ServiceClientLogos from '../components/services/ServiceClientLogos';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Digital Services | Sustainable Web Design & Ethical SEO"
        description="Discover our sustainable web design, ethical AI-driven SEO, and digital content creation services to help purpose-driven brands maximise their online impact."
      />
      
      <Header />
      
      <main className="flex-grow">
        <ServicesHero />
        <MainServices />
        <AdditionalServices />
        <ServiceClientLogos 
          heading="Our Trusted Clients"
          subheading="Purpose-driven brands we've helped achieve digital success"
          backgroundColor="bg-marzipan/10"
        />
        <ServiceCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
