
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { useQuery } from '@tanstack/react-query';
import { 
  fetchWordPressPosts,
  formatWordPressDate,
  estimateReadingTime,
  stripHtml,
  type WordPressPost
} from '../services/wordpressApi';

const BlogPreview: React.FC = () => {
  // Fetch latest posts from WordPress
  const { data, isLoading, isError } = useQuery({
    queryKey: ['wpFeaturedPosts'],
    queryFn: () => fetchWordPressPosts(1, 3),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  // Fallback posts if API fails or while loading
  const fallbackPosts = [
    {
      id: 1,
      title: { rendered: "Reducing Your Website's Carbon Footprint: A Practical Guide" },
      excerpt: { rendered: "Learn effective strategies to minimize your website's environmental impact without sacrificing user experience or performance." },
      slug: "reducing-website-carbon-footprint",
      date: "2025-04-02T10:00:00",
      content: { rendered: "" },
      color: "#FEF7CD" // Soft yellow
    },
    {
      id: 2,
      title: { rendered: "Why Green Hosting Is the Future of Web Development" },
      excerpt: { rendered: "Discover how eco-friendly hosting solutions are transforming the digital landscape and why they matter for your brand." },
      slug: "green-hosting-future",
      date: "2025-03-28T14:30:00",
      content: { rendered: "" },
      color: "#F2FCE2" // Soft green
    },
    {
      id: 3,
      title: { rendered: "The Business Case for Sustainable Web Design" },
      excerpt: { rendered: "Explore how investing in sustainable web practices can lead to better performance, increased trust, and improved ROI." },
      slug: "business-case-sustainable-web",
      date: "2025-03-15T09:15:00",
      content: { rendered: "" },
      color: "#D3E4FD" // Soft blue
    }
  ];

  // Use real posts if available, otherwise use fallback
  const postsToDisplay = (!isLoading && !isError && data?.posts?.length) 
    ? data.posts
    : fallbackPosts;

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
            From Our Blog
          </h2>
          <p className="mt-4 text-foreground/80 opacity-0 animate-fade-in"
             style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Thoughts, ideas, and strategies for sustainable digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {postsToDisplay.map((post: WordPressPost | any, index: number) => {
            const formattedDate = formatWordPressDate(post.date);
            const readTime = post.content?.rendered ? estimateReadingTime(post.content.rendered) : "3 min read";
            const excerpt = post.excerpt?.rendered ? stripHtml(post.excerpt.rendered) : post.excerpt;
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            
            return (
              <Card 
                key={post.id} 
                className="group border border-marzipan/30 hover:border-marzipan/70 overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div 
                  className="aspect-[16/9] w-full overflow-hidden" 
                  style={{ backgroundColor: (post as any).color || "#f5f5f5" }}
                >
                  {featuredImage ? (
                    <img 
                      src={featuredImage} 
                      alt={post.title.rendered}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                      {post._embedded?.['wp:term']?.[0]?.[0]?.name || "Sustainability"}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-foreground/60">
                      <Calendar className="h-3 w-3" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 line-clamp-2 group-hover:text-brandRed transition-colors">
                    <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </h3>
                  <p className="text-foreground/80 mb-4 line-clamp-2">
                    {excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-foreground/60">
                      <Clock className="h-3 w-3" />
                      <span>{readTime}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center gap-1 text-brandRed font-medium transition-all hover:gap-2"
                    >
                      Read Article <ArrowRight className="h-4 w-4 transition-all" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center opacity-0 animate-fade-in" 
             style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          <Button asChild variant="outline" className="mb-6">
            <Link to="/blog" className="flex items-center gap-2">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
