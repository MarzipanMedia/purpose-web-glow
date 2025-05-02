
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/projects/HeroSection';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProcessSection from '../components/projects/ProcessSection';
import CTASection from '../components/projects/CTASection';
import { projects } from '../components/projects/projectsData';
import MetaHead from '../components/MetaHead';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Our Projects"
        description="Explore our portfolio of purpose-driven brands we've helped thrive online with sustainable web design and ethical SEO strategies."
      />
      
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <ProjectsGrid projects={projects} />
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
