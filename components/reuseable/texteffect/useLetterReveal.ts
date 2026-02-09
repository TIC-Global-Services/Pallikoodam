import { useEffect, useRef, useState } from "react";

export const useLetterReveal = <T extends HTMLElement = HTMLElement>(threshold: number = 0.1) => {
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Apply letter-by-letter animation
          if (elementRef.current && !isMobileOrTablet) {
            applyLetterRevealAnimation(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "50px 0px 50px 0px"
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, isMobileOrTablet]);

  const applyLetterRevealAnimation = (element: HTMLElement) => {
    // Store original HTML to preserve layout
    const originalHTML = element.innerHTML;
    
    // Create a temporary element to parse the content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalHTML;
    
    // Function to wrap text nodes with spans
    const wrapTextNodes = (node: Node): Node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          span.style.transform = 'translateY(100%)';
          span.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.65, 0.3, 0.9), opacity 0.5s ease-out';
          fragment.appendChild(span);
        }
        
        return fragment;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const newElement = node.cloneNode(false) as Element;
        const childNodes = Array.from(node.childNodes);
        
        childNodes.forEach(child => {
          newElement.appendChild(wrapTextNodes(child));
        });
        
        return newElement;
      }
      
      return node.cloneNode(true);
    };
    
    // Process all child nodes
    const processedContent = document.createDocumentFragment();
    Array.from(tempDiv.childNodes).forEach(child => {
      processedContent.appendChild(wrapTextNodes(child));
    });
    
    // Replace element content
    element.innerHTML = '';
    element.appendChild(processedContent);
    
    // Trigger animation
    const spans = element.querySelectorAll('span');
    spans.forEach((span) => {
      // Random delay between 0 and 0.5s (adjust as needed)
      const randomDelay = Math.random() * 0.5; 
      span.style.transitionDelay = `${randomDelay}s`;
    });

    // Small delay to ensure transitions trigger
    setTimeout(() => {
      spans.forEach((span) => {
        span.style.transform = 'translateY(0)';
        span.style.opacity = '1';
      });
    }, 50);
  };

  return { elementRef, isVisible };
};