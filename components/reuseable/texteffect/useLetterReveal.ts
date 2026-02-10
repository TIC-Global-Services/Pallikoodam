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
    const words = text.split(/(\s+)/); // keeps spaces
    const fragment = document.createDocumentFragment();

    words.forEach((word, index) => {
      if (word.trim() === '') {
        fragment.appendChild(document.createTextNode(word));
      } else {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.display = 'inline-block';
        span.style.filter = 'blur(10px)';
        span.style.opacity = '0';
        span.style.transform = 'translateY(6px)';
        span.style.transition = `
          filter 0.3s ease,
          opacity 0.3s ease,
          transform 0.3s ease
        `;
        span.style.transitionDelay = `${index * 5}ms`;

        fragment.appendChild(span);
      }
    });

    return fragment;
  }

  if (node.nodeType === Node.ELEMENT_NODE) {
    const newElement = node.cloneNode(false) as Element;
    node.childNodes.forEach(child => {
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
    spans.forEach((span, index) => {
      setTimeout(() => {
        (span as HTMLElement).style.filter = 'blur(0px)';
        (span as HTMLElement).style.opacity = '1';
      }, 50 + (index * 15));
    });
  };

  return { elementRef, isVisible };
};