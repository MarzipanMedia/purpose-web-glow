
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AiSeoHero from '../../components/ai-seo/AiSeoHero';
import AiSeoServices from '../../components/ai-seo/AiSeoServices';
import AiSeoProcess from '../../components/ai-seo/AiSeoProcess';
import AiSeoClientLogos from '../../components/ai-seo/AiSeoClientLogos';
import AiSeoContactForm from '../../components/ai-seo/AiSeoContactForm';

const AiSeo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AiSeoHero />
        <AiSeoServices />
        <AiSeoProcess />
        <AiSeoClientLogos />
        <AiSeoContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default AiSeo;
