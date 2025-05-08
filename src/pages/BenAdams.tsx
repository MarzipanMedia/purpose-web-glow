
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaHead from '@/components/MetaHead';
import BenAdamsHero from '../components/team/BenAdamsHero';
import BenAdamsBio from '../components/team/BenAdamsBio';
import FeaturedProjects from '../components/team/FeaturedProjects';
import BenAdamsCta from '../components/team/BenAdamsCta';
import BenAdamsFriends from '../components/team/BenAdamsFriends';
import BookSection from '../components/team/BookSection';

const BenAdams = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Ben Adams | Co-Founder & Technical Director at Marzipan Media"
        description="Meet Ben Adams, Co-Founder and Technical Director at Marzipan Media, leading sustainable web development and technical innovation."
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <BenAdamsHero />

        {/* Bio Section */}
        <BenAdamsBio />

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* CTA Section */}
        <BenAdamsCta />

        {/* Friends with Benefits Section */}
        <BenAdamsFriends />

        {/* Books Section */}
        <BookSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default BenAdams;
