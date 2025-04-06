
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, Tag, ArrowLeft, Share2, LoaderCircle } from 'lucide-react';
import { fetchPostBySlug, formatWordPressDate, estimateReadingTime } from '../services/wordpressApi';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const { data: post, isLoading, isError } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => fetchPostBySlug(slug || ''),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <LoaderCircle className="h-12 w-12 animate-spin text-brandBlue" />
        </main>
        <Footer />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16">
          <div className="container-custom">
            <div className="bg-rose-50 border border-rose-200 p-6 rounded-lg text-center max-w-2xl mx-auto">
              <h1 className="text-2xl font-display font-semibold mb-4">
                Post Not Found
              </h1>
              <p className="mb-6">
                The post you're looking for doesn't exist or may have been removed.
              </p>
              <button 
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-2 bg-brandBlue text-white px-4 py-2 rounded-lg"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Format date and extract metadata
  const formattedDate = formatWordPressDate(post.date);
  const readTime = estimateReadingTime(post.content.rendered);
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized';
  const categorySlug = post._embedded?.['wp:term']?.[0]?.[0]?.slug || 'uncategorized';
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const altText = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered;

  // Share functions
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title.rendered,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Article Header */}
        <section className="pt-16 pb-8 bg-gradient-subtle">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <Link to="/blog" className="inline-flex items-center gap-1 text-brandBlue hover:text-brandBlue/80 transition-colors">
                  <ArrowLeft className="h-4 w-4" /> Back to All Articles
                </Link>
              </div>
              
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <Link
                    to={`/blog/category/${categorySlug}`}
                    className="inline-block bg-brandBlue/10 text-brandBlue px-3 py-1 rounded-full text-sm"
                  >
                    {category}
                  </Link>
                  <button 
                    onClick={handleShare}
                    className="inline-flex items-center gap-1 text-foreground/60 hover:text-brandBlue transition-colors text-sm"
                  >
                    <Share2 className="h-3.5 w-3.5" /> Share
                  </button>
                </div>
                
                <h1 
                  className="text-3xl md:text-4xl font-display font-bold mb-6"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                
                <div className="flex items-center gap-6 text-sm text-foreground/60 mb-8">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-8 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {featuredImage && (
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src={featuredImage} 
                    alt={altText} 
                    className="w-full h-auto"
                  />
                </div>
              )}
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
              
              <div className="mt-12 pt-8 border-t border-marzipan/30">
                <div className="flex justify-between items-center">
                  <Link to="/blog" className="inline-flex items-center gap-1 text-brandBlue hover:text-brandBlue/80 transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to Blog
                  </Link>
                  
                  <button 
                    onClick={handleShare}
                    className="inline-flex items-center gap-1 text-foreground/60 hover:text-brandBlue transition-colors"
                  >
                    <Share2 className="h-4 w-4" /> Share this Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Articles - This could be added later */}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
