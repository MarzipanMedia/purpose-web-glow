
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesHero from '../components/services/ServicesHero';
import MainServices from '../components/services/MainServices';
import AdditionalServices from '../components/services/AdditionalServices';
import ServiceCTA from '../components/services/ServiceCTA';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <ServicesHero />
        <MainServices />
        <AdditionalServices />
        <ServiceCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
