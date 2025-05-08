
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/projects/HeroSection';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProcessSection from '../components/projects/ProcessSection';
import CTASection from '../components/projects/CTASection';
import { projects } from '../components/projects/data';
import MetaHead from '../components/MetaHead';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4; // Show 4 projects per page (2x2 grid)
  
  // Calculate current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of projects grid smoothly when changing page
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };
  
  // Reset to page 1 if URL changes
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Our Projects | Sustainable Web Design Case Studies"
        description="Explore our portfolio of purpose-driven brands we've helped thrive online with sustainable web design, ethical SEO strategies, and digital marketing."
        type="website"
      />
      
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <ProjectsGrid 
          projects={currentProjects} 
          currentPage={currentPage}
          projectsPerPage={projectsPerPage}
          totalProjects={projects.length}
          onPageChange={handlePageChange}
        />
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
