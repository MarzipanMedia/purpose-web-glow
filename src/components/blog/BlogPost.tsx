
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPostWithSeo } from '@/services/wordpressService';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaHead from '@/components/MetaHead';

const BlogPost = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = useFetchPostWithSeo(Number(id));

  if (isLoading) {
    return (
      <div className="container-custom py-12">
        <Skeleton className="h-8 w-2/3 mb-4" />
        <Skeleton className="h-4 w-1/3 mb-8" />
        <Skeleton className="h-[400px] w-full mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container-custom py-12">
        <Alert variant="destructive">
          <AlertDescription>
            Failed to load blog post. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      <MetaHead 
        title={post.title.rendered}
        description={post.excerpt.rendered.replace(/<[^>]+>/g, '')}
        type="article"
        image={post._embedded?.['wp:featuredmedia']?.[0]?.source_url}
      />

      <div className="container-custom py-12">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-brandBlue hover:text-brandBlue/80 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <h1 
          className="text-4xl md:text-5xl font-display font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div className="flex items-center gap-2 text-foreground/60 mb-8">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>

        {post._embedded?.['wp:featuredmedia'] && (
          <div className="mb-8">
            <img
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </article>
  );
};

export default BlogPost;
