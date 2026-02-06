import React, { useEffect, useRef, useMemo, ReactNode, RefObject, ReactElement } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // Recursive function to split text nodes into individual words wrapped in spans
  const processContent = (content: ReactNode): ReactNode => {
    return React.Children.map(content, (child) => {
      // Handle null/undefined
      if (child === null || child === undefined) return child;

      // Handle strings: split into words
      if (typeof child === 'string') {
        if (child.trim().length === 0) return child;
        return child.split(/(\s+)/).map((word, index) => {
          if (word.match(/^\s+$/)) return word; // Preserve whitespace
          return (
            <span className="inline-block word" key={index}>
              {word}
            </span>
          );
        });
      }

      // Handle React Elements (recursive)
      if (React.isValidElement(child)) {
        const element = child as ReactElement<any>;

        // Skip elements that are already word spans
        if (element.props?.className?.includes('word')) return child;

        // Handle Fragments specifically
        if (element.type === React.Fragment) {
          return (
            <React.Fragment key={element.key}>
              {processContent(element.props.children)}
            </React.Fragment>
          );
        }

        // If the element has children, process them recursively
        if (element.props.children) {
          const processedChildren = processContent(element.props.children);
          return React.cloneElement(element, { ...element.props }, processedChildren);
        }
      }

      return child;
    });
  };

  const splitText = useMemo(() => {
    return processContent(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use window as default scroller if ref is missing/null
    const scroller = scrollContainerRef?.current || window;

    // Ensure ScrollTrigger correctly calculates the layout after splitting
    ScrollTrigger.refresh();

    // Animate the container rotation
    gsap.fromTo(
      el,
      { transformOrigin: '0% 60%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>('.word');

    if (wordElements.length > 0) {
      // Animate opacity of words
      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: 'opacity' },
        {
          ease: 'none',
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );

      if (enableBlur) {
        // Animate blur of words
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: 'none',
            filter: 'blur(0px)',
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=20%',
              end: wordAnimationEnd,
              scrub: true
            }
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, splitText]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <div className={`text-[clamp(1.6rem,4vw,2.5rem)] leading-[41.1px] max-w-[89vw] tracking-tighter font-medium ${textClassName}`}>
        {splitText}
      </div>
    </div>
  );
};

export default ScrollReveal;
