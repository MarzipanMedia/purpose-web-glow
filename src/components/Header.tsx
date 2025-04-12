
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-4 sticky top-0 z-50 border-b transition-all duration-300 ${
      hasScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Logo variant="default" className="animate-appear" />

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brandBlue dark:text-marzipan animate-appear" />
            ) : (
              <Menu className="h-6 w-6 text-brandBlue dark:text-marzipan animate-appear" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLinks 
            isServicesOpen={isServicesOpen} 
            setIsServicesOpen={setIsServicesOpen} 
          />
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-marzipan/30 shadow-lg md:hidden animate-fade-in">
            <nav className="container-custom py-4 flex flex-col gap-4">
              <NavLinks
                isMobile={true}
                isServicesOpen={isServicesOpen}
                setIsServicesOpen={setIsServicesOpen}
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks = ({ 
  isMobile = false, 
  isServicesOpen, 
  setIsServicesOpen 
}: { 
  isMobile?: boolean,
  isServicesOpen: boolean,
  setIsServicesOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const servicePages = [
    { title: "Sustainable Web Design", path: "/services/sustainable-web-design" },
    { title: "AI-Driven SEO", path: "/services/ai-seo" },
    { title: "Digital Marketing", path: "/services/digital-marketing" },
    { title: "Digital Content Creation", path: "/services/digital-content-creation" },
    { title: "Content Creation", path: "/services/content-creation" }
  ];

  return (
    <>
      <Link to="/" className="text-foreground hover:text-brandBlue dark:hover:text-marzipan hover-link transition-all">
        Home
      </Link>
      <Link to="/about" className="text-foreground hover:text-brandBlue dark:hover:text-marzipan hover-link transition-all">
        About
      </Link>
      <div className="relative">
        <button 
          className="text-foreground hover:text-brandBlue dark:hover:text-marzipan hover-link transition-all flex items-center gap-1"
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
          onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
        >
          Services
          <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isServicesOpen && (
          <div 
            className={`${isMobile ? '' : 'absolute top-full left-0'} bg-white dark:bg-gray-900 shadow-md rounded-md border border-marzipan/30 min-w-[220px] animate-fade-in z-50`}
            onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
            onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
          >
            <div className={`py-2 ${isMobile ? 'pl-4' : 'px-3'}`}>
              <Link 
                to="/services" 
                className="block py-2 px-3 hover:bg-marzipan/20 rounded text-foreground hover:text-brandBlue dark:hover:text-marzipan transition-all"
                onClick={() => setIsServicesOpen(false)}
              >
                All Services
              </Link>
              {servicePages.map((service, index) => (
                <Link 
                  key={index}
                  to={service.path} 
                  className="block py-2 px-3 hover:bg-marzipan/20 rounded text-foreground hover:text-brandBlue dark:hover:text-marzipan transition-all flex items-center gap-1"
                  onClick={() => setIsServicesOpen(false)}
                >
                  <ChevronRight className="h-3 w-3" />
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Link to="/projects" className="text-foreground hover:text-brandBlue dark:hover:text-marzipan hover-link transition-all">
        Projects
      </Link>
      <Link to="/blog" className="text-foreground hover:text-brandBlue dark:hover:text-marzipan hover-link transition-all">
        Blog
      </Link>
      <Link to="/contact" className="btn-primary">
        Get in Touch
      </Link>
    </>
  );
};

export default Header;
