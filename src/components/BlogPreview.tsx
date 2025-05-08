
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFetchPosts } from '@/services/wordpressService';
import { format } from 'date-fns';
import { Skeleton } from "@/components/ui/skeleton";

const BlogPreview: React.FC = () => {
  // Changed to page 1 to get the most recent posts
  const { data: postsData, isLoading, error } = useFetchPosts(1, 3);

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

  // Service links mapping for categories
  const categoryServiceLinks = {
    'SEO': '/services/ai-seo',
    'Web Design': '/services/sustainable-web-design',
    'Digital Marketing': '/services/digital-marketing',
    'Content': '/services/content-creation',
    'Blog': '/blog',
    'Sustainability': '/services/sustainable-web-design',
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
            From Our WordPress Blog
          </h2>
          <p className="mt-4 text-foreground/80 opacity-0 animate-fade-in"
             style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Raise your game online with the latest <Link to="/services/ai-seo" className="text-brandRed hover:underline">digital marketing</Link> insights and tips. 
            We share our thoughts on <Link to="/services/sustainable-web-design" className="text-brandRed hover:underline">sustainable web design</Link> and 
            strategies for a powerful digital presence.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="h-[350px]">
                <div className="aspect-[16/9] w-full">
                  <Skeleton className="h-full w-full" />
                </div>
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-1/4 mb-3" />
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-1/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center p-8 border border-marzipan/30 rounded-lg">
            <p className="text-foreground/80 mb-4">We couldn't load the latest blog posts right now.</p>
            <Link to="/blog" className="btn-secondary flex items-center gap-2 mx-auto w-fit">
              Visit Our Blog <ArrowRight className="h-4 w-4" />
            </Link>
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
                      fetchpriority={index === 0 ? "high" : "low"}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-foreground/30 group-hover:scale-105 transition-transform duration-500">
                      <span className="text-sm font-medium">Marzipan Blog</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    {post._embedded?.['wp:term']?.[0]?.[0]?.name && (
                      <Link 
                        to={categoryServiceLinks[post._embedded['wp:term'][0][0].name as keyof typeof categoryServiceLinks] || '/blog'}
                        className="text-xs font-medium text-brandRed px-2 py-1 bg-brandRed/10 rounded-full hover:bg-brandRed/20 transition-colors"
                      >
                        {post._embedded['wp:term'][0][0].name}
                      </Link>
                    )}
                    <span className="text-xs text-foreground/60">{formatDate(post.date)}</span>
                  </div>
                  <Link to={post.link} target="_blank" rel="noopener noreferrer">
                    <h3 
                      className="text-xl font-display font-semibold mb-3 line-clamp-2 group-hover:text-brandRed transition-colors"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </Link>
                  <p className="text-foreground/80 mb-4 line-clamp-2">
                    {stripHtmlTags(post.excerpt.rendered)}
                  </p>
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brandRed font-medium transition-all hover:gap-2"
                  >
                    Read Article <ArrowRight className="h-4 w-4 transition-all" />
                  </a>
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
