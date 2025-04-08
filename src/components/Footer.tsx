
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-brandBlue text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo variant="reversed" className="mb-4" />
            <p className="text-white/80 mb-4 max-w-xs">
              Sustainable web design & AI-driven SEO for purpose-driven brands.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/marzipanmedia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/marzipanmedia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/18211194/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:ben@marzipan.com.au" 
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Home</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Services</Link></li>
              <li><Link to="/projects" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Projects</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Blog</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-medium mb-4">Digital Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#sustainable-web" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Sustainable Web Design</Link></li>
              <li><Link to="/services#ai-seo" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">AI-Driven SEO</Link></li>
              <li><Link to="/services#brand-strategy" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Brand Strategy</Link></li>
              <li><Link to="/services#content" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Content Creation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-medium mb-4">Contact</h3>
            <address className="not-italic text-white/70 space-y-2">
              <p>Bronte, NSW</p>
              <p>Australia</p>
              <a 
                href="mailto:hello@marzipan.com.au" 
                className="block hover:text-white transition-all duration-300 hover-link inline-block"
              >
                hello@marzipan.com.au
              </a>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 text-white/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Marzipan | Sustainable Web Design | SEO | Digital Marketing
ABN: 61 181 193 114.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-all duration-300 hover-link">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-all duration-300 hover-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
