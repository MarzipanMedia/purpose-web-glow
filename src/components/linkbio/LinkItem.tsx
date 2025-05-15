
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props for LinkItem component
interface IconComponentProps {
  [key: string]: React.ComponentType<any>;
}

interface LinkItemProps {
  icon: keyof typeof Icons;
  title: string;
  url: string;
  description?: string;
  internal?: boolean;
}

// Helper component to wrap children in a consistent style
export const LinkSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col gap-3">
      {children}
    </div>
  );
};

// Link item component with icon support
export const LinkItem: React.FC<LinkItemProps> = ({ 
  icon, 
  title, 
  url, 
  description,
  internal = false 
}) => {
  // Dynamically get the icon from Lucide
  const IconComponent = Icons[icon] as React.FC<React.SVGProps<SVGSVGElement>>;
  
  const content = (
    <Card className="hover:scale-[1.02] transition-all duration-200 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-brandBlue dark:hover:border-brandBlue">
      <CardContent className="p-4 flex items-center gap-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-2.5 rounded-full">
          {IconComponent && <IconComponent className="h-5 w-5 text-brandBlue" />}
        </div>
        <div className="flex-grow">
          <h3 className="font-medium dark:text-white">{title}</h3>
          {description && <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>}
        </div>
      </CardContent>
    </Card>
  );
  
  // Return either Link or anchor based on internal flag
  return internal ? (
    <Link to={url} className="no-underline">{content}</Link>
  ) : (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="no-underline"
    >
      {content}
    </a>
  );
};
