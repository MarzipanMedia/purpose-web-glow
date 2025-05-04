
/**
 * SEO Configuration
 * 
 * Central place to manage SEO settings across the site
 */

export const seoConfig = {
  siteName: 'Marzipan Digital',
  siteUrl: 'https://marzipan.com.au',
  defaultTitle: 'Sustainable Web Design & Affordable SEO',
  defaultDescription: 'Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. Ensuring your online presence is as powerful as your purpose.',
  defaultImage: '/Marzipan-Logo.png',
  twitter: {
    handle: '@marzipandigital',
    cardType: 'summary_large_image'
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU'
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Marzipan Digital'
    },
    {
      name: 'keywords',
      content: 'sustainable web design Sydney, digital agency Sydney, affordable SEO services, purpose-driven marketing, Marzipan Media'
    }
  ]
};

/**
 * Helper function to generate page-specific SEO data
 */
export const getPageSEO = (pageName: string, customData?: {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  type?: 'website' | 'article' | 'blog';
}) => {
  const pageDefaults: Record<string, {
    title: string;
    description: string;
    path: string;
  }> = {
    home: {
      title: seoConfig.defaultTitle,
      description: seoConfig.defaultDescription,
      path: '/'
    },
    about: {
      title: 'About Marzipan Media | Sustainable Digital Agency Sydney',
      description: 'Marzipan Media is a purpose-driven digital agency in Sydney creating sustainable websites and ethical AI-driven SEO strategies that help brands shine brighter online.',
      path: '/about'
    },
    services: {
      title: 'Our Services | Sustainable Web Design & SEO',
      description: 'From eco-friendly web design to AI-driven SEO, Marzipan offers digital marketing services that align with your values and boost your online presence.',
      path: '/services'
    },
    projects: {
      title: 'Our Work | Purpose-Driven Web Design Projects',
      description: 'Explore our portfolio of sustainable web design and SEO projects for purpose-driven brands and organizations.',
      path: '/projects'
    },
    contact: {
      title: 'Contact Us | Marzipan Digital',
      description: 'Get in touch with Marzipan Digital to discuss your sustainable web design and SEO needs.',
      path: '/contact'
    },
    blog: {
      title: 'Blog | Sustainable Digital Marketing Insights',
      description: 'Read our latest insights on sustainable web design, SEO, and digital marketing for purpose-driven brands.',
      path: '/blog'
    },
    websiteCarbon: {
      title: 'Website Carbon Calculator | Check Your Site\'s Footprint',
      description: 'Measure your website\'s carbon footprint and get recommendations on how to make it more sustainable.',
      path: '/website-carbon'
    }
  };

  const pageDefaults404 = {
    title: '404 | Page Not Found',
    description: 'Sorry, the page you are looking for does not exist.',
    path: '/404'
  };

  const pageData = pageDefaults[pageName] || pageDefaults404;
  
  return {
    title: customData?.title || pageData.title,
    description: customData?.description || pageData.description,
    canonicalUrl: customData?.canonicalUrl || `${seoConfig.siteUrl}${pageData.path}`,
    image: customData?.image || seoConfig.defaultImage,
    type: customData?.type || 'website'
  };
};
