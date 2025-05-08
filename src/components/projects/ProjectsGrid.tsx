
import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from './data';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

interface ProjectsGridProps {
  projects: ProjectData[];
  currentPage: number;
  projectsPerPage: number;
  totalProjects: number;
  onPageChange: (page: number) => void;
}

const ProjectsGrid = ({ 
  projects, 
  currentPage, 
  projectsPerPage, 
  totalProjects, 
  onPageChange 
}: ProjectsGridProps) => {
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              index={index}
              title={project.title}
              category={project.category}
              description={project.description}
              features={project.features}
              color={project.color}
              textColor={project.textColor}
              slug={project.slug}
              websiteUrl={project.websiteUrl}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => onPageChange(currentPage - 1)} 
                      className="cursor-pointer" 
                    />
                  </PaginationItem>
                )}
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      isActive={currentPage === i + 1} 
                      onClick={() => onPageChange(i + 1)}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => onPageChange(currentPage + 1)} 
                      className="cursor-pointer" 
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
