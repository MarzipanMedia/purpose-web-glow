
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
}

const MetaHead = ({
  title,
  description,
  image = '/marzipan-logo.webp',
  type = 'website',
  url,
  canonicalUrl,
  schemaData = [],
}: MetaHeadProps) => {
  // Construct full title with brand name
  const fullTitle = `${title} | Marzipan Digital`;
  
  // Get current URL if not provided
  const currentUrl = url || window.location.href;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marzipan Media",
    "url": "https://marzipan.com.au",
    "logo": "/marzipan-logo.webp",
    "sameAs": [
      "https://www.instagram.com/marzipanmedia",
      "https://linkedin.com/company/18211194"
    ]
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "url": currentUrl,
    "description": description
  };
  
  // Combine default schema with custom schema data
  const allSchemaData = [organizationSchema, webPageSchema, ...schemaData];
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Accessibility and mobile optimization */}
      <html lang="en" />
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
