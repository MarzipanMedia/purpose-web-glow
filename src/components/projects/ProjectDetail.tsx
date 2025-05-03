import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { projects } from './projectsData';
import MetaHead from '../MetaHead';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import VideoSection from './VideoSection';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the project by slug
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container-custom py-20">
          <h1 className="text-3xl font-display font-semibold mb-6">Project Not Found</h1>
          <p className="mb-6">The project you're looking for doesn't exist.</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-brandBlue hover:text-brandBlue/80"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title={`${project.title} - Project Case Study`}
        description={project.description}
        type="article"
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
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
        
        {/* Project Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
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
              
              {/* Sidebar */}
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
                              SEO Optimization
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
            </div>
          </div>
        </section>
        
        {/* Video Section - only rendered if project has videos */}
        {project.videos && project.videos.length > 0 && (
          <VideoSection 
            videos={project.videos} 
            title="Digital Stories" 
          />
        )}
        
        {/* Related Projects Section */}
        <section className="py-16 bg-marzipan/10">
          <div className="container-custom">
            <h2 className="text-2xl font-display font-semibold mb-8 text-center">Related Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects
                .filter(p => p.slug !== slug)
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
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
