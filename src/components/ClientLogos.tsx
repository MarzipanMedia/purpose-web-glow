
import React from 'react';

const ClientLogos: React.FC = () => {
  // Array of placeholder logos
  const logos = [
    { id: 1, alt: "Eco Brand", color: "#D3E4FD" }, // Soft blue
    { id: 2, alt: "Green Company", color: "#F2FCE2" }, // Soft green
    { id: 3, alt: "Sustainable Corp", color: "#FEF7CD" }, // Soft yellow
    { id: 4, alt: "Earth First", color: "#FFDEE2" }, // Soft pink
    { id: 5, alt: "Conscious Brand", color: "#E5DEFF" }, // Soft purple
    { id: 6, alt: "Planet Friendly", color: "#FDE1D3" }, // Soft peach
    { id: 7, alt: "Ethical Co", color: "#F1F0FB" }, // Soft gray
    { id: 8, alt: "Mindful Business", color: "#D3E4FD" }, // Soft blue
    { id: 9, alt: "Pure Living", color: "#F2FCE2" }, // Soft green
    { id: 10, alt: "Natural Brand", color: "#FEF7CD" }, // Soft yellow
    { id: 11, alt: "Green Tech", color: "#FFDEE2" }, // Soft pink
    { id: 12, alt: "Eco Solutions", color: "#E5DEFF" }, // Soft purple
  ];

  return (
    <section className="py-16 bg-brandBlue/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-on-scroll opacity-0">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
            Trusted Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold">
            Brands We've Worked With
          </h2>
          <p className="mt-4 text-foreground/80">
            Proud to partner with these forward-thinking companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {logos.slice(0, 6).map((logo) => (
            <div 
              key={logo.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-marzipan/30 h-24 animate-on-scroll opacity-0 hover:shadow-md transition-all duration-300"
              style={{ 
                transitionDelay: `${0.1 + (logo.id - 1) * 0.05}s`,
                backgroundColor: logo.color
              }}
            >
              <div className="text-foreground/40 font-medium">
                {logo.alt}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.slice(6, 12).map((logo) => (
            <div 
              key={logo.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-marzipan/30 h-24 animate-on-scroll opacity-0 hover:shadow-md transition-all duration-300"
              style={{ 
                transitionDelay: `${0.1 + (logo.id - 7) * 0.05}s`,
                backgroundColor: logo.color
              }}
            >
              <div className="text-foreground/40 font-medium">
                {logo.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
