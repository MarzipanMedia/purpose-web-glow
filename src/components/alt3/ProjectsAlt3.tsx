
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Featured projects - using static data for initial render
const projects = [
  {
    title: "Willow Women's Clinic",
    category: "Web Design",
    image: "/willow-womens-sustainable-website.webp",
    slug: "willow-womens-clinic"
  },
  {
    title: "Popology",
    category: "SEO & Content",
    image: "/popology-sustainable-web.webp",
    slug: "popology"
  },
  {
    title: "Toasty",
    category: "Digital Marketing",
    image: "/toasty-seo-support.png",
    slug: "toasty"
  }
];

const ProjectsAlt3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Simple intersection observer for animation
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.fade-in');
            elements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, i * 100); // Staggered animation
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-alt3 bg-gray-50 py-16">
      <div className="container-alt3">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Recent <span className="gradient-text">Campaigns</span>
          </h2>
          <p className="text-lg">
            Explore some of our recent work helping purpose-driven brands make an impact online.
          </p>
        </div>
        
        <div className="projects-grid mb-10">
          {projects.map((project, index) => (
            <Link to={`/projects/${project.slug}`} key={index} className="fade-in">
              <div className="card-alt3 h-full flex flex-col">
                <div className="img-container mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy" 
                    width="400" 
                    height="300"
                    style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                  />
                </div>
                <div className="mt-auto">
                  <span className="text-sm text-brandRed font-medium">{project.category}</span>
                  <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 hover:text-brandRed transition-colors">
                    View project <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/projects" className="btn-primary-alt3">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsAlt3;
