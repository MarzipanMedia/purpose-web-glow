
import { useEffect, useState, useRef, useCallback } from 'react';
import { useLCP } from './useLCP';

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  respectLCP?: boolean; // New option to respect LCP
};

export const useScrollAnimation = (options: AnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { threshold = 0.15, rootMargin = "0px", triggerOnce = true, respectLCP = true } = options;
  const lcpComplete = useLCP();

  useEffect(() => {
    // Don't initialize animations until LCP is complete if respectLCP is true
    if (respectLCP && !lcpComplete) return;
    
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
  }, [threshold, rootMargin, triggerOnce, lcpComplete, respectLCP]);

  return { ref, isVisible };
};

export const useParallax = (respectLCP = true) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const lcpComplete = useLCP();
  
  useEffect(() => {
    // Don't initialize animations until LCP is complete if respectLCP is true
    if (respectLCP && !lcpComplete) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset({ x: 0, y: scrollY * 0.1 });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [respectLCP, lcpComplete]);
  
  return offset;
};

export const useMousePosition = (ref: React.RefObject<HTMLElement>, respectLCP = true) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const lcpComplete = useLCP();
  
  useEffect(() => {
    // Don't initialize animations until LCP is complete if respectLCP is true
    if (respectLCP && !lcpComplete) return;
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
  }, [ref, respectLCP, lcpComplete]);
  
  return position;
};

// Enhanced glow effect for hero sections
export const useGlowEffect = (respectLCP = true) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const lcpComplete = useLCP();

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!glowRef.current) return;
    
    const rect = glowRef.current.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    // Only enable hover effects if LCP is complete or we're not respecting LCP
    if (!respectLCP || lcpComplete) {
      setIsHovering(true);
    }
  }, [respectLCP, lcpComplete]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return {
    glowRef,
    glowPosition,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  };
};

// Enhanced staggered text animation with better typing for headings
export const useStaggeredText = (text: string, delay: number = 0.05, respectLCP = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);
  const lcpComplete = useLCP();

  const words = text.split(" ");
  
  useEffect(() => {
    // Don't initialize animations until LCP is complete if respectLCP is true
    if (respectLCP && !lcpComplete) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [respectLCP, lcpComplete]);

  const renderWords = () => {
    return words.map((word, index) => (
      <span
        key={index}
        className="inline-block"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.5s ease, transform 0.5s ease`,
          transitionDelay: `${delay * index}s`,
          marginRight: '0.25em' // Add space between words
        }}
      >
        {word}
      </span>
    ));
  };

  return { ref, renderWords, isVisible };
};

// Generic magnetic button effect for any element type
export const useMagneticButton = <T extends HTMLElement>(intensity: number = 0.3, respectLCP = true) => {
  const buttonRef = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const lcpComplete = useLCP();

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // Only enable effects if LCP is complete or we're not respecting LCP
    if (!buttonRef.current || (respectLCP && !lcpComplete)) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setPosition({
      x: x * intensity,
      y: y * intensity
    });
    setIsHovering(true);
  }, [intensity, respectLCP, lcpComplete]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
    setIsHovering(false);
  }, []);

  return {
    buttonRef,
    position,
    isHovering,
    handleMouseMove,
    handleMouseLeave
  };
};
