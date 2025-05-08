
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { projects } from './data';
import MetaHead from '../MetaHead';
import VideoSection from './VideoSection';
import ProjectDetailHero from './ProjectDetailHero';
import ProjectDetailContent from './ProjectDetailContent';
import ProjectDetailSidebar from './ProjectDetailSidebar';
import RelatedProjects from './RelatedProjects';
import ProjectNotFound from './ProjectNotFound';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the project by slug
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <ProjectNotFound />
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
        <ProjectDetailHero project={project} />
        
        {/* Project Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <ProjectDetailContent project={project} />
              
              {/* Sidebar */}
              <ProjectDetailSidebar project={project} />
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
        <RelatedProjects currentSlug={slug} projects={projects} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
