import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, Clock, Tag, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFetchPosts, useFetchCategories } from '../services/wordpressService';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useStaticAnimation } from '../hooks/useAnimations';

const BlogWithWordPress = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, error } = useFetchPosts(currentPage, 6);
  const { data: categories, isLoading: categoriesLoading } = useFetchCategories();

  // Use static animation helper instead of glow effect
  const { isLoaded } = useStaticAnimation();

  const extractPlainText = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Calculate estimated read time (roughly 200 words per minute)
  const calculateReadTime = (content: string) => {
    const plainText = extractPlainText(content);
    const wordCount = plainText.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    return `${readTime} min read`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Enhanced Hero Section with simplified background */}
        <section 
          className="py-16 bg-gradient-subtle relative overflow-hidden"
        >
          {/* Static glow effect instead of mouse-following */}
          <div 
            className="absolute pointer-events-none bg-gradient-radial from-brandBlue/15 to-transparent rounded-full w-[500px] h-[500px] -z-0 blur-3xl opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 border-4 border-brandBlue/5 rounded-full opacity-50" aria-hidden="true"></div>
          <div className="absolute -bottom-24 -left-16 w-48 h-48 border-4 border-brandBlue/5 rounded-full opacity-50" aria-hidden="true"></div>
          
          <div className="container-custom">
            <div className="max-w-3xl animate-fade-in">
              <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
                WordPress Blog
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white">
                Insights from Our WordPress Site
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl">
                Posts directly from our WordPress site via the REST API. Live content that stays in sync with our main site.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Blog Posts */}
              <div className="lg:col-span-2">
                {isError && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      {error instanceof Error 
                        ? `Failed to load posts: ${error.message}` 
                        : 'Failed to load posts. Please try again later.'}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {isLoading ? (
                    // Skeleton loaders while loading
                    Array(6).fill(0).map((_, index) => (
                      <div key={index} className="border border-marzipan/20 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-2 bg-gradient-to-r from-brandBlue to-brandRed"></div>
                        <div className="p-6">
                          <div className="flex gap-4 mb-3">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                          <Skeleton className="h-6 w-full mb-2" />
                          <Skeleton className="h-6 w-3/4 mb-4" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-2/3 mb-4" />
                          <div className="flex justify-between items-center">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : data?.posts && data.posts.length > 0 ? (
                    data.posts.map((post, index) => (
                      <div 
                        key={post.id}
                        className="border border-marzipan/20 rounded-lg overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
                        style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                      >
                        <div className="h-2 bg-gradient-to-r from-brandBlue to-brandRed"></div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{calculateReadTime(post.excerpt.rendered)}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-display font-medium mb-3 line-clamp-2">
                            <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:text-brandBlue transition-colors">
                              {post.title.rendered}
                            </a>
                          </h3>
                          
                          <div className="text-foreground/70 mb-4 line-clamp-3" 
                               dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 text-sm">
                              <Tag className="h-3.5 w-3.5 text-brandBlue" />
                              <span className="text-brandBlue">
                                {post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Article'}
                              </span>
                            </div>
                            
                            <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-brandBlue hover:text-brandBlue/80 transition-colors">
                              Read More <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-12">
                      <p className="text-foreground/70 mb-4">No posts found from the WordPress API.</p>
                      <Link to="/blog" className="btn-secondary">
                        View Our Static Blog
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Pagination */}
                {data && data.totalPages > 1 && (
                  <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                    <Pagination>
                      <PaginationContent>
                        {[...Array(Math.min(data.totalPages, 5))].map((_, i) => (
                          <PaginationItem key={i}>
                            <PaginationLink
                              isActive={currentPage === i + 1}
                              onClick={() => setCurrentPage(i + 1)}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        
                        {data.totalPages > 5 && (
                          <>
                            <PaginationItem>
                              <span className="px-2">...</span>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink onClick={() => setCurrentPage(data.totalPages)}>
                                {data.totalPages}
                              </PaginationLink>
                            </PaginationItem>
                          </>
                        )}
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                {/* Search */}
                <div className="bg-marzipan/20 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-display font-medium mb-4">Search</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search articles..."
                      className="w-full py-2 px-4 border border-marzipan/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandBlue/40"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-brandBlue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-marzipan/20 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-display font-medium mb-4">Categories</h3>
                  {categoriesLoading ? (
                    <ul className="space-y-2">
                      {Array(7).fill(0).map((_, i) => (
                        <li key={i} className="flex justify-between">
                          <Skeleton className="h-5 w-24" />
                          <Skeleton className="h-5 w-5 rounded-full" />
                        </li>
                      ))}
                    </ul>
                  ) : categories && categories.length > 0 ? (
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category.id}>
                          <a href="#" className="flex items-center justify-between text-foreground hover:text-brandBlue transition-colors">
                            <span>{category.name}</span>
                            <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                              {category.count}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-foreground/70">No categories found.</p>
                  )}
                </div>
                
                {/* Call to Action - replacing WordPress Info */}
                <div className="bg-brandBlue text-white p-6 rounded-lg">
                  <div className="text-sm text-white/70 uppercase font-medium mb-2">Ready to grow your online presence?</div>
                  <h3 className="text-xl font-display font-medium mb-3">
                    Get a Sustainable Website Audit
                  </h3>
                  <p className="text-white/80 mb-4">
                    Discover how we can help improve your website's performance, SEO, and carbon footprint with our comprehensive website audit.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-1 px-4 py-2 bg-white text-brandBlue rounded-lg hover:bg-white/90 transition-colors font-medium">
                    Get Started <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-marzipan/30">
          <div className="container-custom max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Subscribe to Our WordPress Blog
            </h2>
            <p className="text-foreground/80 mb-6">
              Stay updated with our latest articles and news delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-lg border border-marzipan focus:outline-none focus:ring-2 focus:ring-brandBlue/40"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <div className="text-xs text-foreground/60 mt-4">
              We respect your privacy and will never share your information.
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogWithWordPress;
