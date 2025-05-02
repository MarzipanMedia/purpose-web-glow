
import React from 'react';

interface ClientLogo {
  id: number;
  name: string;
  imageUrl: string;
  alt: string;
  width?: number;
  height?: number;
}

const ClientLogos: React.FC = () => {
  // Array of client logos with enhanced alt text and dimensions
  const logos: ClientLogo[] = [
    { id: 1, name: "FINSIA", imageUrl: "/client-logos/Finsia-SEO-logo.png", alt: "FINSIA - Financial Services Institute of Australasia content creation client", width: 160, height: 60 },
    { id: 2, name: "Australian Geographic", imageUrl: "/client-logos/ag-webdesign-logo.png", alt: "Australian Geographic sustainable web design project by Marzipan", width: 160, height: 60 },
    { id: 3, name: "Willow", imageUrl: "/client-logos/willow-webdesign-logo.png", alt: "Willow sustainable web design and development by Marzipan Digital", width: 160, height: 60 },
    { id: 4, name: "National Art School", imageUrl: "/client-logos/nas-adwords-logo.png", alt: "National Art School Google Ads campaign managed by Marzipan", width: 160, height: 60 },
    { id: 5, name: "Museums of History NSW", imageUrl: "/client-logos/mhnsw-content-logo.png", alt: "Museums of History NSW content creation and digital strategy by Marzipan", width: 160, height: 60 },
    { id: 6, name: "Prime", imageUrl: "/client-logos/prime-seo-logo.png", alt: "Prime SEO campaign and digital optimization by Marzipan Digital", width: 160, height: 60 },
    { id: 7, name: "Toasty", imageUrl: "/client-logos/toasty-seo-logo.png", alt: "Toasty SEO and Facebook ads campaign by Marzipan Digital", width: 160, height: 60 },
    { id: 8, name: "LA Gum", imageUrl: "/client-logos/lagum-seo-logo.png", alt: "LA Gum SEO, SEM and social media marketing by Marzipan", width: 160, height: 60 },
    { id: 9, name: "NSW Government", imageUrl: "/client-logos/nsw-scm2701-logo.png", alt: "NSW Government SCM2701 qualified digital agency - Marzipan", width: 160, height: 60 },
    { id: 10, name: "NipCo SEO", imageUrl: "/client-logos/nipco-seo-logo.png", alt: "NipCo SEO strategy and implementation by Marzipan Digital", width: 160, height: 60 },
    { id: 11, name: "Birchal", imageUrl: "/client-logos/birchal-sem-logo.png", alt: "Birchal SEM and digital marketing campaign by Marzipan", width: 160, height: 60 },
    { id: 12, name: "Focus", imageUrl: "/client-logos/focus.png", alt: "Focus SEO optimization and digital strategy by Marzipan", width: 160, height: 60 },
  ];

  return (
    <section className="py-16 bg-brandBlue/10 dark:bg-gray-800/30" aria-labelledby="trusted-partners-heading">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-on-scroll opacity-0">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4 dark:bg-brandBlue/30 dark:text-white">
            Trusted Partners
          </div>
          <h2 id="trusted-partners-heading" className="text-3xl md:text-4xl font-display font-semibold dark:text-white">
            Brands We've Worked With
          </h2>
          <p className="mt-4 text-foreground/80 dark:text-gray-200">
            Proud to partner with these forward-thinking companies in Australia
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
                width={logo.width || 160}
                height={logo.height || 60}
                loading="lazy"
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
                width={logo.width || 160}
                height={logo.height || 60}
                loading="lazy"
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
