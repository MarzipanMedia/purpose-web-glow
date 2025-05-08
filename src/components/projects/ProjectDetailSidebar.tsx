
import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectData } from './data';

interface ProjectDetailSidebarProps {
  project: ProjectData;
}

const ProjectDetailSidebar: React.FC<ProjectDetailSidebarProps> = ({ project }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-marzipan/30 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-display font-semibold mb-4">Project Details</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-foreground/70 mb-1">Client</h4>
            <p>{project.client || project.title}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground/70 mb-1">Industry</h4>
            <p>{project.category}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground/70 mb-1">Services</h4>
            <div className="flex flex-wrap gap-2">
              {project.services?.map((service, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-brandBlue/10 text-brandBlue rounded-full">
                  {service}
                </span>
              )) || (
                <>
                  <span className="text-xs px-2 py-1 bg-brandBlue/10 text-brandBlue rounded-full">
                    Sustainable Web Design
                  </span>
                  <span className="text-xs px-2 py-1 bg-brandBlue/10 text-brandBlue rounded-full">
                    SEO Optimisation
                  </span>
                </>
              )}
            </div>
          </div>
          
          {project.websiteUrl && (
            <div>
              <h4 className="text-sm font-medium text-foreground/70 mb-1">Website</h4>
              <a 
                href={project.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brandBlue hover:underline"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-white border border-marzipan/30 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-display font-semibold mb-4">Need a Similar Project?</h3>
        <p className="mb-4 text-foreground/80">
          Interested in amplifying your digital presence like we did for {project.client || project.title}? Let's discuss how we can help your organisation.
        </p>
        <Link 
          to="/contact" 
          className="w-full inline-block text-center bg-brandBlue text-white py-3 px-4 rounded-lg hover:bg-brandBlue/90 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
      
      {project.slug === "sydney-jewish-museum" && (
        <div className="bg-white border border-marzipan/30 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-display font-semibold mb-4">Digital Content Creation</h3>
          <p className="mb-4 text-foreground/80">
            Do you need compelling video content that tells your story? Our digital content creation services can help you connect with your audience.
          </p>
          <Link 
            to="/services/digital-content-creation" 
            className="w-full inline-block text-center bg-brandRed text-white py-3 px-4 rounded-lg hover:bg-brandRed/90 transition-colors"
          >
            Explore Content Creation
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailSidebar;
