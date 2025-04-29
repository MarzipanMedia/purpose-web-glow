
import React, { Suspense, lazy } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/projects/HeroSection';
import ProcessSection from '../components/projects/ProcessSection';
import CTASection from '../components/projects/CTASection';
import { projects } from '../components/projects/projectsData';
import MetaHead from '../components/MetaHead';

// Lazy load the ProjectsGrid component for better initial load performance
const ProjectsGrid = lazy(() => import('../components/projects/ProjectsGrid'));

const Projects = () => {
  // Structured data for projects collection
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": `https://marzipan.com.au/projects/${project.slug}`,
        "image": project.imageUrl || "https://marzipan.com.au/marzipan-logo.webp",
        "datePublished": project.date || "2023-01-01"
      }
    }))
  };

  // Enhanced service area schema
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marzipan Digital",
    "description": "Sustainable web design and ethical SEO agency in Sydney serving purpose-driven brands across Australia",
    "url": "https://marzipan.com.au",
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney",
        "sameAs": "https://en.wikipedia.org/wiki/Sydney"
      },
      {
        "@type": "State",
        "name": "New South Wales",
        "sameAs": "https://en.wikipedia.org/wiki/New_South_Wales"
      },
      {
        "@type": "Country",
        "name": "Australia",
        "sameAs": "https://en.wikipedia.org/wiki/Australia"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Our Projects"
        description="Explore our portfolio of purpose-driven brands that achieved digital success through sustainable web design, ethical SEO, and targeted digital marketing strategies. Real results for real businesses."
        image="/marzipan-web-design-syd-min.webp"
        type="website"
        keywords="sustainable web design projects, eco-friendly website examples, digital marketing portfolio, SEO case studies, purpose-driven brands"
        schemaData={[
          projectsSchema,
          serviceAreaSchema
        ]}
      />
      
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <Suspense fallback={
          <div className="container-custom py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brandBlue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" aria-label="Loading projects"></div>
            <p className="mt-4 text-foreground/70">Loading projects...</p>
          </div>
        }>
          <ProjectsGrid projects={projects} />
        </Suspense>
        
        <ProcessSection />
        <CTASection 
          title="Ready to maximise your digital impact?" 
          subtitle="Let's create something sustainable together."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
