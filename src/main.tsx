
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add event listener to catch image loading errors
window.addEventListener('error', function(e) {
  if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
    console.error('Image loading error:', (e.target as HTMLImageElement).src);
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
