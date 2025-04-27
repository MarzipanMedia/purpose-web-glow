import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFetchPosts } from '@/services/wordpressService';
import { format } from 'date-fns';

const BlogPreview: React.FC = () => {
  const { data: postsData, isLoading, error } = useFetchPosts(3);

  const getBackgroundColor = (index: number) => {
    const colors = ["#FEF7CD", "#F2FCE2", "#D3E4FD"];
    return colors[index % colors.length];
  };

  const formatDate = (date: string) => {
    return format(new Date(date), 'MMM d, yyyy');
  };

  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-brandRed/10 text-brandRed px-4 py-1 rounded-full mb-4 opacity-0 animate-fade-in" 
               style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Latest Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            From The Marzipan Blog
          </h2>
          <p className="mt-4 text-foreground/80 opacity-0 animate-fade-in"
             style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Raise your game online with the latest digital marketing insights and tips. We share our thoughts, ideas, and strategies for a sustainable digital presence.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="h-[350px] animate-pulse">
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
          <div className="text-center text-red-500">
            Unable to load blog posts. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {postsData?.posts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group border border-marzipan/30 hover:border-marzipan/70 overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "forwards" }}
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
                      loading={index === 0 ? "eager" : "lazy"}
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

        <div className="mt-10 flex justify-center opacity-0 animate-fade-in" 
             style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
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
