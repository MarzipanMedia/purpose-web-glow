
import React from 'react';

interface ClientLogo {
  id: number;
  name: string;
  imageUrl: string;
  alt: string;
}

const ClientLogos: React.FC = () => {
  // Array of client logos
  const logos: ClientLogo[] = [
    { id: 1, name: "Eco Brand", imageUrl: "/client-logos/eco-brand-logo.png", alt: "Eco Brand logo" },
    { id: 2, name: "Green Company", imageUrl: "/client-logos/green-company-logo.png", alt: "Green Company logo" },
    { id: 3, name: "Sustainable Corp", imageUrl: "/client-logos/sustainable-corp-logo.png", alt: "Sustainable Corp logo" },
    { id: 4, name: "Earth First", imageUrl: "/client-logos/earth-first-logo.png", alt: "Earth First logo" },
    { id: 5, name: "Conscious Brand", imageUrl: "/client-logos/conscious-brand-logo.png", alt: "Conscious Brand logo" },
    { id: 6, name: "Planet Friendly", imageUrl: "/client-logos/planet-friendly-logo.png", alt: "Planet Friendly logo" },
    { id: 7, name: "Ethical Co", imageUrl: "/client-logos/ethical-co-logo.png", alt: "Ethical Co logo" },
    { id: 8, name: "Mindful Business", imageUrl: "/client-logos/mindful-business-logo.png", alt: "Mindful Business logo" },
    { id: 9, name: "Pure Living", imageUrl: "/client-logos/pure-living-logo.png", alt: "Pure Living logo" },
    { id: 10, name: "Natural Brand", imageUrl: "/client-logos/natural-brand-logo.png", alt: "Natural Brand logo" },
    { id: 11, name: "Green Tech", imageUrl: "/client-logos/green-tech-logo.png", alt: "Green Tech logo" },
    { id: 12, name: "Eco Solutions", imageUrl: "/client-logos/eco-solutions-logo.png", alt: "Eco Solutions logo" },
  ];

  return (
    <section className="py-16 bg-brandBlue/10 dark:bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-on-scroll opacity-0">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4 dark:bg-brandBlue/30 dark:text-white">
            Trusted Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold">
            Brands We've Worked With
          </h2>
          <p className="mt-4 text-foreground/80 dark:text-gray-200">
            Proud to partner with these forward-thinking companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {logos.slice(0, 6).map((logo) => (
            <div 
              key={logo.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-marzipan/30 h-24 animate-on-scroll opacity-0 hover:shadow-md transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
              style={{ transitionDelay: `${0.1 + (logo.id - 1) * 0.05}s` }}
            >
              <img 
                src={logo.imageUrl} 
                alt={logo.alt} 
                className="max-h-16 max-w-full object-contain"
                onError={(e) => {
                  // Fallback if the image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<div class="text-foreground/40 font-medium dark:text-gray-300">${logo.name}</div>`;
                }}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.slice(6, 12).map((logo) => (
            <div 
              key={logo.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-marzipan/30 h-24 animate-on-scroll opacity-0 hover:shadow-md transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
              style={{ transitionDelay: `${0.1 + (logo.id - 7) * 0.05}s` }}
            >
              <img 
                src={logo.imageUrl} 
                alt={logo.alt} 
                className="max-h-16 max-w-full object-contain"
                onError={(e) => {
                  // Fallback if the image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<div class="text-foreground/40 font-medium dark:text-gray-300">${logo.name}</div>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
