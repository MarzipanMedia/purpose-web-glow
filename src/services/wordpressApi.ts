
/**
 * WordPress REST API integration for fetching blog posts
 */

export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
    'author'?: Array<{
      name: string;
    }>;
  };
  author_info?: {
    name: string;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// Real WordPress site URL - update with your actual WordPress site
const WP_API_URL = 'https://demo.wp-api.org/wp-json/wp/v2';

/**
 * Fetch posts from WordPress API
 */
export const fetchWordPressPosts = async (page = 1, perPage = 6): Promise<{
  posts: WordPressPost[];
  totalPages: number;
}> => {
  try {
    const response = await fetch(
      `${WP_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const posts = await response.json();
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    
    // Process posts to extract author names from _embedded data
    const processedPosts = posts.map((post: WordPressPost) => {
      // Get author info from _embedded if available
      const authorInfo = post._embedded?.['author']?.[0]?.name || 'Unknown Author';
      
      return {
        ...post,
        author_info: { name: authorInfo }
      };
    });
    
    return { 
      posts: processedPosts,
      totalPages
    };
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return { posts: [], totalPages: 0 };
  }
};

/**
 * Fetch categories from WordPress API
 */
export const fetchWordPressCategories = async (): Promise<WordPressCategory[]> => {
  try {
    const response = await fetch(`${WP_API_URL}/categories?per_page=20`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
};

/**
 * Fetch a single post by slug
 */
export const fetchPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  try {
    const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    
    const posts = await response.json();
    
    if (posts.length === 0) {
      return null;
    }
    
    return posts[0];
  } catch (error) {
    console.error('Error fetching WordPress post by slug:', error);
    return null;
  }
};

/**
 * Format date from WordPress API
 */
export const formatWordPressDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Estimate reading time for post content
 */
export const estimateReadingTime = (content: string): string => {
  // Strip HTML tags
  const text = content.replace(/<[^>]*>/g, '');
  // Count words (rough estimate)
  const words = text.split(/\s+/).length;
  // Average reading speed: 200-250 words per minute
  const minutes = Math.ceil(words / 225);
  return `${minutes} min read`;
};

/**
 * Strip HTML from WordPress content
 */
export const stripHtml = (html: string): string => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

// Function to search posts
export const searchWordPressPosts = async (searchQuery: string, page = 1, perPage = 6): Promise<{
  posts: WordPressPost[];
  totalPages: number;
}> => {
  try {
    const response = await fetch(
      `${WP_API_URL}/posts?_embed&search=${encodeURIComponent(searchQuery)}&page=${page}&per_page=${perPage}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to search posts');
    }
    
    const posts = await response.json();
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    
    // Process posts to extract author names
    const processedPosts = posts.map((post: WordPressPost) => {
      const authorInfo = post._embedded?.['author']?.[0]?.name || 'Unknown Author';
      
      return {
        ...post,
        author_info: { name: authorInfo }
      };
    });
    
    return { 
      posts: processedPosts,
      totalPages
    };
  } catch (error) {
    console.error('Error searching WordPress posts:', error);
    return { posts: [], totalPages: 0 };
  }
};
