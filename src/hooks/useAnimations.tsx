
import { useEffect, useState, useRef, useCallback } from 'react';

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

export const useScrollAnimation = (options: AnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { threshold = 0.15, rootMargin = "0px", triggerOnce = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export const useParallax = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset({ x: 0, y: scrollY * 0.1 });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return offset;
};

export const useMousePosition = (ref: React.RefObject<HTMLElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (!ref.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setPosition({
        x: (x / rect.width) * 2 - 1,
        y: (y / rect.height) * 2 - 1
      });
    };
    
    const element = ref.current;
    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);
  
  return position;
};

// Simple static animations helper for components that previously used complex animations
export const useStaticAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Mark component as loaded after initial render
    setIsLoaded(true);
  }, []);
  
  return { isLoaded };
};
