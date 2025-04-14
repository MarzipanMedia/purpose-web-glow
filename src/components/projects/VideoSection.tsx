
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
  // Extract video IDs from Vimeo URLs
  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : '';
  };

  return (
    <section className="py-16 bg-marzipan/10">
      <div className="container-custom">
        <h2 className="text-2xl font-display font-semibold mb-8 text-center">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => {
            const videoId = getVimeoId(video);
            return (
              <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
                <div className="aspect-w-9 aspect-h-16 w-full">
                  <AspectRatio ratio={9/16}>
                    <iframe
                      src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full"
                      title={`Video ${index + 1}`}
                    ></iframe>
                  </AspectRatio>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Digital Story {index + 1}</h3>
                  <p className="text-foreground/70 text-sm">Stories of hope, courage and survival</p>
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
