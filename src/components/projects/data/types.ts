
// Define all project-related types in one place to avoid circular references

export interface VideoData {
  title: string;
  videoUrl: string; // Changed from url to videoUrl to match usage
  thumbnailUrl?: string;
  description?: string;
  orientation?: 'landscape' | 'portrait'; // Added orientation property
}

export interface ProjectData {
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  features: string[];
  color: string;
  textColor: string;
  slug: string;
  longDescription?: string;
  websiteUrl?: string;
  client?: string;
  services?: string[];
  videos?: VideoData[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
