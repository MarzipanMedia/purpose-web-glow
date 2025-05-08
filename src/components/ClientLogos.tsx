
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ClientLogo {
  id: number;
  name: string;
  imageUrl: string;
  alt: string;
  projectLink?: string;
}

const ClientLogos: React.FC = () => {
  // Array of client logos
  const logos: ClientLogo[] = [
    { id: 1, name: "FINSIA", imageUrl: "/client-logos/Finsia-SEO-logo.png", alt: "FINSIA  content creation", projectLink: "/projects" },
    { id: 2, name: "Australian Georgraphic", imageUrl: "/client-logos/ag-webdesign-logo.png", alt: "AusGeo Web Design", projectLink: "/projects" },
    { id: 3, name: "Willow", imageUrl: "/client-logos/willow-webdesign-logo.png", alt: "Sustainable Web Design", projectLink: "/projects" },
    { id: 4, name: "National Art School", imageUrl: "/client-logos/nas-adwords-logo.png", alt: "National Art School Adwords", projectLink: "/projects" },
    { id: 5, name: "Museums of History NSW", imageUrl: "/client-logos/mhnsw-content-logo.png", alt: "Museums of History NSW", projectLink: "/projects" },
    { id: 6, name: "Prime", imageUrl: "/client-logos/prime-seo-logo.png", alt: "Prime SEO", projectLink: "/projects" },
    { id: 7, name: "Toasty", imageUrl: "/client-logos/toasty-seo-logo.png", alt: "Toasty SEO + FB ads", projectLink: "/projects" },
    { id: 8, name: "LA Gum", imageUrl: "/client-logos/lagum-seo-logo.png", alt: "LA Gum SEO SEM Socials", projectLink: "/projects" },
    { id: 9, name: "NSW GOv", imageUrl: "/client-logos/nsw-scm2701-logo.png", alt: "NSW SCM2701 qualified", projectLink: "/projects" },
    { id: 10, name: "NipCo SEO", imageUrl: "/client-logos/nipco-seo-logo.png", alt: "NipCo SEO", projectLink: "/projects" },
    { id: 11, name: "Birchal", imageUrl: "/client-logos/birchal-sem-logo.png", alt: "Birchal Approved", projectLink: "/projects" },
    { id: 12, name: "Focus", imageUrl: "/client-logos/focus.png", alt: "Focus SEO", projectLink: "/projects" },
  ];

  return (
    <section className="py-16 bg-brandBlue/10 dark:bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-on-scroll opacity-0">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4 dark:bg-brandBlue/30 dark:text-white">
            Trusted Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold dark:text-white">
            Brands We've Worked With
          </h2>
          <p className="mt-4 text-foreground/80 dark:text-gray-200">
            Proud to partner with these forward-thinking companies in Australia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {logos.slice(0, 6).map((logo) => (
            <Link 
              key={logo.id}
              to={logo.projectLink || '/projects'}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-marzipan/30 h-24 animate-on-scroll opacity-0 hover:shadow-md transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
              style={{ transitionDelay: `${0.1 + (logo.id - 1) * 0.05}s` }}
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
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.slice(6, 12).map((logo) => (
            <Link 
              key={logo.id}
              to={logo.projectLink || '/projects'}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-marzipan/30 h-24 animate-on-scroll opacity-0 hover:shadow-md transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
              style={{ transitionDelay: `${0.1 + (logo.id - 7) * 0.05}s` }}
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
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-brandBlue hover:underline">
            View our client projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
