
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "How Sustainable Web Design Reduces Your Carbon Footprint",
      excerpt: "Learn how implementing sustainable web design practices can significantly reduce your website's environmental impact.",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "Sustainable Design",
      author: "Sarah Johnson"
    },
    {
      title: "The Business Case for Green Websites: How Sustainability Drives Conversion",
      excerpt: "Discover how environmentally-friendly websites not only help the planet but also improve user experience and conversion rates.",
      date: "April 22, 2023",
      readTime: "7 min read",
      category: "Business Impact",
      author: "Michael Chen"
    },
    {
      title: "AI-Driven SEO: Ethical Approaches for Purpose-Driven Brands",
      excerpt: "How to leverage artificial intelligence for SEO while staying true to your brand values and ethical standards.",
      date: "March 10, 2023",
      readTime: "6 min read",
      category: "SEO",
      author: "Emma Roberts"
    },
    {
      title: "Measuring Digital Sustainability: Tools and Metrics That Matter",
      excerpt: "A comprehensive guide to the tools and metrics you can use to assess and improve your website's environmental impact.",
      date: "February 28, 2023",
      readTime: "8 min read",
      category: "Analytics",
      author: "David Nguyen"
    },
    {
      title: "The Psychology of Sustainable UX: Designing for Purpose and Planet",
      excerpt: "Explore how sustainable design principles can create more meaningful connections with environmentally-conscious consumers.",
      date: "January 17, 2023",
      readTime: "5 min read",
      category: "UX Design",
      author: "Rachel Torres"
    },
    {
      title: "Green Hosting: A Comprehensive Guide for Businesses",
      excerpt: "Everything you need to know about choosing environmentally-friendly hosting solutions for your website.",
      date: "December 5, 2022",
      readTime: "6 min read",
      category: "Infrastructure",
      author: "Alex Morgan"
    }
  ];

  const categories = [
    "Sustainable Design",
    "Business Impact",
    "SEO",
    "Analytics",
    "UX Design",
    "Infrastructure",
    "Case Studies"
  ];

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.map((post, index) => (
                    <div 
                      key={index}
                      className="border border-marzipan/20 rounded-lg overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
                      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                    >
                      <div className="h-2 bg-gradient-to-r from-brandBlue to-brandRed"></div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-display font-medium mb-3 line-clamp-2">
                          <a href="#" className="hover:text-brandBlue transition-colors">{post.title}</a>
                        </h3>
                        
                        <p className="text-foreground/70 mb-4 line-clamp-3">{post.excerpt}</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1 text-sm">
                            <Tag className="h-3.5 w-3.5 text-brandBlue" />
                            <span className="text-brandBlue">{post.category}</span>
                          </div>
                          
                          <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-brandBlue hover:text-brandBlue/80 transition-colors">
                            Read More <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
                <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center gap-2">
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-marzipan/20 hover:bg-marzipan/20 transition-colors">
                      1
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent hover:bg-marzipan/20 transition-colors">
                      2
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent hover:bg-marzipan/20 transition-colors">
                      3
                    </a>
                    <span className="px-2">...</span>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent hover:bg-marzipan/20 transition-colors">
                      8
                    </a>
                  </div>
                </div>
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
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a href="#" className="flex items-center justify-between text-foreground hover:text-brandBlue transition-colors">
                          <span>{category}</span>
                          <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                            {Math.floor(Math.random() * 10) + 1}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Featured Post */}
                <div className="bg-brandBlue text-white p-6 rounded-lg">
                  <div className="text-sm text-white/70 uppercase font-medium mb-2">Featured Article</div>
                  <h3 className="text-xl font-display font-medium mb-3">
                    <a href="#" className="hover:text-white/90 transition-colors">
                      The Future of Sustainable Web Design: Trends for 2023 and Beyond
                    </a>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Explore emerging technologies and approaches that are shaping the future of eco-friendly digital experiences.
                  </p>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-white/80 transition-colors">
                    Read Featured Article <ArrowRight className="h-3.5 w-3.5" />
                  </a>
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

export default Blog;
