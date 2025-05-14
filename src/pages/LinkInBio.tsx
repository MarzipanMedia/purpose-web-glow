
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Avatar } from '@/components/ui/avatar';
import Footer from '@/components/Footer';
import { LinkItem, LinkSection } from '@/components/linkbio/LinkItem';
import EbookSection from '@/components/linkbio/EbookSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const LinkInBio = () => {
  // Use effect to ensure this doesn't interfere with LCP measurements on other pages
  useEffect(() => {
    // Defer non-critical operations to after page load
    const timer = setTimeout(() => {
      console.log('LinkInBio page loaded');
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>Marzipan Digital | Link in Bio</title>
        <meta name="description" content="Connect with Marzipan Digital and explore our resources, services and content" />
      </Helmet>
      
      {/* Back to main site button */}
      <div className="container-custom py-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-brandBlue dark:hover:text-brandBlue">
            <ArrowLeft size={16} className="mr-1" />
            Back to main site
          </Link>
        </Button>
      </div>
      
      {/* Profile Section */}
      <header className="container-custom pt-8 pb-6 text-center">
        <Avatar className="h-24 w-24 mx-auto mb-4 border-2 border-brandBlue">
          <img 
            src="/marzipan-ben.webp"
            alt="Marzipan Digital"
            className="h-full w-full object-cover"
          />
        </Avatar>
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-2 dark:text-white">Marzipan Digital</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Sustainable Web Design & AI-Driven SEO</p>
      </header>
      
      <main className="container-custom max-w-md mx-auto pb-16 flex-grow">
        {/* Ebooks Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">Our Digital Resources</h2>
          <EbookSection />
        </section>
        
        {/* Links Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">Connect With Us</h2>
          <LinkSection>
            <LinkItem 
              icon="Globe" 
              title="Visit Our Website" 
              url="/"
              description="Explore our services, projects & resources" 
              internal={true}
            />
            <LinkItem 
              icon="Phone" 
              title="Contact Us" 
              url="/contact" 
              description="Get in touch with our team"
              internal={true}
            />
            <LinkItem 
              icon="MessageSquare" 
              title="Read Our Blog" 
              url="/blog"
              description="Latest insights on sustainable web design & SEO"
              internal={true}
            />
          </LinkSection>
        </section>
        
        {/* Services Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">Our Services</h2>
          <LinkSection>
            <LinkItem 
              icon="Monitor" 
              title="Sustainable Web Design" 
              url="/services/sustainable-web-design"
              description="Eco-friendly websites that perform" 
              internal={true}
            />
            <LinkItem 
              icon="Search" 
              title="AI-Driven SEO" 
              url="/services/ai-seo" 
              description="Intelligent search optimization strategies"
              internal={true}
            />
            <LinkItem 
              icon="PenTool" 
              title="Content Creation" 
              url="/services/digital-content-creation" 
              description="Engaging content that converts"
              internal={true}
            />
          </LinkSection>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LinkInBio;
