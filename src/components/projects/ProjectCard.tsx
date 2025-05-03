
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  features: string[];
  color: string;
  textColor: string;
  index: number;
  slug: string;
  websiteUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({ 
  title, 
  category, 
  description, 
  features, 
  color, 
  textColor, 
  index, 
  slug,
  websiteUrl,
  imageUrl
}: ProjectCardProps) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden animate-fade-in shadow-sm hover:shadow-md transition-all ${color}`}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      {imageUrl && (
        <Link to={`/projects/${slug}`}>
          <AspectRatio ratio={16/9}>
            <img 
              src={imageUrl || '/placeholder.svg'} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </AspectRatio>
        </Link>
      )}
      
      <div className={`p-8 ${textColor}`}>
        <div className="mb-2 text-sm font-medium opacity-80">{category}</div>
        <h3 className="text-2xl font-display font-semibold mb-4">{title}</h3>
        <p className="mb-6 opacity-90">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Sustainability Features:</h4>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, i) => (
              <span 
                key={i} 
                className={`text-xs px-3 py-1 rounded-full ${textColor === 'text-white' ? 'bg-white/20' : 'bg-brandBlue/10'}`}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            to={`/projects/${slug}`}
            className={`inline-flex items-center gap-1 text-sm font-medium ${textColor === 'text-white' ? 'hover:text-white/80' : 'hover:text-foreground/80'}`}
          >
            View Case Study <ArrowRight className="h-4 w-4" />
          </Link>
          {websiteUrl && (
            <a 
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-sm font-medium ${textColor === 'text-white' ? 'hover:text-white/80' : 'hover:text-foreground/80'}`}
            >
              Visit Website <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
