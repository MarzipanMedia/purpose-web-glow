
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PartnerLogo {
  id: number;
  name: string;
  imageUrl: string;
  alt: string;
  projectLink?: string;
}

const BenAdamsPartnerLogos: React.FC = () => {
  // Array of Ben's partner logos
  const partnerLogos: PartnerLogo[] = [
    { id: 1, name: "WordPress", imageUrl: "/client-logos/wordpress-logo.png", alt: "WordPress Partner", projectLink: "/services/sustainable-web-design" },
    { id: 2, name: "Google", imageUrl: "/client-logos/google-logo.png", alt: "Google Certified", projectLink: "/services/ai-seo" },
    { id: 3, name: "React", imageUrl: "/client-logos/react-logo.png", alt: "React Developer", projectLink: "/projects" },
    { id: 4, name: "TailwindCSS", imageUrl: "/client-logos/tailwind-logo.png", alt: "Tailwind Expert", projectLink: "/projects" },
    { id: 5, name: "GitHub", imageUrl: "/client-logos/github-logo.png", alt: "Open Source Contributor", projectLink: "/projects" },
    { id: 6, name: "Figma", imageUrl: "/client-logos/figma-logo.png", alt: "Design Partner", projectLink: "/projects" },
    { id: 7, name: "Webflow", imageUrl: "/client-logos/webflow-logo.png", alt: "Webflow Expert", projectLink: "/services/sustainable-web-design" },
    { id: 8, name: "Shopify", imageUrl: "/client-logos/shopify-logo.png", alt: "Shopify Partner", projectLink: "/projects" },
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {partnerLogos.slice(0, 4).map((logo) => (
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partnerLogos.slice(4, 8).map((logo) => (
          <Link 
            key={logo.id}
            to={logo.projectLink || '/projects'}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-marzipan/30 h-24 animate-on-scroll opacity-0 hover:shadow-md transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
            style={{ transitionDelay: `${0.1 + (logo.id - 5) * 0.05}s` }}
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
        <Link to="/about" className="inline-flex items-center gap-2 text-brandBlue hover:underline">
          Learn more about our partnerships <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default BenAdamsPartnerLogos;
