
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaHeadProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'blog';
  url?: string;
}

const MetaHead = ({
  title,
  description,
  image = '/Marzipan-Logo-Strip.png',
  type = 'website',
  url,
}: MetaHeadProps) => {
  // Construct full title with brand name
  const fullTitle = `${title} | Marzipan Digital`;
  
  // Get current URL if not provided
  const currentUrl = url || window.location.href;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
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
    </Helmet>
  );
};

export default MetaHead;
