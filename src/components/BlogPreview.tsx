
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFetchPosts } from '@/services/wordpressService';
import { format } from 'date-fns';
import { useDefer } from '@/hooks/useDefer';

const BlogPreview: React.FC = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Only fetch posts when the section is near the viewport
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setShouldFetch(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldFetch(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading when within 200px of viewport
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Use deferred data fetching
  const { data: postsData, isLoading, error } = useFetchPosts(1, 3, shouldFetch);

  const getBackgroundColor = (index: number) => {
    const colors = ["#FEF7CD", "#F2FCE2", "#D3E4FD"];
    return colors[index % colors.length];
  };

  const formatDate = (date: string) => {
    return format(new Date(date), 'MMM d, yyyy');
  };

  const stripHtmlTags = (html: string) => {
    if (typeof DOMParser !== 'undefined') {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || '';
    }
    return html.replace(/<[^>]*>/g, '');
  };
  
  // Add visible class to elements after render using useDefer
  useDefer(() => {
    const animatedElements = document.querySelectorAll('.blog-animate');
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-visible');
      }, index * 100);
    });
  }, 100);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-brandRed/10 text-brandRed px-4 py-1 rounded-full mb-4 defer-animate blog-animate">
            Latest Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold defer-animate blog-animate">
            From The Marzipan Blog
          </h2>
          <p className="mt-4 text-foreground/80 defer-animate blog-animate">
            Raise your game online with the latest digital marketing insights and tips. We share our thoughts, ideas, and strategies for a sustainable digital presence.
          </p>
        </div>

        {isLoading && shouldFetch ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="h-[350px] animate-pulse defer-animate blog-animate">
                <div className="aspect-[16/9] bg-gray-200" />
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-brandRed/80 defer-animate blog-animate">
            <p>We couldn't load the latest blog posts. Please check our blog directly.</p>
            <Button asChild variant="outline" className="mt-4">
              <Link to="/blog" className="flex items-center gap-2">
                Visit Blog <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        ) : !shouldFetch ? (
          // Static placeholder before data loading starts
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="h-[350px] defer-animate blog-animate">
                <div className="aspect-[16/9] bg-gray-100" />
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-100 rounded w-1/4 mb-3" />
                  <div className="h-6 bg-gray-100 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-100 rounded w-full mb-4" />
                  <div className="h-4 bg-gray-100 rounded w-1/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {postsData?.posts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group border border-marzipan/30 hover:border-marzipan/70 overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] defer-animate blog-animate"
              >
                <div 
                  className="aspect-[16/9] w-full overflow-hidden" 
                  style={{ backgroundColor: getBackgroundColor(index) }}
                >
                  {post._embedded?.['wp:featuredmedia'] ? (
                    <img 
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post.title.rendered}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="400"
                      height="225"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-foreground/30 group-hover:scale-105 transition-transform duration-500">
                      <span className="text-sm font-medium">Featured Image</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-brandRed px-2 py-1 bg-brandRed/10 rounded-full">
                      {post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Blog'}
                    </span>
                    <span className="text-xs text-foreground/60">{formatDate(post.date)}</span>
                  </div>
                  <h3 
                    className="text-xl font-display font-semibold mb-3 line-clamp-2 group-hover:text-brandRed transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p className="text-foreground/80 mb-4 line-clamp-2">
                    {stripHtmlTags(post.excerpt.rendered)}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center gap-1 text-brandRed font-medium transition-all hover:gap-2"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center defer-animate blog-animate">
          <Button asChild variant="outline">
            <Link to="/blog" className="flex items-center gap-2">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
