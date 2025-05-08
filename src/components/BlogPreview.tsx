
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useFetchPosts } from '../services/wordpressService';
import BlogApiFallback from './blog/BlogApiFallback';

// Static fallback posts in case API fails
const fallbackPosts = [
  {
    title: "Sustainable Web Design Practices for 2025",
    excerpt: "Learn how to create environmentally-friendly websites that don't sacrifice performance or user experience.",
    date: "2025-04-15",
    slug: "sustainable-web-design-2025"
  },
  {
    title: "The Future of AI in Digital Marketing",
    excerpt: "Discover how artificial intelligence is transforming the digital marketing landscape and how your brand can benefit.",
    date: "2025-04-10",
    slug: "ai-digital-marketing-future"
  },
  {
    title: "Building Accessible Websites - A Complete Guide",
    excerpt: "A comprehensive approach to creating websites that work for everyone, regardless of ability or disability.",
    date: "2025-04-05",
    slug: "accessible-websites-guide"
  }
];

const BlogPreview = () => {
  // Use a custom hook for fetching WordPress posts
  const { data, isLoading, isError } = useFetchPosts(1, 3);
  const [hasApiTimedOut, setHasApiTimedOut] = useState(false);
  
  // Set a timeout for API calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        setHasApiTimedOut(true);
      }
    }, 3000); // 3 seconds timeout
    
    return () => clearTimeout(timeoutId);
  }, [isLoading]);
  
  // Format date in a readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  // Extract plain text from HTML
  const extractPlainText = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };
  
  // If we have an error or timeout, use the fallback posts
  const shouldUseFallback = isError || hasApiTimedOut;
  const postsToDisplay = shouldUseFallback ? fallbackPosts : data?.posts;
  
  return (
    <section className="py-20 bg-marzipan/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
            Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold">
            Digital Insights
          </h2>
          <p className="mt-4 text-foreground/80">
            Explore our latest thoughts on sustainable web design, ethical SEO, and creating 
            purpose-driven digital experiences.
          </p>
        </div>

        {isLoading && !hasApiTimedOut ? (
          // Simple loading state that won't affect LCP
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white border border-marzipan/30 rounded-lg animate-pulse">
                <div className="h-48 bg-marzipan/20 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="h-4 bg-marzipan/30 rounded w-1/3 mb-3"></div>
                  <div className="h-6 bg-marzipan/30 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-marzipan/30 rounded w-full mb-2"></div>
                  <div className="h-4 bg-marzipan/30 rounded w-2/3 mb-4"></div>
                  <div className="h-8 bg-marzipan/30 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : shouldUseFallback ? (
          // If error or timeout, first try to use fallback posts
          postsToDisplay ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {postsToDisplay.map((post, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-marzipan/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-foreground/60 mb-3">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-xl font-display font-medium mb-3">
                      <Link to={`/blog/${post.slug}`} className="hover:text-brandBlue transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      {typeof post.excerpt === 'string' ? 
                        extractPlainText(post.excerpt) : post.excerpt
                      }
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center gap-1 text-brandRed font-medium transition-all hover:gap-2"
                    >
                      Read Post <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // If everything fails, use the dedicated fallback component
            <BlogApiFallback />
          )
        ) : (
          // Display actual posts from the API if available
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {postsToDisplay && postsToDisplay.map((post, index) => (
              <div 
                key={post.id || index} 
                className="bg-white border border-marzipan/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
              >
                {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url} 
                      alt={post.title.rendered || "Blog post"} 
                      className="w-full h-48 object-cover"
                      loading="lazy" // Use lazy loading for non-critical images
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-foreground/60 mb-3">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-brandBlue transition-colors"
                    >
                      {post.title.rendered}
                    </a>
                  </h3>
                  <div 
                    className="text-foreground/70 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                  />
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-brandRed font-medium transition-all hover:gap-2"
                  >
                    Read Post <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-10">
          <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-marzipan/80 border border-marzipan/50 text-foreground font-medium hover:bg-marzipan transition-all">
            View All Posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
