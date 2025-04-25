import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { projects } from './projects/projectsData';

const RecentProjects = () => {
  // Randomly select 3 projects
  const getRandomProjects = () => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const featuredProjects = getRandomProjects();

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold">
            Recent Campaigns & Creations
          </h2>
          <p className="mt-4 text-foreground/80">
            By combining ethical AI, sustainable web design, and performance-driven SEO strategies, we create websites that don’t just grow traffic—they grow impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.slug} 
              className="group bg-white border border-marzipan/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in hover:translate-y-[-4px]"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={project.imageUrl || `/placeholder.svg`} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <div className="text-sm text-brandBlue mb-2">{project.category}</div>
                <h3 className="text-xl font-display font-semibold mb-3 transition-colors group-hover:text-brandBlue">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Link 
                  to={`/projects/${project.slug}`} 
                  className="inline-flex items-center gap-1 text-brandRed font-medium transition-all hover:gap-2"
                >
                  View Project <ArrowRight className="h-4 w-4 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-marzipan/80 border border-marzipan/50 text-foreground font-medium hover:bg-marzipan transition-all hover:shadow-md animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
