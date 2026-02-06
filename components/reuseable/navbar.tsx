"use client"
import React from 'react'
import Image from 'next/image'
import AudioWave from './audiowave'
import { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { MenuIcon } from './menuicon'
import Link from 'next/link'
import ContainerLayout from '@/layout/ContainerLayout'

const navbar = () => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<HTMLUListElement>(null);
    const imagesRef = useRef<HTMLDivElement[]>([]);

    const menuBtnRef = useRef<HTMLButtonElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLightSection, setIsLightSection] = useState(false);
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const colLeft = useRef<HTMLDivElement[]>([]);
    const colRight = useRef<HTMLDivElement[]>([]);
    const [showPopup, setShowPopup] = useState(false);

    const pathname = usePathname();
    const toggleMenu = () => {
        if (!menuBtnRef.current || !overlayRef.current) return;

        const rect = menuBtnRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        if (!menuOpen) {
            setMenuOpen(true);

            gsap.set(overlayRef.current, {
                clipPath: `circle(0px at ${cx}px ${cy}px)`,
                visibility: "visible",
                pointerEvents: "auto",
            });

            gsap.to(overlayRef.current, {
                clipPath: `circle(150vmax at ${cx}px ${cy}px)`,
                duration: 1,
                ease: "power4.inOut",
            });

            gsap.fromTo(
                menuItemsRef.current?.children || [],
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: 0.4,
                },
            );

            // Animate close button appearance
            gsap.to(closeBtnRef.current, {
                scale: 1,
                rotate: 0,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                delay: 0.3,
            });
        } else {
            setMenuOpen(false);

            gsap.to(menuItemsRef.current?.children || [], {
                y: 40,
                opacity: 0,
                stagger: 0.05,
                duration: 0.3,
                ease: "power3.in",
            });

            gsap.to(overlayRef.current, {
                clipPath: `circle(0px at ${cx}px ${cy}px)`,
                duration: 0.8,
                ease: "power4.inOut",
                onComplete: () => {
                    gsap.set(overlayRef.current, {
                        pointerEvents: "none",
                        visibility: "hidden",
                    });

                    updateLightSection();
                },
            });

            // Hide close button
            gsap.to(closeBtnRef.current, {
                scale: 0,
                rotate: -90,
                opacity: 0,
                duration: 0.4,
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
        if (audioRef.current) {
            try {
                if (isPlaying) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                } else {
                    // Notify others to stop before we start
                    window.dispatchEvent(
                        new CustomEvent("global-audio-play", {
                            detail: { source: "navbar" },
                        }),
                    );

                    await audioRef.current.play();
                    setIsPlaying(true);
                }
            } catch (error) {
                console.error("Audio playback failed:", error);
                setIsPlaying(false);
            }
        }
    };

    const isHome = pathname === '/';

    return (
        <nav className={`w-full z-50 transition-all duration-300 ${isHome ? 'absolute top-0 left-0 bg-transparent' : 'relative bg-white'}`}>
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
                                                ? "text-[#000086]"
                                                : "text-[#000086]"
                                    }
                                >
                                    AUDIO
                                </span>{" "}
                                <span
                                    className={`font-bold ${isPlaying
                                        ? "text-primary"
                                        : isLightSection
                                            ? "text-[#000086]"
                                            : "text-[#000086]"
                                        }`}
                                >
                                    {isPlaying ? "ON" : "OFF"}
                                </span>
                            </p>
                        </button>

                        <Link href={'/admission'} className=" hidden md:flex bg-[#000086] hover:bg-[#0c0cbc] text-white py-2 px-4 rounded-md transition-colors duration-200  items-center justify-center gap-2 cursor-pointer font-normal uppercase  text-sm md:text-base">
                            {/* <Image
                        src="/shopicon.png"
                        alt="Store"
                        width={18}
                        height={18}
                        className="object-contain w-[15px] md:w-[18px]"
                    /> */}
                            Admission
                        </Link>

                        <MenuIcon ref={menuBtnRef} isOpen={menuOpen} onClick={toggleMenu} />
                    </div>
                </div>
            </ContainerLayout>
        </nav>
    )
}

export default navbar