import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaHeadProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'blog';
  url?: string;
  canonicalUrl?: string;
}

const MetaHead = ({
  title,
  description,
  image = '/Marzipan-Logo..WEBP',
  type = 'website',
  url,
  canonicalUrl,
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
    "logo": "/Marzipan-Logo..WEBP",
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

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  );
};

export default MetaHead;
