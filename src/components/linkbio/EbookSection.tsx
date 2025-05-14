
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ShoppingCart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

interface Ebook {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
}

const EbookSection = () => {
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
  
  // Sample ebooks data - this would come from a database in a full implementation
  const ebooks: Ebook[] = [
    {
      id: 'eb-1',
      title: 'Mastering Ethical SEO',
      description: 'Learn sustainable SEO practices that prioritize both users and the planet.',
      price: 29.99,
      image: '/ebook-seo.jpg',
      popular: true
    },
    {
      id: 'eb-2',
      title: 'Social Media for Purpose-Driven Brands',
      description: 'Build an authentic social presence that resonates with your audience.',
      price: 24.99,
      image: '/ebook-social.jpg'
    },
    {
      id: 'eb-3',
      title: 'Sustainable Digital Marketing Playbook',
      description: 'Digital marketing strategies that drive results while minimizing environmental impact.',
      price: 34.99,
      image: '/ebook-marketing.jpg'
    }
  ];
  
  // Function to handle Stripe checkout
  // In a full implementation this would call a Supabase Edge Function
  const handleCheckout = (ebook: Ebook) => {
    setIsLoading(prev => ({ ...prev, [ebook.id]: true }));
    
    // Mock checkout - in real implementation, this would call Stripe
    console.log(`Processing checkout for ${ebook.title} at $${ebook.price}`);
    
    // Simulate API call
    setTimeout(() => {
      alert(`This is where the Stripe checkout would be triggered for "${ebook.title}"`);
      // In a real implementation, we would redirect to Stripe checkout
      setIsLoading(prev => ({ ...prev, [ebook.id]: false }));
    }, 1000);
  };
  
  return (
    <div className="grid grid-cols-1 gap-4">
      {ebooks.map((ebook) => (
        <Card key={ebook.id} className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
          <AspectRatio ratio={16/9}>
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 relative">
              {/* Use a placeholder if image fails to load */}
              <img
                src={ebook.image}
                alt={ebook.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400/186074/FFF?text=Ebook+Cover";
                }}
              />
              {ebook.popular && (
                <Badge className="absolute top-2 right-2 bg-brandRed text-white">
                  Popular
                </Badge>
              )}
            </div>
          </AspectRatio>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2 dark:text-white">{ebook.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{ebook.description}</p>
            <p className="text-lg font-bold text-brandBlue">${ebook.price}</p>
          </CardContent>
          <CardFooter className="flex justify-between p-4 pt-0">
            <Button
              onClick={() => handleCheckout(ebook)}
              className="w-full bg-brandBlue hover:bg-brandBlue/90"
              disabled={isLoading[ebook.id]}
            >
              {isLoading[ebook.id] ? (
                <span className="flex items-center">Processing...</span>
              ) : (
                <span className="flex items-center">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                </span>
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default EbookSection;
