
import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectData } from './data';

interface RelatedProjectsProps {
  currentSlug: string;
  projects: ProjectData[];
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({ currentSlug, projects }) => {
  return (
    <section className="py-16 bg-marzipan/10">
      <div className="container-custom">
        <h2 className="text-2xl font-display font-semibold mb-8 text-center">Related Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects
            .filter(p => p.slug !== currentSlug)
            .slice(0, 3)
            .map((relatedProject, index) => (
              <Link 
                key={index}
                to={`/projects/${relatedProject.slug}`}
                className="bg-white border border-marzipan/30 rounded-lg overflow-hidden hover:shadow-md transition-all group"
              >
                <div className="p-6">
                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-brandBlue transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-2">{relatedProject.category}</p>
                  <p className="text-sm line-clamp-2">{relatedProject.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
