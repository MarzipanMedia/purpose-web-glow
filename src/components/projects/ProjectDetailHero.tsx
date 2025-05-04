
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { ProjectData } from './projectsData';

interface ProjectDetailHeroProps {
  project: ProjectData;
}

const ProjectDetailHero: React.FC<ProjectDetailHeroProps> = ({ project }) => {
  return (
    <section className={`py-20 ${project.color}`}>
      <div className="container-custom">
        <Link 
          to="/projects" 
          className={`inline-flex items-center gap-2 mb-6 ${project.textColor} hover:opacity-80`}
        >
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
        
        <div className={`max-w-3xl ${project.textColor}`}>
          <div className={`inline-block ${project.textColor === 'text-white' ? 'bg-white/20' : 'bg-brandBlue/10'} px-4 py-1 rounded-full mb-4`}>
            {project.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-lg opacity-90 mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {project.features.map((feature, i) => (
              <span 
                key={i} 
                className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full ${project.textColor === 'text-white' ? 'bg-white/20' : 'bg-brandBlue/10'}`}
              >
                <Check className="h-3.5 w-3.5" /> {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailHero;
