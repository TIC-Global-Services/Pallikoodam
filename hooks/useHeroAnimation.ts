import { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function useHeroAnimation(
    spacerRef: RefObject<HTMLDivElement | null>,
    containerRef: RefObject<HTMLDivElement | null>,
    videoRef: RefObject<HTMLVideoElement | null>,
    textRef: RefObject<HTMLDivElement | null>
) {
    useGSAP(
        () => {
            if (!spacerRef.current || !containerRef.current || !videoRef.current || !textRef.current) return;

            const spacer = spacerRef.current;
            const container = containerRef.current;
            const video = videoRef.current;
            const text = textRef.current;

            gsap.set(text, { opacity: 0 });

            // Using useGSAP handles cleanup natively; MatchMedia prevents resize bugs.
            const mm = gsap.matchMedia();

            mm.add('(min-width: 320px)', () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: spacer,
                        start: 'top top',
                        end: () => '+=' + window.innerHeight * 1.5,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                });

                ScrollTrigger.create({
                    trigger: spacer,
                    start: 'top top',
                    end: 'bottom top',
                    onLeave: () => {
                        if (container) gsap.set(container, { autoAlpha: 0 });
                        if (video) video.pause();
                    },
                    onEnterBack: () => {
                        if (container) gsap.set(container, { autoAlpha: 1 });
                        if (video) video.play().catch(() => {});
                    },
                });

                // Animate video from fullscreen to reduced size with rounded corners
                tl.to(video, {
                    width: '65%',
                    height: '65vh',
                    borderRadius: '24px',
                    volume: 0,
                    ease: 'power2.inOut',
                }).to(
                    text,
                    {
                        opacity: 1,
                        duration: 0.3,
                    },
                    '-=0.2'
                );
            });

            // Cleanup is automatically handled by `useGSAP`, so we omit `ScrollTrigger.getAll().forEach(kill)`
        },
        { scope: spacerRef } // Scope to the top-level ref
    );
}
