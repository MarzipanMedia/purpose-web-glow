
import React from 'react';
import MetaHead from '@/components/MetaHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AlwaysWas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Acknowledgment of Country" 
        description="Marzipan acknowledges the Traditional Owners of Country throughout Australia and their continuing connection to land, waters and community."
      />
      <Header />
      <main className="flex-grow">
        <section className="min-h-[80vh] relative flex items-center justify-center bg-gradient-to-br from-[#f8f4e9] to-[#eacda3] overflow-hidden">
          {/* Decorative circle element */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] border-4 border-brandRed/20 rounded-full opacity-50 transform rotate-12" />
          <div className="absolute top-[-8%] right-[-3%] w-[450px] h-[450px] border-4 border-brandRed/30 rounded-full opacity-40 transform rotate-6" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-brandRed text-lg md:text-xl leading-relaxed md:leading-relaxed animate-fade-in">
                Marzipan acknowledges the Traditional Owners of Country throughout Australia and acknowledges their continuing connection to land, waters and community. We pay our respects to the people, the cultures and the Elders past and present, and thank them for preserving the land on which we sit, swim and play.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AlwaysWas;
