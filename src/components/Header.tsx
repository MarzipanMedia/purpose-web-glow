
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-marzipan/30">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-display text-2xl font-semibold text-brandBlue">
            marzipan
            <span className="text-brandRed">.</span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-brandBlue" />
          ) : (
            <Menu className="h-6 w-6 text-brandBlue" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-marzipan/30 shadow-lg md:hidden animate-fade-in">
            <nav className="container-custom py-4 flex flex-col gap-4">
              <NavLinks />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks = () => {
  return (
    <>
      <Link to="/" className="text-foreground hover:text-brandBlue transition-colors">
        Home
      </Link>
      <Link to="/services" className="text-foreground hover:text-brandBlue transition-colors">
        Services
      </Link>
      <Link to="/projects" className="text-foreground hover:text-brandBlue transition-colors">
        Projects
      </Link>
      <Link to="/blog" className="text-foreground hover:text-brandBlue transition-colors">
        Blog
      </Link>
      <Link to="/contact" className="btn-primary">
        Get in Touch
      </Link>
    </>
  );
};

export default Header;
