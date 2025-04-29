
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from './projectsData';
import { Search, Filter, LayoutGrid, LayoutList, Star } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";

interface ProjectsGridProps {
  projects: ProjectData[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(projects);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const projectsPerPage = 4;
  
  // Get unique categories from projects
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  // Handle filtering and searching
  useEffect(() => {
    let result = projects;
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(project => project.category === selectedCategory);
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) || 
        project.category.toLowerCase().includes(query) ||
        project.features.some(feature => feature.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchQuery, projects]);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Generate page numbers array
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Filters and search bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center bg-muted/20 p-1 rounded-lg">
              <Filter className="h-4 w-4 text-foreground/70 mr-2 ml-2" />
              <ToggleGroup type="single" value={selectedCategory} onValueChange={(value) => value && setSelectedCategory(value)}>
                {categories.map(category => (
                  <ToggleGroupItem 
                    key={category} 
                    value={category} 
                    size="sm"
                    className="text-sm font-medium"
                    aria-label={`Filter by ${category}`}
                  >
                    {category}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
          
          <div className="flex flex-1 md:flex-none justify-end items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/70" />
              <Input 
                type="search" 
                placeholder="Search projects..." 
                className="pl-8 h-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center bg-muted/20 p-1 rounded-lg">
              <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value as 'grid' | 'list')}>
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <LayoutGrid className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List view">
                  <LayoutList className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
        
        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/70">No projects found matching your criteria.</p>
          </div>
        )}
        
        {/* Projects display (grid or list view) */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {currentProjects.map((project, index) => (
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
                date={project.date}
                isNew={project.date && new Date(project.date) > new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 mb-8">
            {currentProjects.map((project, index) => (
              <div 
                key={index}
                className={`flex flex-col sm:flex-row rounded-lg overflow-hidden animate-fade-in ${project.color} ${project.textColor}`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {project.imageUrl && (
                  <div className="sm:w-1/3 h-48 sm:h-auto relative">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {project.date && new Date(project.date) > new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) && (
                      <div className="absolute top-2 right-2 bg-brandRed text-white text-xs px-2 py-1 rounded-full flex items-center">
                        <Star className="h-3 w-3 mr-1" /> New
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6 sm:p-8 sm:flex-1 flex flex-col">
                  <div className="mb-2 text-sm font-medium opacity-80">{project.category}</div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{project.title}</h3>
                  <p className="mb-4 opacity-90">{project.description}</p>
                  
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <span 
                          key={i} 
                          className={`text-xs px-3 py-1 rounded-full ${project.textColor === 'text-white' ? 'bg-white/20' : 'bg-brandBlue/10'}`}
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <span 
                              className={`text-xs px-3 py-1 rounded-full cursor-pointer ${project.textColor === 'text-white' ? 'bg-white/20' : 'bg-brandBlue/10'}`}
                            >
                              +{project.features.length - 3} more
                            </span>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="flex flex-wrap gap-2">
                              {project.features.slice(3).map((feature, i) => (
                                <span 
                                  key={i} 
                                  className="text-xs px-3 py-1 rounded-full bg-brandBlue/10"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <a 
                      href={`/projects/${project.slug}`}
                      className={`inline-flex items-center gap-1 text-sm font-medium ${project.textColor === 'text-white' ? 'hover:text-white/80' : 'hover:text-foreground/80'} transition-colors`}
                    >
                      View Case Study 
                    </a>
                    {project.websiteUrl && (
                      <a 
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-sm font-medium ${project.textColor === 'text-white' ? 'hover:text-white/80' : 'hover:text-foreground/80'} transition-colors`}
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  aria-disabled={currentPage === 1}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>

              {pageNumbers.map(number => (
                <PaginationItem key={number}>
                  <PaginationLink
                    onClick={() => setCurrentPage(number)}
                    isActive={currentPage === number}
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  aria-disabled={currentPage === totalPages}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
