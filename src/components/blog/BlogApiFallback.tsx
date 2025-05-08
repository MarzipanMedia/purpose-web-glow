
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogApiFallbackProps {
  message?: string;
}

const BlogApiFallback: React.FC<BlogApiFallbackProps> = ({ 
  message = "We couldn't load the latest blog posts right now. Please check back later."
}) => {
  return (
    <div className="w-full py-12 bg-marzipan/10 rounded-lg flex flex-col items-center justify-center text-center px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground/50 mb-4"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
      
      <p className="text-lg mb-6 text-foreground/70 max-w-md">
        {message}
      </p>
      
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 bg-brandBlue text-white px-6 py-2 rounded-lg hover:bg-brandBlue/90 transition-colors"
      >
        Visit Our Blog <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default BlogApiFallback;
