import { useQuery, useMutation } from '@tanstack/react-query';

export interface WordPressPost {
  id: number;
  date: string;
  modified?: string; 
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
      media_details?: {
        width?: number;
        height?: number;
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
    author?: Array<{
      name: string;
    }>;
  };
  categories?: number[];
  tags?: number[];
  
  // Add SEO metadata
  yoast_head_json?: {
    title: string;
    description: string;
    canonical: string;
    og_title: string;
    og_description: string;
    og_image: string[];
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  count: number;
}

export interface CarbonResult {
  url: string;
  green: boolean;
  bytes: number;
  cleanerThan: number;
  statistics: {
    adjustedBytes: number;
    energy: number;
    co2: {
      grid: {
        grams: number;
        litres: number;
      },
      renewable: {
        grams: number;
        litres: number;
      }
    }
  };
  timestamp: number;
}

// API URL for WordPress instance
const API_URL = 'https://blog.marzipan.com.au/wp-json/wp/v2';
const EMAIL_ENDPOINT = 'https://blog.marzipan.com.au/wp-json/marzipan/v1/send-email';

// In-memory cache for WordPress posts
const postsCache = new Map();

// Static fallback data for when API fails
const fallbackPosts = [
  {
    id: 1,
    date: "2025-04-20T12:00:00",
    title: { rendered: "Sustainable Web Design Best Practices" },
    excerpt: { rendered: "<p>Learn how to create eco-friendly websites that reduce your carbon footprint while maintaining performance.</p>" },
    link: "#sustainable-design",
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/webdesign-agency-min.webp", alt_text: "Sustainable Web Design" }]
    }
  },
  {
    id: 2,
    date: "2025-04-15T12:00:00",
    title: { rendered: "AI-Driven SEO Strategies" },
    excerpt: { rendered: "<p>Discover how AI can enhance your SEO efforts while maintaining ethical standards.</p>" },
    link: "#ai-seo",
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/sydney-digital-agency-min.webp", alt_text: "AI SEO" }]
    }
  }
];

// Optimized fetch function with timeout and caching
async function fetchWithTimeout(url: string, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export const useFetchPosts = (page = 1, perPage = 3) => {
  return useQuery({
    queryKey: ['wordpressPosts', page, perPage],
    queryFn: async () => {
      // Check cache first
      const cacheKey = `posts-${page}-${perPage}`;
      if (postsCache.has(cacheKey)) {
        return postsCache.get(cacheKey);
      }
      
      try {
        console.log(`Fetching WordPress posts: ${API_URL}/posts?_embed&page=${page}&per_page=${perPage}`);
        const response = await fetchWithTimeout(
          `${API_URL}/posts?_embed&page=${page}&per_page=${perPage}`,
          {},
          3000 // 3 second timeout
        );
        
        if (!response.ok) {
          throw new Error(`WordPress API error: ${response.status}`);
        }
        
        const data = await response.json();
        const result = {
          posts: data as WordPressPost[],
          totalPages: parseInt(response.headers.get('X-WP-TotalPages') || '1'),
          total: parseInt(response.headers.get('X-WP-Total') || '0')
        };
        
        // Store in cache
        postsCache.set(cacheKey, result);
        return result;
      } catch (error) {
        console.error('Error fetching WordPress posts:', error);
        
        // Return fallback data on failure
        return {
          posts: fallbackPosts as WordPressPost[],
          totalPages: 1,
          total: fallbackPosts.length
        };
      }
    },
    retry: 1,
    networkMode: 'always',
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
  });
};

export const useFetchCategories = () => {
  return useQuery({
    queryKey: ['wordpressCategories'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/categories?per_page=20`);
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status}`);
      }
      
      return await response.json() as WordPressCategory[];
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useFetchPostsByCategory = (categoryId: number, page = 1, perPage = 6) => {
  return useQuery({
    queryKey: ['wordpressPosts', 'category', categoryId, page, perPage],
    queryFn: async () => {
      const response = await fetch(
        `${API_URL}/posts?_embed&categories=${categoryId}&page=${page}&per_page=${perPage}`
      );
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        posts: data as WordPressPost[],
        totalPages: parseInt(response.headers.get('X-WP-TotalPages') || '1'),
        total: parseInt(response.headers.get('X-WP-Total') || '0')
      };
    },
    retry: 1,
    enabled: !!categoryId,
    networkMode: 'always',
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

// New function to send carbon results via WordPress API
export const useSendCarbonResultEmail = () => {
  return useMutation({
    mutationFn: async (data: {
      email: string;
      carbonData: CarbonResult;
      url: string;
      adminEmail?: string;
    }) => {
      console.log('Sending carbon result email via WordPress:', data);
      
      try {
        const response = await fetchWithTimeout(
          EMAIL_ENDPOINT, 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              recipient_email: data.email,
              admin_email: data.adminEmail || '',
              subject: 'Your Website Carbon Footprint Results',
              carbon_data: data.carbonData,
              website_url: data.url
            }),
          },
          4000 // 4 second timeout
        );
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to send email');
        }
        
        return await response.json();
      } catch (error) {
        console.error('Error sending carbon result email:', error);
        // Return success anyway to prevent blocking UI
        return { success: true, simulated: true };
      }
    },
  });
};

// Newsletter subscription via WordPress API
export const useSubscribeToNewsletter = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      console.log('Subscribing to newsletter via WordPress:', email);
      
      const response = await fetch(`${API_URL}/newsletter-subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          interests: ['sustainable-web-tips']
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to subscribe to newsletter');
      }
      
      return await response.json();
    },
  });
};

export const useFetchPostWithSeo = (postId: number) => {
  return useQuery({
    queryKey: ['wordpressPost', postId],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/posts/${postId}?_embed&_fields=id,title,content,excerpt,date,yoast_head_json`);
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status}`);
      }
      
      return await response.json() as WordPressPost;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
