
import React from 'react';

interface ClientLogo {
  name: string;
  initial: string;
}

const AiSeoClientLogos = () => {
  const clientLogos: ClientLogo[] = [
    { name: 'EcoLiving Collective', initial: 'E' },
    { name: 'Sustainable Solutions Co.', initial: 'S' },
    { name: 'Green Growth Partners', initial: 'G' },
    { name: 'Community Earth', initial: 'C' },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">
            Trusted By Purpose-Driven Brands
          </h2>
          <p className="text-foreground/70">
            Join these forward-thinking organizations who've chosen our AI SEO expertise
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clientLogos.map((client, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-marzipan/30 bg-marzipan/5 animate-fade-in hover:bg-marzipan/20 transition-all duration-300"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="h-16 w-16 rounded-full bg-brandBlue/10 flex items-center justify-center text-2xl font-display text-brandBlue font-semibold mb-3">
                {client.initial}
              </div>
              <p className="text-center font-medium">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiSeoClientLogos;
