
// Define all project-related types in one place to avoid circular references

export interface VideoData {
  title: string;
  videoUrl?: string; // Optional legacy property
  url: string; // Added url property to fix type errors
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
  date?: string; // Added date property to fix type error
  tags?: string[]; // Optional tags property
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
