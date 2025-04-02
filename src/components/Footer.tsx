
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brandBlue text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="font-display text-2xl font-semibold">
                marzipan<span className="text-brandRed">.</span>
              </div>
            </Link>
            <p className="text-white/80 mb-4 max-w-xs">
              Sustainable web design & AI-driven SEO for purpose-driven brands.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@marzipan.com.au" className="text-white/70 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-white/70 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#sustainable-web" className="text-white/70 hover:text-white transition-colors">Sustainable Web Design</Link></li>
              <li><Link to="/services#ai-seo" className="text-white/70 hover:text-white transition-colors">AI-Driven SEO</Link></li>
              <li><Link to="/services#brand-strategy" className="text-white/70 hover:text-white transition-colors">Brand Strategy</Link></li>
              <li><Link to="/services#content" className="text-white/70 hover:text-white transition-colors">Content Creation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-medium mb-4">Contact</h3>
            <address className="not-italic text-white/70 space-y-2">
              <p>Byron Bay, NSW</p>
              <p>Australia</p>
              <a href="mailto:hello@marzipan.com.au" className="block hover:text-white transition-colors">hello@marzipan.com.au</a>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 text-white/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Marzipan Digital. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
