
import React from 'react';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  date?: string;
  isNew?: boolean;
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
  imageUrl,
  isNew = false
}: ProjectCardProps) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden animate-fade-in group transition-all duration-300 hover:shadow-lg ${color}`}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      {/* Image section if available */}
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy" 
          />
          {isNew && (
            <div className="absolute top-3 right-3 bg-brandRed text-white text-xs px-3 py-1 rounded-full flex items-center shadow-md">
              <Star className="h-3 w-3 mr-1" /> New Project
            </div>
          )}
        </div>
      )}
      
      <div className={`p-8 ${textColor} transition-all duration-300`}>
        <div className="mb-2 text-sm font-medium opacity-80">{category}</div>
        <h3 className="text-2xl font-display font-semibold mb-4 transition-transform group-hover:translate-x-1">{title}</h3>
        <p className="mb-6 opacity-90">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Sustainability Features:</h4>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, i) => (
              <span 
                key={i} 
                className={`text-xs px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 ${textColor === 'text-white' ? 'bg-white/20' : 'bg-brandBlue/10'}`}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            to={`/projects/${slug}`}
            className={`inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 ${textColor === 'text-white' ? 'hover:text-white/80' : 'hover:text-foreground/80'} group-hover:translate-x-1`}
            aria-label={`View case study for ${title}`}
          >
            View Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          {websiteUrl && (
            <a 
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 ${textColor === 'text-white' ? 'hover:text-white/80' : 'hover:text-foreground/80'} group-hover:translate-x-1`}
              aria-label={`Visit ${title} website`}
            >
              Visit Website <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
