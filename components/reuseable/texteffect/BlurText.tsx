"use client";
import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string | React.ReactNode;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
  threshold?: number;
}

export default function BlurText({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  threshold = 0.3,
}: BlurTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<number[]>([]);

  const [isVisible, setIsVisible] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);

  /* ===============================
     INTERSECTION OBSERVER
  =============================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [threshold]);

  /* ===============================
     PROCESS TEXT NODES INTO SPANS
  =============================== */
  useEffect(() => {
    if (!contentRef.current || isProcessed) return;

    const processTextNodes = (node: Node): Node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        const items = animateBy === "words" ? text.split(/(\s+)/) : text.split("");
        const fragment = document.createDocumentFragment();

        items.forEach((item) => {
          if (animateBy === "words" && item.trim() === '') {
            // Preserve whitespace as text node
            fragment.appendChild(document.createTextNode(item));
          } else if (item) {
            const span = document.createElement('span');
            span.textContent = item;
            span.className = 'blur-text-item';
            span.style.display = 'inline-block';
            span.style.filter = 'blur(10px)';
            span.style.opacity = '0';
            span.style.transform = getTransformStyle(false);
            span.style.transition = 'all 0.5s ease-out';
            fragment.appendChild(span);
          }
        });

        return fragment;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const clone = node.cloneNode(false) as Element;
        Array.from(node.childNodes).forEach(child => {
          clone.appendChild(processTextNodes(child));
        });
        return clone;
      }

      return node.cloneNode(true);
    };

    // Process all child nodes
    const processed = document.createDocumentFragment();
    Array.from(contentRef.current.childNodes).forEach(child => {
      processed.appendChild(processTextNodes(child));
    });

    contentRef.current.innerHTML = '';
    contentRef.current.appendChild(processed);
    setIsProcessed(true);
  }, [animateBy]);

  /* ===============================
     PLAY / RESET ANIMATION
  =============================== */
  useEffect(() => {
    if (!contentRef.current || !isProcessed) return;

    // Clear any running timeouts
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    const spans = contentRef.current.querySelectorAll('.blur-text-item') as NodeListOf<HTMLElement>;

    if (!isVisible) {
      // RESET when out of view
      spans.forEach(span => {
        span.style.filter = 'blur(10px)';
        span.style.opacity = '0';
        span.style.transform = getTransformStyle(false);
      });
      return;
    }

    // PLAY when in view
    spans.forEach((span, index) => {
      const timeout = window.setTimeout(() => {
        span.style.filter = 'blur(0px)';
        span.style.opacity = '1';
        span.style.transform = getTransformStyle(true);
      }, index * delay);

      timeoutsRef.current.push(timeout);
    });

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, [isVisible, delay, isProcessed]);

  /* ===============================
     TRANSFORM DIRECTION
  =============================== */
  const getTransformStyle = (isAnimated: boolean) => {
    if (isAnimated) return "translate(0, 0)";

    switch (direction) {
      case "top":
        return "translateY(-20px)";
      case "bottom":
        return "translateY(20px)";
      case "left":
        return "translateX(-20px)";
      case "right":
        return "translateX(20px)";
      default:
        return "translateY(-20px)";
    }
  };

  return (
    <div ref={containerRef} className={className}>
      <div ref={contentRef}>
        {text}
      </div>
    </div>
  );
}
