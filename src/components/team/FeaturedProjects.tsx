
import React, { useState } from 'react';
import ProjectsGrid from '../projects/ProjectsGrid';
import { projects } from '../projects/data';
import { ProjectData } from '../projects/data';

const FeaturedProjects = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // Show 3 projects per page
  
  // Use a subset of projects from the main projects data
  const featuredProjects = projects.slice(0, 2);
  
  // Calculate current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = featuredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="py-20 bg-marzipan/10 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-8 text-center">Featured Projects</h2>
          <ProjectsGrid 
            projects={currentProjects} 
            currentPage={currentPage}
            projectsPerPage={projectsPerPage}
            totalProjects={featuredProjects.length}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
