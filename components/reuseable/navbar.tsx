"use client"
import Image from 'next/image'
import AudioWave from './audiowave'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { MenuIcon } from './menuicon'
import Link from 'next/link'
import ContainerLayout from '@/layout/ContainerLayout'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const navbar = () => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<HTMLUListElement>(null);
    const menuBtnRef = useRef<HTMLButtonElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLightSection, setIsLightSection] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    // Optional: Add sound effect support
    const menuSfxRef = useRef<HTMLAudioElement | null>(null);

    const pathname = usePathname();
    const isTransparentRoute = pathname === '/';

    useEffect(() => {
        let trigger: globalThis.ScrollTrigger | null = null;

        // Wait briefly for the new page's <section> to be mounted in the DOM
        const timer = setTimeout(() => {
            trigger = ScrollTrigger.create({
                trigger: "section", // First section of any page
                start: "bottom top",
                onEnter: () => setIsHidden(true),
                onLeaveBack: () => setIsHidden(false),
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            if (trigger) trigger.kill();
        };
    }, [pathname]);

    const closeMenu = () => {
        if (!menuOpen) return;
        setMenuOpen(false);

        gsap.to(menuItemsRef.current?.children || [], {
            y: -10,
            opacity: 0,
            stagger: 0.03,
            duration: 0.2,
            ease: "power2.in",
        });

        gsap.to(overlayRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power3.in",
            onComplete: () => {
                gsap.set(overlayRef.current, {
                    pointerEvents: "none",
                    visibility: "hidden",
                });
            },
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (menuOpen) {
                closeMenu();
            }
        };

        if (menuOpen) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

    const toggleMenu = () => {
        if (!overlayRef.current) return;

        // Play sound effect (optional)
        if (menuSfxRef.current) {
            menuSfxRef.current.currentTime = 0;
            menuSfxRef.current.play().catch(e => console.log('Audio play failed:', e));
        }

        if (!menuOpen) {
            setMenuOpen(true);

            gsap.set(overlayRef.current, {
                opacity: 0,
                y: -20,
                visibility: "visible",
                pointerEvents: "auto",
            });

            gsap.to(overlayRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power3.out",
            });

            gsap.fromTo(
                menuItemsRef.current?.children || [],
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 0.3,
                    ease: "power2.out",
                    delay: 0.1,
                },
            );
        } else {
            closeMenu();
        }
    };
    const updateLightSection = () => {
        requestAnimationFrame(() => {
            const isLight = getSectionUnderNavbar();
            setIsLightSection(isLight);
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", updateLightSection);
        updateLightSection();

        return () => window.removeEventListener("scroll", updateLightSection);
    }, []);

    const getSectionUnderNavbar = () => {
        const nav = document.querySelector("nav");
        const sections = Array.from(document.querySelectorAll("section"));

        if (!nav) return false;

        const y = nav.getBoundingClientRect().bottom + 1;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();

            if (rect.top <= y && rect.bottom > y) {
                if (pathname === '/' && i === 0) {
                    return window.scrollY > 500;
                }
                return section.classList.contains("light");
            }
        }

        return false;
    };
    const toggleAudio = async () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/pallikoodam-audio.mp3");
            audioRef.current.loop = true;
        }

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                console.error("Audio playback failed:", error);
                setIsPlaying(false);
            }
        }
    };


    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'Grammar of RAKS', href: '/grammar-of-raks' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Learning @ RAKS', href: '/learning-at-raks' },
        { name: 'Hidden Curriculum @ RAKS', href: '/hiddencurricular-at-raks' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Events', href: '/news-and-events' },
        { name: 'Contact us', href: '/contact-us' },
    ];

    return (
        <>
            <nav className={`${pathname === '/' ? 'fixed' : 'absolute'} top-0 left-0 w-full z-50 transition-transform duration-500 ${isHidden ? '-translate-y-full' : '-translate-y-0'} bg-transparent text-white`}>
                <ContainerLayout>
                    <div className="flex justify-between gap-4 items-center">
                        <Link href="/">
                            <Image src="/Raks_Logo.png" alt="RAKS_Logo.png" width={120} height={50} className="cursor-pointer w-20 h-10  md:w-[100px] md:h-[50px]"/>
                        </Link>
                        <div className="flex gap-10 items-center">
                            <button
                                onClick={toggleAudio}
                                suppressHydrationWarning={true}
                                className="group flex flex-col items-center justify-center mx-auto gap-2 cursor-pointer"
                            >
                                <AudioWave isPlaying={isPlaying} isLightSection={isLightSection} />

                                <p className="text-[10px] md:text-sm tracking-wide">
                                    <span
                                        className={
                                            isPlaying
                                                ? "text-black"
                                                : isLightSection
                                                    ? "text-black"
                                                    : "text-white"
                                        }
                                    >
                                        AUDIO
                                    </span>{" "}
                                    <span
                                        className={`font-bold ${isPlaying
                                            ? "text-black"
                                            : isLightSection
                                                ? "text-black"
                                                : "text-white"
                                            }`}
                                    >
                                        {isPlaying ? "ON" : "OFF"}
                                    </span>
                                </p>
                            </button>

                            <Link href={'/admissions'} className=" hidden md:flex bg-[#000086] hover:bg-[#0c0cbc] text-white py-2 px-4 rounded-md transition-colors duration-200  items-center justify-center gap-2 cursor-pointer font-normal uppercase  text-sm md:text-base">
                                Admission
                            </Link>

                            <div className="relative">
                                <MenuIcon ref={menuBtnRef} isOpen={menuOpen} onClick={toggleMenu} />

                                {/* Dropdown Menu */}
                                <div
                                    ref={overlayRef}
                                    className="absolute top-full right-0 mt-4 bg-[#000086] rounded-3xl shadow-2xl invisible pointer-events-none overflow-hidden w-[85vw] max-w-[320px] sm:max-w-[400px]"

                                >
                                    <div className="px-6 py-8 sm:p-10 sm:py-12">
                                        <ul ref={menuItemsRef} className="flex flex-col gap-4 sm:gap-5">
                                            {menuItems.map((item) => {
                                                const isActive = pathname === item.href;
                                                return (
                                                    <li key={item.name} className="overflow-hidden">
                                                        <Link
                                                            href={item.href}
                                                            onClick={toggleMenu}
                                                            className="group flex flex-row items-center justify-between text-[1.4rem] sm:text-[1.8rem] font-medium text-white hover:text-white/70 transition-colors duration-300 leading-[1.2]"
                                                        >
                                                            <span className="pr-4 tracking-tight">{item.name}</span>
                                                            {isActive && (
                                                                <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full transition-colors shrink-0"></span>
                                                            )}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </nav>
        </>
    )
}

export default navbar