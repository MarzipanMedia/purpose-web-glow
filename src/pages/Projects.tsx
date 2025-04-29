
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
        "image": project.imageUrl || "/marzipan-logo.webp",
        "datePublished": project.date || "2023-01-01"
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Our Projects"
        description="Explore our portfolio of purpose-driven brands we've helped shine brighter online with sustainable web design, targeted online ads and ethical SEO strategies."
        image="/marzipan-web-design-syd-min.webp"
        type="website"
        schemaData={[
          projectsSchema
        ]}
      />
      
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <Suspense fallback={
          <div className="container-custom py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brandBlue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
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
