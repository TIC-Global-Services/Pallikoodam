import { useEffect, useRef, useState } from "react";

export const useLineReveal = <T extends HTMLElement = HTMLElement>(threshold: number = 0.1) => {
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
    
    // Function to wrap text nodes with spans (word-level)
    const wrapTextNodes = (node: Node): Node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        const words = text.split(/(\s+)/); // keeps spaces
        const fragment = document.createDocumentFragment();

        words.forEach((word) => {
          if (word.trim() === '') {
            fragment.appendChild(document.createTextNode(word));
          } else {
            const span = document.createElement('span');
            span.textContent = word;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(4px)';
            span.style.transition = 'opacity 0.25s ease-out, transform 0.25s ease-out';
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
    
    // Group words into visual lines based on their offsetTop position
    const wordSpans = Array.from(element.querySelectorAll('span')) as HTMLElement[];
    const lines: HTMLElement[][] = [];
    
    wordSpans.forEach(word => {
      const top = word.offsetTop;
      const lastLine = lines[lines.length - 1];
      
      if (!lastLine || lastLine[0].offsetTop !== top) {
        // New line detected
        lines.push([word]);
      } else {
        // Same line as previous word
        lastLine.push(word);
      }
    });
    
    // Animate lines sequentially with fast timing
    requestAnimationFrame(() => {
      lines.forEach((line, lineIndex) => {
        setTimeout(() => {
          line.forEach(word => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
          });
        }, lineIndex * 40); // Fast 40ms delay between lines
      });
    });
  };

  return { elementRef, isVisible };
};