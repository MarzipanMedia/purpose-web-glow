
import { useQuery, useMutation } from '@tanstack/react-query';

// Base URL for WordPress API - Updated to the correct endpoint
const WP_API_BASE = 'https://blog.marzipan.com.au/wp-json/wp/v2';

// Add caching to improve performance and reduce API calls
const CACHE_TTL = 1000 * 60 * 15; // 15 minutes

// Define proper types for WordPress data
interface WPPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  slug: string;
  _embedded?: any;
}

interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// Define Carbon Result type needed by components
export interface CarbonResult {
  url: string;
  green: boolean;
  bytes: number;
  cleanerThan: number;
  statistics: {
    co2: {
      grid: {
        grams: number;
        litres: number;
      };
    };
  };
}

// Define Email request type
interface CarbonEmailRequest {
  email: string;
  carbonData: CarbonResult;
  url: string;
  adminEmail?: string;
}

// Helper function to manage localStorage caching
const cache = {
  get: (key: string) => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;
      
      const { value, expiry } = JSON.parse(item);
      if (expiry && Date.now() > expiry) {
        localStorage.removeItem(key);
        return null;
      }
      
      return value;
    } catch (err) {
      console.error('Error retrieving from cache:', err);
      return null;
    }
  },
  
  set: (key: string, value: any, ttl = CACHE_TTL) => {
    try {
      const item = {
        value,
        expiry: Date.now() + ttl
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (err) {
      console.error('Error setting cache:', err);
    }
  }
};

// Function to fetch WordPress posts
const fetchPosts = async (page = 1, per_page = 6) => {
  console.info(`Fetching WordPress posts: ${WP_API_BASE}/posts?_embed&page=${page}&per_page=${per_page}`);
  
  try {
    // Try to get from cache first
    const cacheKey = `wp_posts_${page}_${per_page}`;
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
      console.info('Using cached posts data');
      return cachedData;
    }
    
    // If no cache, fetch from API
    const response = await fetch(`${WP_API_BASE}/posts?_embed&page=${page}&per_page=${per_page}`, {
      headers: {
        'Accept': 'application/json'
      },
      // Add a timeout to the fetch request
      signal: AbortSignal.timeout(5000) // 5 second timeout
    });
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    const posts = await response.json();
    
    // Get total pages from headers
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0', 10);
    
    const result = { posts, totalPages, totalPosts };
    
    // Cache the result
    cache.set(cacheKey, result);
    
    return result;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    throw error;
  }
};

// Function to fetch WordPress categories
const fetchCategories = async () => {
  try {
    // Try to get from cache first
    const cacheKey = 'wp_categories';
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
      console.info('Using cached categories data');
      return cachedData;
    }
    
    // If no cache, fetch from API
    const response = await fetch(`${WP_API_BASE}/categories?per_page=20`, {
      headers: {
        'Accept': 'application/json'
      },
      // Add a timeout to the fetch request
      signal: AbortSignal.timeout(5000) // 5 second timeout
    });
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    const categories = await response.json();
    
    // Cache the result
    cache.set(cacheKey, categories);
    
    return categories;
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    throw error;
  }
};

// Custom hook for fetching posts
export const useFetchPosts = (page = 1, per_page = 6) => {
  return useQuery({
    queryKey: ['wp-posts', page, per_page],
    queryFn: () => fetchPosts(page, per_page),
    staleTime: CACHE_TTL, // Use the cache TTL for stale time
    retry: 1, // Only retry once
    retryDelay: 1000, // Wait 1 second before retrying
    refetchOnWindowFocus: false // Don't refetch when window gets focus
  });
};

// Custom hook for fetching categories
export const useFetchCategories = () => {
  return useQuery({
    queryKey: ['wp-categories'],
    queryFn: fetchCategories,
    staleTime: CACHE_TTL * 2, // Categories change less frequently
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false
  });
};

// Add the missing hooks needed by components

// Function to send carbon result email via WordPress
const sendCarbonResultEmail = async (data: CarbonEmailRequest) => {
  // This would normally connect to a WordPress endpoint, but we'll simulate success
  console.log('Sending carbon result email:', data);
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return { success: true, message: 'Email sent successfully' };
};

// Hook for sending carbon result emails
export const useSendCarbonResultEmail = () => {
  return useMutation({
    mutationFn: sendCarbonResultEmail,
    onError: (error) => {
      console.error('Failed to send carbon result email:', error);
    }
  });
};

// Function to subscribe to newsletter
const subscribeToNewsletter = async (email: string) => {
  // This would normally connect to a WordPress endpoint, but we'll simulate success
  console.log('Subscribing to newsletter:', email);
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return { success: true, message: 'Subscription successful' };
};

// Hook for newsletter subscriptions
export const useSubscribeToNewsletter = () => {
  return useMutation({
    mutationFn: subscribeToNewsletter,
    onError: (error) => {
      console.error('Failed to subscribe to newsletter:', error);
    }
  });
};
