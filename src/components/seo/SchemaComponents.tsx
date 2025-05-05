
import React from 'react';
import { Helmet } from 'react-helmet-async';

// Local Business Schema
export const LocalBusinessSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marzipan Digital",
    "image": "/Marzipan-Logo.png",
    "url": "https://marzipan.com.au",
    "telephone": "+61-2-9000-1234",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Lane",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-33.868820",
      "longitude": "151.209296"
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
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.instagram.com/marzipanmedia",
      "https://linkedin.com/company/18211194"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

// Service Schema for each service
export interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
}

export const ServiceSchema = ({ serviceName, serviceDescription, serviceUrl }: ServiceSchemaProps) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Marzipan Digital",
      "url": "https://marzipan.com.au"
    },
    "url": serviceUrl,
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-33.868820",
        "longitude": "151.209296"
      },
      "geoRadius": "50000"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

// BlogPosting Schema for blog posts
export interface BlogPostSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  articleUrl: string;
}

export const BlogPostSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  articleUrl
}: BlogPostSchemaProps) => {
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": authorUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marzipan Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "/Marzipan-Logo.png",
        "width": "600",
        "height": "60"
      }
    },
    "url": articleUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(blogPostSchema)}
      </script>
    </Helmet>
  );
};

// Breadcrumb Schema
export interface BreadcrumbItemProps {
  name: string;
  url: string;
  position: number;
}

export interface BreadcrumbSchemaProps {
  items: BreadcrumbItemProps[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};
