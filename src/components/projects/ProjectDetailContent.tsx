
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Check } from 'lucide-react';
import { ProjectData } from './projectsData';

interface ProjectDetailContentProps {
  project: ProjectData;
}

const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({ project }) => {
  // Function to process and render the long description with proper HTML formatting
  const renderDescription = () => {
    if (!project.longDescription) {
      return (
        <p className="mb-4">
          {`This is a template for the ${project.title} case study. This section would include a detailed description of the project, including the client's needs, the challenges faced, and the solutions implemented.`}
        </p>
      );
    }
    
    // Process the longDescription text with enhanced formatting
    let formattedText = project.longDescription;
    
    // Replace Markdown headers with proper HTML heading elements
    formattedText = formattedText
      // Replace ## Headers with proper styling
      .replace(/## (.*?)(?:\n|$)/g, '<h2 class="text-2xl font-display font-semibold mb-4">$1</h2>')
      // Replace ### Headers with proper styling
      .replace(/### (.*?)(?:\n|$)/g, '<h3 class="text-xl font-display font-semibold mb-3">$1</h3>');
    
    // Process bold text (both ** and __ formats)
    formattedText = formattedText
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.*?)__/g, '<strong>$1</strong>');
    
    // Split text into paragraphs
    const paragraphs = formattedText.split('\n\n');
    
    // Process each paragraph, handling bullet points
    const processedParagraphs = paragraphs.map(paragraph => {
      // Skip already processed headers
      if (paragraph.startsWith('<h')) {
        return paragraph;
      }
      
      // Check if this paragraph contains bullet points (lines starting with "- ")
      if (paragraph.trim().split('\n').some(line => line.trim().startsWith('- '))) {
        // This is a list - parse it properly
        const listItems = paragraph.trim().split('\n')
          .map(line => {
            // Handle bullet points
            if (line.trim().startsWith('- ')) {
              return `<li class="ml-6 mb-2">${line.trim().substring(2)}</li>`;
            }
            // Non-bullet lines within a list paragraph
            return `<p class="mb-2">${line}</p>`;
          })
          .join('');
          
        // If we have any list items, wrap them in a ul
        if (listItems.includes('<li')) {
          return `<ul class="list-disc mb-6">${listItems}</ul>`;
        }
        return `<div class="mb-4">${listItems}</div>`;
      }
      
      // Regular paragraphs
      return `<p class="mb-4">${paragraph}</p>`;
    });
    
    return <div className="prose prose-gray dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: processedParagraphs.join('') }} />;
  };

  // Check if the longDescription already contains a "## Project Overview" heading
  const hasProjectOverviewHeading = project.longDescription && 
    project.longDescription.includes('## Project Overview');

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
        {/* Only show the Project Overview heading if it's not already in the content */}
        {!hasProjectOverviewHeading && (
          <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        )}
        {/* Use the rendering function for the description */}
        {project.longDescription ? (
          renderDescription()
        ) : (
          <p className="mb-4 whitespace-pre-line">
            {`This is a template for the ${project.title} case study. This section would include a detailed description of the project, including the client's needs, the challenges faced, and the solutions implemented.`}
          </p>
        )}
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
