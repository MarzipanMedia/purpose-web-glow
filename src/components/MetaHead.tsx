
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaHeadProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'blog';
  url?: string;
  canonicalUrl?: string;
  schemaData?: object[]; // Add support for custom schema.org JSON-LD
  keywords?: string;
  author?: string;
  location?: {
    city?: string;
    region?: string;
    postalCode?: string;
    streetAddress?: string;
  };
}

const MetaHead = ({
  title,
  description,
  image = '/marzipan-logo.webp',
  type = 'website',
  url,
  canonicalUrl,
  schemaData = [],
  keywords = "sustainable web design Sydney, digital agency Sydney, affordable SEO services, purpose-driven marketing",
  author = "Marzipan Digital",
  location = {
    city: "Sydney",
    region: "NSW",
    postalCode: "2007",
    streetAddress: "22-36 Mountain St, Ultimo"
  }
}: MetaHeadProps) => {
  // Construct full title with brand name
  const fullTitle = `${title} | Marzipan Digital`;
  
  // Get current URL if not provided
  const currentUrl = url || window.location.href;

  // Add Sydney to keywords if not already present
  if (!keywords.toLowerCase().includes('sydney')) {
    keywords = `${keywords}, Sydney`;
  }

  // Organization Schema with Sydney focus
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marzipan Media",
    "url": "https://marzipan.com.au",
    "logo": "https://marzipan.com.au/marzipan-logo.webp",
    "sameAs": [
      "https://www.instagram.com/marzipanmedia",
      "https://linkedin.com/company/18211194"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.streetAddress,
      "addressLocality": location.city,
      "addressRegion": location.region,
      "postalCode": location.postalCode,
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.880836,
      "longitude": 151.199997
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney",
        "sameAs": "https://en.wikipedia.org/wiki/Sydney"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Eastern Suburbs",
        "containedIn": {
          "@type": "City",
          "name": "Sydney"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Northern Beaches",
        "containedIn": {
          "@type": "City",
          "name": "Sydney"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Inner West",
        "containedIn": {
          "@type": "City",
          "name": "Sydney"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "North Shore",
        "containedIn": {
          "@type": "City",
          "name": "Sydney"
        }
      }
    ]
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "url": currentUrl,
    "description": description,
    "keywords": keywords,
    "author": {
      "@type": "Organization",
      "name": "Marzipan Digital"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marzipan Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marzipan.com.au/marzipan-logo.webp"
      }
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "Marzipan Digital - Sustainable Web Design & SEO in Sydney",
      "url": "https://marzipan.com.au"
    }
  };

  // Local Business Schema specifically for Sydney
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marzipan Digital",
    "description": "Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands in Sydney. Creating eco-friendly websites that deliver results.",
    "url": "https://marzipan.com.au",
    "logo": "https://marzipan.com.au/marzipan-logo.webp",
    "image": "https://marzipan.com.au/marzipan-web-design-syd-min.webp",
    "telephone": "+61-2-8005-0403",
    "email": "hello@marzipan.com.au",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.streetAddress,
      "addressLocality": location.city,
      "addressRegion": location.region,
      "postalCode": location.postalCode,
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.880836,
      "longitude": 151.199997
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:30"
    },
    "sameAs": [
      "https://www.instagram.com/marzipanmedia",
      "https://linkedin.com/company/18211194"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services in Sydney",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sustainable Web Design",
            "description": "Eco-friendly website design services for Sydney businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Driven SEO",
            "description": "Ethical SEO services for Sydney businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Creation",
            "description": "Engaging content creation for Sydney businesses"
          }
        }
      ]
    }
  };
  
  // Combine default schema with custom schema data
  const allSchemaData = [organizationSchema, webPageSchema, localBusinessSchema, ...schemaData];
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="geo.region" content="AU-NSW" />
      <meta name="geo.placename" content="Sydney" />
      <meta name="geo.position" content="-33.880836;151.199997" />
      <meta name="ICBM" content="-33.880836, 151.199997" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:locale" content="en_AU" />
      
      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Accessibility and mobile optimization */}
      <html lang="en-AU" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#186074" />

      {/* Schema.org JSON-LD */}
      {allSchemaData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default MetaHead;
