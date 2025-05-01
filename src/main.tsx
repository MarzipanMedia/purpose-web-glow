
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Preload critical resources
document.addEventListener('DOMContentLoaded', () => {
  // Add preload links for critical fonts
  const preloadLinks = [
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap', as: 'style' },
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap', as: 'style' }
  ];

  preloadLinks.forEach(link => {
    const linkEl = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      linkEl.setAttribute(key, value);
    });
    document.head.appendChild(linkEl);
  });
});

// Add event listener to catch image loading errors
window.addEventListener('error', function(e) {
  if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
    console.error('Image loading error:', (e.target as HTMLImageElement).src);
    
    // Replace broken images with a placeholder
    const img = e.target as HTMLImageElement;
    if (img.src.includes('project.jpg')) {
      img.src = '/placeholder.svg';
      img.alt = 'Project placeholder image';
    }
  }
}, true);

// Create root and render App
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
