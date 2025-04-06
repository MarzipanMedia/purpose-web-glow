
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, Clock, Tag, Search, LoaderCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  fetchWordPressPosts, 
  fetchWordPressCategories,
  formatWordPressDate,
  estimateReadingTime,
  stripHtml,
  searchWordPressPosts,
  type WordPressPost,
  type WordPressCategory
} from '../services/wordpressApi';
import { useToast } from '@/hooks/use-toast';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const { toast } = useToast();
  
  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);
  
  // Fetch posts from WordPress
  const { 
    data: postsData, 
    isLoading: postsLoading, 
    isError: postsError 
  } = useQuery({
    queryKey: ['wpPosts', currentPage, debouncedSearchQuery],
    queryFn: async () => {
      if (debouncedSearchQuery) {
        return searchWordPressPosts(debouncedSearchQuery, currentPage, 6);
      }
      return fetchWordPressPosts(currentPage, 6);
    },
    onError: () => {
      toast({
        title: "Error loading posts",
        description: "Could not load blog posts from WordPress. Please try again later.",
        variant: "destructive"
      });
    }
  });
  
  // Fetch categories from WordPress
  const { 
    data: categoriesData, 
    isLoading: categoriesLoading 
  } = useQuery({
    queryKey: ['wpCategories'],
    queryFn: fetchWordPressCategories,
    staleTime: 1000 * 60 * 60, // Cache for an hour
  });
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container-custom">
            <div className="max-w-3xl animate-fade-in">
              <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
                Our Blog
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Insights on Sustainable Digital Practices
              </h1>
              <p className="text-lg text-foreground/80">
                Explore our latest thoughts on eco-friendly web design, ethical SEO, and building purpose-driven digital experiences.
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
                {postsLoading ? (
                  <div className="flex justify-center items-center py-20">
                    <LoaderCircle className="h-12 w-12 animate-spin text-brandBlue" />
                  </div>
                ) : postsError ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">Error Loading Posts</h3>
                    <p className="text-foreground/70">
                      Please check your WordPress site configuration or try again later.
                    </p>
                  </div>
                ) : postsData?.posts.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No Posts Found</h3>
                    <p className="text-foreground/70">
                      {debouncedSearchQuery ? 
                        `No results found for "${debouncedSearchQuery}". Try another search term.` : 
                        'No posts available. Check back later for new content.'}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {postsData?.posts.map((post: WordPressPost, index: number) => {
                      const formattedDate = formatWordPressDate(post.date);
                      const readTime = estimateReadingTime(post.content.rendered);
                      const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized';
                      const excerpt = stripHtml(post.excerpt.rendered);
                      const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                      
                      return (
                        <div 
                          key={post.id}
                          className="border border-marzipan/20 rounded-lg overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
                          style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                        >
                          {featuredImage && (
                            <div className="aspect-[16/9] w-full overflow-hidden">
                              <img 
                                src={featuredImage} 
                                alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          )}
                          
                          <div className="h-2 bg-gradient-to-r from-brandBlue to-brandRed"></div>
                          <div className="p-6">
                            <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{formattedDate}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                <span>{readTime}</span>
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-display font-medium mb-3 line-clamp-2">
                              <Link 
                                to={`/blog/${post.slug}`} 
                                className="hover:text-brandBlue transition-colors"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                              />
                            </h3>
                            
                            <p className="text-foreground/70 mb-4 line-clamp-3">
                              {excerpt}
                            </p>
                            
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-1 text-sm">
                                <Tag className="h-3.5 w-3.5 text-brandBlue" />
                                <span className="text-brandBlue">{category}</span>
                              </div>
                              
                              <Link 
                                to={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-1 text-sm font-medium text-brandBlue hover:text-brandBlue/80 transition-colors"
                              >
                                Read More <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {/* Pagination */}
                {postsData && postsData.totalPages > 0 && (
                  <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.min(postsData.totalPages, 5) }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => handlePageChange(i + 1)}
                          className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                            currentPage === i + 1
                              ? 'border border-marzipan/20 bg-marzipan/20'
                              : 'border border-transparent hover:bg-marzipan/20'
                          } transition-colors`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      
                      {postsData.totalPages > 5 && (
                        <>
                          <span className="px-2">...</span>
                          <button
                            onClick={() => handlePageChange(postsData.totalPages)}
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent hover:bg-marzipan/20 transition-colors"
                          >
                            {postsData.totalPages}
                          </button>
                        </>
                      )}
                    </div>
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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-brandBlue">
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-marzipan/20 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-display font-medium mb-4">Categories</h3>
                  {categoriesLoading ? (
                    <div className="flex justify-center py-4">
                      <LoaderCircle className="h-6 w-6 animate-spin text-brandBlue" />
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {categoriesData?.map((category: WordPressCategory) => (
                        <li key={category.id}>
                          <Link 
                            to={`/blog/category/${category.slug}`}
                            className="flex items-center justify-between text-foreground hover:text-brandBlue transition-colors"
                          >
                            <span>{category.name}</span>
                            <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                              {category.count}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                {/* Featured Post */}
                <div className="bg-brandBlue text-white p-6 rounded-lg">
                  <div className="text-sm text-white/70 uppercase font-medium mb-2">Featured Article</div>
                  <h3 className="text-xl font-display font-medium mb-3">
                    <Link to="/blog/reducing-website-carbon-footprint" className="hover:text-white/90 transition-colors">
                      The Future of Sustainable Web Design: Trends for 2025 and Beyond
                    </Link>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Explore emerging technologies and approaches that are shaping the future of eco-friendly digital experiences.
                  </p>
                  <Link to="/blog/reducing-website-carbon-footprint" className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-white/80 transition-colors">
                    Read Featured Article <ArrowRight className="h-3.5 w-3.5" />
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
              Subscribe to Our Sustainable Web Insights
            </h2>
            <p className="text-foreground/80 mb-6">
              Join our newsletter to receive the latest articles, tips, and resources on sustainable digital practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-lg border border-marzipan focus:outline-none focus:ring-2 focus:ring-brandBlue/40"
              />
              <button className="bg-brandBlue text-white px-6 py-3 rounded-lg hover:bg-brandBlue/90 transition-all hover:shadow-md hover:scale-[1.02] hover:translate-y-[-2px] duration-300">
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

export default Blog;
