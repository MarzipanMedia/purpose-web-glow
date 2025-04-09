
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/projects/HeroSection';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProcessSection from '../components/projects/ProcessSection';
import CTASection from '../components/projects/CTASection';
import { projects } from '../components/projects/projectsData';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <ProjectsGrid projects={projects} />
        <ProcessSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
