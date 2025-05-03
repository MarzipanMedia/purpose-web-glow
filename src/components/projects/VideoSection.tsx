
import React, { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from "@/components/ui/card";
import { VideoData } from './projectsData';
import { RotateCw } from 'lucide-react';

interface VideoSectionProps {
  videos: VideoData[];
  title?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  videos, 
  title = "Project Videos" 
}) => {
  // Track which videos are rotated
  const [rotatedVideos, setRotatedVideos] = useState<{[key: number]: boolean}>({});
  
  const toggleRotation = (index: number) => {
    setRotatedVideos(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // Extract video IDs from Vimeo or YouTube URLs
  const getVideoId = (url: string) => {
    // Check for Vimeo URL format
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) return { platform: 'vimeo', id: vimeoMatch[1] };
    
    // Check for YouTube URL formats
    const youtubeStandardMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
    if (youtubeStandardMatch) return { platform: 'youtube', id: youtubeStandardMatch[1] };
    
    const youtubeShortMatch = url.match(/youtu\.be\/([^?]+)/);
    if (youtubeShortMatch) return { platform: 'youtube', id: youtubeShortMatch[1] };
    
    // If no match found, return empty ID and default to vimeo
    return { platform: 'vimeo', id: '' };
  };

  return (
    <section className="py-16 bg-marzipan/10">
      <div className="container-custom">
        <h2 className="text-2xl font-display font-semibold mb-8 text-center">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => {
            const { platform, id } = getVideoId(video.url);
            const embedUrl = platform === 'vimeo' 
              ? `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0` 
              : `https://www.youtube.com/embed/${id}?rel=0`;
            
            const isPortrait = video.orientation === 'portrait';
            const isRotated = rotatedVideos[index] || false;
            
            // Determine aspect ratio based on orientation and rotation state
            const aspectRatio = isPortrait
              ? (isRotated ? 16/9 : 9/16)
              : 16/9;
              
            return (
              <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white h-full flex flex-col">
                <div className="w-full relative">
                  <AspectRatio ratio={aspectRatio} className="overflow-hidden">
                    <iframe
                      src={embedUrl}
                      allow="autoplay; fullscreen; picture-in-picture"
                      className={`w-full h-full ${isPortrait && isRotated ? 'rotate-90 scale-[1.777]' : ''}`}
                      title={video.title}
                    ></iframe>
                  </AspectRatio>
                  
                  {isPortrait && (
                    <button 
                      onClick={() => toggleRotation(index)}
                      className="absolute top-2 right-2 bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors"
                      aria-label="Rotate video"
                    >
                      <RotateCw size={16} />
                    </button>
                  )}
                </div>
                
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="font-medium text-lg">{video.title}</h3>
                  {video.description && (
                    <p className="text-foreground/70 text-sm mt-1">{video.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
