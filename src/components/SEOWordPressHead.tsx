
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { YoastSEOData } from '@/services/wordpressService';

interface SEOWordPressHeadProps {
  yoastData: YoastSEOData;
  fallbackTitle?: string;
  fallbackDescription?: string;
  fallbackImage?: string;
}

const SEOWordPressHead = ({ 
  yoastData, 
  fallbackTitle = 'Marzipan Blog',
  fallbackDescription = 'Insights from Marzipan Digital on sustainable web design and SEO.',
  fallbackImage = '/Marzipan-Logo.png'
}: SEOWordPressHeadProps) => {
  if (!yoastData) {
    return (
      <Helmet>
        <title>{fallbackTitle} | Marzipan Digital</title>
        <meta name="description" content={fallbackDescription} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
    );
  }

  return (
    <Helmet>
      <title>{yoastData.title}</title>
      <meta name="description" content={yoastData.description} />
      <link rel="canonical" href={yoastData.canonical} />

      {/* Open Graph tags */}
      <meta property="og:locale" content={yoastData.og_locale} />
      <meta property="og:type" content={yoastData.og_type} />
      <meta property="og:title" content={yoastData.og_title} />
      <meta property="og:description" content={yoastData.og_description} />
      <meta property="og:url" content={yoastData.og_url} />
      <meta property="og:site_name" content={yoastData.og_site_name} />
      {yoastData.article_published_time && (
        <meta property="article:published_time" content={yoastData.article_published_time} />
      )}
      {yoastData.og_image && yoastData.og_image.map((image, index) => (
        <React.Fragment key={index}>
          <meta property="og:image" content={image.url} />
          <meta property="og:image:width" content={image.width.toString()} />
          <meta property="og:image:height" content={image.height.toString()} />
          <meta property="og:image:type" content={image.type} />
        </React.Fragment>
      ))}

      {/* Twitter tags */}
      <meta name="twitter:card" content={yoastData.twitter_card} />
      <meta name="twitter:title" content={yoastData.twitter_title} />
      <meta name="twitter:description" content={yoastData.twitter_description} />
      {yoastData.twitter_image && (
        <meta name="twitter:image" content={yoastData.twitter_image} />
      )}

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(yoastData.schema)}
      </script>
    </Helmet>
  );
};

export default SEOWordPressHead;
