
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface VideoSectionProps {
  videos: string[];
  title?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  videos, 
  title = "Project Videos" 
}) => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => {
            const { platform, id } = getVideoId(video);
            const embedUrl = platform === 'vimeo' 
              ? `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0` 
              : `https://www.youtube.com/embed/${id}?rel=0`;
            
            return (
              <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
                <div className="aspect-w-9 aspect-h-16 w-full">
                  <AspectRatio ratio={9/16}>
                    <iframe
                      src={embedUrl}
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full"
                      title={`Video ${index + 1}`}
                    ></iframe>
                  </AspectRatio>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Digital Story {index + 1}</h3>
                  <p className="text-foreground/70 text-sm">Stories of hope, courage and innovation</p>
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
