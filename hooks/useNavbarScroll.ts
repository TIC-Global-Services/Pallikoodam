import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useNavbarScroll() {
    const [isHidden, setIsHidden] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let trigger: globalThis.ScrollTrigger | null = null;
        
        setIsHidden(false);

        const timer = setTimeout(() => {
            trigger = ScrollTrigger.create({
                trigger: 'section', 
                start: 'bottom top',
                onEnter: () => setIsHidden(true),
                onLeaveBack: () => setIsHidden(false),
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            if (trigger) trigger.kill();
        };
    }, [pathname]);

    return isHidden;
}
