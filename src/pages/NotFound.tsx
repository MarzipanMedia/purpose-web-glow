
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-brandBlue/20 to-transparent opacity-70 rounded-full animate-pulse-slow"></div>
            <div className="bg-marzipan/80 rounded-full aspect-square flex items-center justify-center p-12 relative animate-fade-in">
              <div className="text-center">
                <span className="text-6xl font-display mb-2">404</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-2xl md:text-3xl font-display font-semibold">
              Oops! The page you are looking for does not exist.
            </h1>
            <p className="text-lg text-foreground/80">
              It might have been moved or deleted. Let's take you home.
            </p>
          </div>

          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-brandBlue text-white px-6 py-3 rounded-lg hover:bg-brandBlue/90 transition-all hover:shadow-md hover:scale-[1.02] hover:translate-y-[-2px] duration-300 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Back to Home <Home className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
