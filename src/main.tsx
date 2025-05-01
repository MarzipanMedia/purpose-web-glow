
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to add preconnect and preload links
const addResourceHints = () => {
  // Add preconnect for Google Fonts domain
  const preconnectLinks = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: '' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
  ];

  // Add preload for critical fonts and styles
  const preloadLinks = [
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap', as: 'style' },
    { rel: 'preload', href: '/marzipan-logo.webp', as: 'image', fetchpriority: 'high' }
  ];

  // Add all resource hints to document head
  [...preconnectLinks, ...preloadLinks].forEach(link => {
    const linkEl = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      if (value !== undefined) linkEl.setAttribute(key, value);
    });
    document.head.appendChild(linkEl);
  });

  // Add display=swap to font links
  const existingLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  existingLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.includes('display=swap')) {
      link.setAttribute('href', `${href}&display=swap`);
    }
  });
};

// Execute resource hints immediately
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addResourceHints);
} else {
  addResourceHints();
}

// Add event listener to catch image loading errors
window.addEventListener('error', function(e) {
  if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
    const img = e.target as HTMLImageElement;
    if (img.src.includes('project.jpg')) {
      img.src = '/placeholder.svg';
      img.alt = 'Project placeholder image';
    }
  }
}, true);

// Create root and render App with high priority
const rootElement = document.getElementById("root");
if (rootElement) {
  const appRoot = createRoot(rootElement);
  // Use a microtask to ensure critical rendering happens as soon as possible
  queueMicrotask(() => {
    appRoot.render(<App />);
  });
} else {
  console.error("Root element not found");
}
