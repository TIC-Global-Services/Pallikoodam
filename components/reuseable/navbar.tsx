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
    const isHome = pathname === '/';

    useEffect(() => {
        // Initialize menu sound effect (optional - add your sound file path)
        // menuSfxRef.current = new Audio('/sounds/menu-click.mp3');

        if (isHome) {
            const trigger = ScrollTrigger.create({
                trigger: "section", // First section is Hero
                start: "bottom top",
                onEnter: () => setIsHidden(true),
                onLeaveBack: () => setIsHidden(false),
            });

            return () => {
                trigger.kill();
            };
        }
    }, [isHome]);

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
        }
    };
    const updateLightSection = () => {
        requestAnimationFrame(() => {
            const isLight = getSectionUnderNavbar();
            setIsLightSection(isLight);
        });
    };
    const getSectionUnderNavbar = () => {
        const nav = document.querySelector("nav");
        const sections = document.querySelectorAll("section");

        if (!nav) return false;

        const y = nav.getBoundingClientRect().bottom + 1;

        for (const section of sections) {
            const rect = section.getBoundingClientRect();

            if (rect.top <= y && rect.bottom > y) {
                return section.classList.contains("light");
            }
        }

        return false;
    };
    const toggleAudio = async () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/Kids-Songs.mp3");
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
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'ACADEMICS', href: '/academics' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <>
            <nav className={`w-full z-50 transition-all duration-500  ${isHome ? `fixed top-0 left-0 bg-transparent ${isHidden ? '-translate-y-full' : 'translate-y-0'}` : 'relative bg-white'}`}>
                <ContainerLayout>
                    <div className="flex justify-between gap-4 items-center">
                        <Image src="/Raks_Logo.png" alt="Raks_Logo.png" width={120} height={50} />
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
                                                ? "text-primary"
                                                : isLightSection
                                                    ? "text-black"
                                                    : "text-black"
                                        }
                                    >
                                        AUDIO
                                    </span>{" "}
                                    <span
                                        className={`font-bold ${isPlaying
                                            ? "text-primary"
                                            : isLightSection
                                                ? "text-black"
                                                : "text-black"
                                            }`}
                                    >
                                        {isPlaying ? "ON" : "OFF"}
                                    </span>
                                </p>
                            </button>

                            <Link href={'/admission'} className=" hidden md:flex bg-[#000086] hover:bg-[#0c0cbc] text-white py-2 px-4 rounded-md transition-colors duration-200  items-center justify-center gap-2 cursor-pointer font-normal uppercase  text-sm md:text-base">
                                Admission
                            </Link>

                            <div className="relative">
                                <MenuIcon ref={menuBtnRef} isOpen={menuOpen} onClick={toggleMenu} />

                                {/* Dropdown Menu */}
                                <div
                                    ref={overlayRef}
                                    className="absolute top-full right-0 mt-2 bg-[#000086] rounded-2xl shadow-2xl invisible pointer-events-none overflow-hidden"
                                    style={{ minWidth: '380px' }}
                                >
                                    <div className="p-6 py-10">
                                        <ul ref={menuItemsRef} className="space-y-4">
                                            {menuItems.map((item) => {
                                                const isActive = pathname === item.href;
                                                return (
                                                    <li key={item.name} className="overflow-hidden">
                                                        <Link
                                                            href={item.href}
                                                            onClick={toggleMenu}
                                                            className="text-[clamp(16px,10vw,2rem)] font-[500] text-white hover:text-gray-400 transition-colors duration-300 block relative group flex items-center justify-between"
                                                        >
                                                            {item.name}
                                                            {isActive && (
                                                                <span className="inline-block w-3 h-3 bg-white rounded-full group-hover:bg-gray-400 transition-colors"></span>
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