
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectNotFound: React.FC = () => {
  return (
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
  );
};

export default ProjectNotFound;
