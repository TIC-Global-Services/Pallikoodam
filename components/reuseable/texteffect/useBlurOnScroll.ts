import { useEffect, useRef, useState } from "react";

export const useBlurOnScroll = <T extends HTMLElement = HTMLElement>(threshold: number = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    // Detect mobile or tablet device (up to 1024px)
    const checkMobileOrTablet = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    
    checkMobileOrTablet();
    window.addEventListener('resize', checkMobileOrTablet);
    
    return () => window.removeEventListener('resize', checkMobileOrTablet);
  }, []);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "-100px 0px -100px 0px" // Element needs to be more in view before triggering
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  // No blur effect on mobile and tablet, blur effect on desktop only
  const blurClass = isMobileOrTablet 
    ? '' // No animation classes on mobile and tablet
    : (isVisible 
        ? 'filter-none opacity-100' 
        : 'filter blur-sm opacity-70');

  return { elementRef, blurClass, isVisible };
};