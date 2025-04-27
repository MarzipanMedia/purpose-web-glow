
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from "@/components/ui/card";
import { RotateCw } from 'lucide-react';

interface VideoData {
  url: string;
  title: string;
  description?: string;
  orientation?: 'landscape' | 'portrait';
}

interface VideoSectionProps {
  videos: (string | VideoData)[];
  sectionTitle?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  videos, 
  sectionTitle = "Project Videos" 
}) => {
  // Extract video IDs from Vimeo or YouTube URLs
  const getVideoId = (url: string) => {
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) return { platform: 'vimeo', id: vimeoMatch[1] };
    
    const youtubeStandardMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
    if (youtubeStandardMatch) return { platform: 'youtube', id: youtubeStandardMatch[1] };
    
    const youtubeShortMatch = url.match(/youtu\.be\/([^?]+)/);
    if (youtubeShortMatch) return { platform: 'youtube', id: youtubeShortMatch[1] };
    
    return { platform: 'vimeo', id: '' };
  };

  return (
    <section className="py-16 bg-marzipan/10">
      <div className="container-custom">
        <h2 className="text-2xl font-display font-semibold mb-8 text-center">
          {sectionTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => {
            const videoData = typeof video === 'string' ? { 
              url: video, 
              title: `Video ${index + 1}`,
              orientation: 'landscape' 
            } as VideoData : video;
            
            const { platform, id } = getVideoId(videoData.url);
            const embedUrl = platform === 'vimeo' 
              ? `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0` 
              : `https://www.youtube.com/embed/${id}?rel=0`;
            
            const isPortrait = videoData.orientation === 'portrait';
            
            return (
              <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
                <div className="w-full">
                  <AspectRatio ratio={isPortrait ? 9/16 : 16/9}>
                    <iframe
                      src={embedUrl}
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full"
                      title={videoData.title}
                    ></iframe>
                  </AspectRatio>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">{videoData.title}</h3>
                  {videoData.description && (
                    <p className="text-foreground/70 text-sm">{videoData.description}</p>
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
