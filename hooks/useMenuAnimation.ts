import { useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function useMenuAnimation() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<HTMLUListElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const { contextSafe } = useGSAP();

    const openMenu = contextSafe(() => {
        setMenuOpen(true);
        if (!overlayRef.current) return;

        gsap.set(overlayRef.current, {
            opacity: 0,
            y: -20,
            visibility: 'visible',
            pointerEvents: 'auto',
        });

        gsap.to(overlayRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power3.out',
        });

        if (menuItemsRef.current?.children) {
            gsap.fromTo(
                menuItemsRef.current.children,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 0.3,
                    ease: 'power2.out',
                    delay: 0.1,
                }
            );
        }
    });

    const closeMenu = contextSafe(() => {
        if (!menuOpen) return;
        setMenuOpen(false);

        if (menuItemsRef.current?.children) {
            gsap.to(menuItemsRef.current.children, {
                y: -10,
                opacity: 0,
                stagger: 0.03,
                duration: 0.2,
                ease: 'power2.in',
            });
        }

        if (overlayRef.current) {
            gsap.to(overlayRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: 'power3.in',
                onComplete: () => {
                    gsap.set(overlayRef.current, {
                        pointerEvents: 'none',
                        visibility: 'hidden',
                    });
                },
            });
        }
    });

    const toggleMenu = useCallback(() => {
        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }, [menuOpen, openMenu, closeMenu]);

    return {
        overlayRef,
        menuItemsRef,
        menuOpen,
        toggleMenu,
        closeMenu,
    };
}
