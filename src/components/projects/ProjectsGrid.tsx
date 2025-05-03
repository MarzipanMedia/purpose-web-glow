
import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from './projectsData';

interface ProjectsGridProps {
  projects: ProjectData[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
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
      </div>
    </section>
  );
};

export default ProjectsGrid;
