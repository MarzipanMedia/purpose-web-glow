
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { BreadcrumbSchema, BreadcrumbItemProps } from '../seo/SchemaComponents';
import { Link } from 'react-router-dom';

interface BreadcrumbRouteMap {
  [key: string]: {
    label: string;
    parent?: string;
  };
}

// Define route mapping for breadcrumbs
const routeMap: BreadcrumbRouteMap = {
  '': { label: 'Home' },
  'about': { label: 'About Us', parent: '' },
  'services': { label: 'Services', parent: '' },
  'projects': { label: 'Projects', parent: '' },
  'blog': { label: 'Blog', parent: '' },
  'contact': { label: 'Contact', parent: '' },
  'website-carbon': { label: 'Website Carbon', parent: 'services' },
  'terms': { label: 'Terms', parent: '' },
  'privacy': { label: 'Privacy Policy', parent: '' },
  
  // Services subpages
  'sustainable-web-design': { label: 'Sustainable Web Design', parent: 'services' },
  'ai-seo': { label: 'AI-Driven SEO', parent: 'services' },
  'content-creation': { label: 'Content Creation', parent: 'services' },
  'digital-marketing': { label: 'Digital Marketing', parent: 'services' },
  'digital-content-creation': { label: 'Digital Content Creation', parent: 'services' },
};

export const BreadcrumbNav = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  // Generate breadcrumb trail
  const breadcrumbs: {label: string; path: string; isLast: boolean}[] = [];
  
  // Always add home
  breadcrumbs.push({ label: 'Home', path: '/', isLast: pathSegments.length === 0 });
  
  // Add middle segments
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    const isLast = index === pathSegments.length - 1;
    currentPath += `/${segment}`;
    
    const routeInfo = routeMap[segment];
    if (routeInfo) {
      breadcrumbs.push({
        label: routeInfo.label,
        path: currentPath,
        isLast
      });
    } else {
      // Handle dynamic paths like project/:slug
      if (pathSegments[index - 1] === 'projects' && index === 1) {
        breadcrumbs.push({
          label: 'Project Details',
          path: currentPath,
          isLast: true
        });
      } else {
        breadcrumbs.push({
          label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          path: currentPath,
          isLast
        });
      }
    }
  });
  
  // Generate schema breadcrumb items
  const schemaBreadcrumbItems: BreadcrumbItemProps[] = breadcrumbs.map((item, index) => ({
    name: item.label,
    url: `https://marzipan.com.au${item.path}`,
    position: index + 1
  }));
  
  return (
    <>
      <BreadcrumbSchema items={schemaBreadcrumbItems} />
      <Breadcrumb className="mb-6 max-w-screen-xl mx-auto px-4">
        <BreadcrumbList>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!item.isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbNav;
