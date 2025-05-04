
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Check } from 'lucide-react';
import { ProjectData } from './projectsData';

interface ProjectDetailContentProps {
  project: ProjectData;
}

const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({ project }) => {
  return (
    <div className="lg:col-span-2 space-y-8">
      <div className="bg-marzipan/10 border border-marzipan/20 rounded-lg overflow-hidden">
        <AspectRatio ratio={16/9}>
          <img 
            src={project.imageUrl || '/placeholder.svg'} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
      
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        <p className="mb-4 whitespace-pre-line">
          {project.longDescription || `This is a template for the ${project.title} case study. This section would include a detailed description of the project, including the client's needs, the challenges faced, and the solutions implemented.`}
        </p>
      </div>
      
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Our Approach</h2>
        <p className="mb-4">
          For this project, we focused on implementing sustainable digital marketing practices to maximise visibility while delivering exceptional user experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-marzipan/10 border border-marzipan/20 rounded-lg">
              <div className="mt-0.5">
                <Check className="h-5 w-5 text-brandBlue" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{feature}</h3>
                <p className="text-sm text-foreground/70">
                  {`Detail about how we implemented ${feature.toLowerCase()} for this project.`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Results & Impact</h2>
        <p>
          After implementing our sustainable design solutions, the website achieved significant improvements in performance, accessibility, and environmental impact.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailContent;
