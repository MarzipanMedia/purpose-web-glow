
import { useQuery } from '@tanstack/react-query';

export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
  categories?: number[];
  tags?: number[];
}

export interface WordPressCategory {
  id: number;
  name: string;
  count: number;
}

// Replace with your actual WordPress site URL
const API_URL = 'https://demo.wp-api.org/wp-json/wp/v2';

export const useFetchPosts = (page = 1, perPage = 6) => {
  return useQuery({
    queryKey: ['wordpressPosts', page, perPage],
    queryFn: async () => {
      console.log(`Fetching WordPress posts: ${API_URL}/posts?_embed&page=${page}&per_page=${perPage}`);
      const response = await fetch(`${API_URL}/posts?_embed&page=${page}&per_page=${perPage}`);
      
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
    networkMode: 'always',
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
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
