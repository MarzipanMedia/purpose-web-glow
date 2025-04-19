
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  color: string;
}

const BlogPreview: React.FC = () => {
  const featuredPosts: BlogPost[] = [
    {
      id: 1,
      title: "Reducing Your Website's Carbon Footprint: A Practical Guide",
      excerpt: "Learn effective strategies to minimize your website's environmental impact without sacrificing user experience or performance.",
      category: "Sustainability",
      date: "Apr 2, 2025",
      slug: "reducing-website-carbon-footprint",
      color: "#FEF7CD" // Soft yellow
    },
    {
      id: 2,
      title: "Why Green Hosting Is the Future of Web Development",
      excerpt: "Discover how eco-friendly hosting solutions are transforming the digital landscape and why they matter for your brand.",
      category: "Green Technology",
      date: "Mar 28, 2025",
      slug: "green-hosting-future",
      color: "#F2FCE2" // Soft green
    },
    {
      id: 3,
      title: "The Business Case for Sustainable Web Design",
      excerpt: "Explore how investing in sustainable web practices can lead to better performance, increased trust, and improved ROI.",
      category: "Business",
      date: "Mar 15, 2025",
      slug: "business-case-sustainable-web",
      color: "#D3E4FD" // Soft blue
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group border border-marzipan/30 hover:border-marzipan/70 overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div 
                className="aspect-[16/9] w-full overflow-hidden" 
                style={{ backgroundColor: post.color }}
              >
                <div className="w-full h-full flex items-center justify-center text-foreground/30 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-sm font-medium">Featured Image</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium text-brandRed px-2 py-1 bg-brandRed/10 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-foreground/60">{post.date}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 line-clamp-2 group-hover:text-brandRed transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/80 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-1 text-brandRed font-medium transition-all hover:gap-2"
                >
                  Read Article <ArrowRight className="h-4 w-4 transition-all" />
                </Link>
              </CardContent>
            </Card>
          ))}
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
