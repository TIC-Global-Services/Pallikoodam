import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useLightSectionDetection() {
    const [isLightSection, setIsLightSection] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('section'));
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        const index = sections.indexOf(target);

                        if (pathname === '/' && index === 0) {
                            
                            setIsLightSection(window.scrollY > 500);
                        } else {
                            setIsLightSection(target.classList.contains('light'));
                        }
                    }
                }
            },
            {
               
                rootMargin: '-80px 0px -80% 0px',
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
        
        const handleScroll = () => {
            if (pathname === '/') {
                if (!scrollTimeout) {
                    scrollTimeout = setTimeout(() => {
                        const navAreaY = 81; 
                        const heroRect = sections[0]?.getBoundingClientRect();
                        
                        if (heroRect && heroRect.top <= navAreaY && heroRect.bottom > navAreaY) {
                            setIsLightSection(window.scrollY > 500);
                        }
                        scrollTimeout = null;
                    }, 100); 
                }
            }
        };

        if (pathname === '/') {
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); 
        }

        return () => {
            observer.disconnect();
            if (pathname === '/') {
                window.removeEventListener('scroll', handleScroll);
                if (scrollTimeout) clearTimeout(scrollTimeout);
            }
        };
    }, [pathname]);

    return isLightSection;
}
