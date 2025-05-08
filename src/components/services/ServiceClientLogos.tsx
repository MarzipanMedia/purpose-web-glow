
import React, { useMemo } from 'react';

interface ClientLogo {
  id: number;
  name: string;
  imageUrl: string;
  alt: string;
}

interface ServiceClientLogosProps {
  heading?: string;
  subheading?: string;
  backgroundColor?: string;
}

const ServiceClientLogos: React.FC<ServiceClientLogosProps> = ({
  heading = "Trusted By Purpose-Driven Brands",
  subheading = "Join these forward-thinking organizations who've chosen our expertise",
  backgroundColor = "bg-white"
}) => {
  // Using the same logo data from the main ClientLogos component
  const allLogos: ClientLogo[] = [
    { id: 1, name: "FINSIA", imageUrl: "/client-logos/Finsia-SEO-logo.png", alt: "FINSIA content creation" },
    { id: 2, name: "Australian Georgraphic", imageUrl: "/client-logos/ag-webdesign-logo.png", alt: "AusGeo Web Design" },
    { id: 3, name: "Willow", imageUrl: "/client-logos/willow-webdesign-logo.png", alt: "Sustainable Web Design" },
    { id: 4, name: "National Art School", imageUrl: "/client-logos/nas-adwords-logo.png", alt: "National Art School Adwords" },
    { id: 5, name: "Museums of History NSW", imageUrl: "/client-logos/mhnsw-content-logo.png", alt: "Museums of History NSW" },
    { id: 6, name: "Prime", imageUrl: "/client-logos/prime-seo-logo.png", alt: "Prime SEO" },
    { id: 7, name: "Toasty", imageUrl: "/client-logos/toasty-seo-logo.png", alt: "Toasty SEO + FB ads" },
    { id: 8, name: "LA Gum", imageUrl: "/client-logos/lagum-seo-logo.png", alt: "LA Gum SEO SEM Socials" },
    { id: 9, name: "NSW GOv", imageUrl: "/client-logos/nsw-scm2701-logo.png", alt: "NSW SCM2701 qualified" },
    { id: 10, name: "NipCo SEO", imageUrl: "/client-logos/nipco-seo-logo.png", alt: "NipCo SEO" },
    { id: 11, name: "Birchal", imageUrl: "/client-logos/birchal-sem-logo.png", alt: "Birchal Approved" },
    { id: 12, name: "Focus", imageUrl: "/client-logos/focus.png", alt: "Focus SEO" },
  ];

  // Randomly select 4 logos on each render
  const randomLogos = useMemo(() => {
    // Create a copy of the array to avoid mutating the original
    const shuffled = [...allLogos];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Take the first 4 logos
    return shuffled.slice(0, 4);
  }, []);

  return (
    <section className={`py-14 ${backgroundColor}`}>
      <div className="container-custom">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">
            {heading}
          </h2>
          <p className="text-foreground/70">
            {subheading}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {randomLogos.map((logo, index) => (
            <div 
              key={logo.id} 
              className="flex items-center justify-center p-6 rounded-lg border border-marzipan/30 bg-white h-24 animate-fade-in hover:shadow-md transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <img 
                src={logo.imageUrl} 
                alt={logo.alt} 
                className="max-h-16 max-w-full object-contain"
                loading="lazy"
                onError={(e) => {
                  console.log(`Image failed to load: ${logo.imageUrl}`);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="text-foreground/40 font-medium dark:text-gray-300">${logo.name}</div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceClientLogos;
