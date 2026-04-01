"use client"
import Image from 'next/image'
import AudioWave from './audiowave'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { MenuIcon } from './menuicon'
import Link from 'next/link'
import ContainerLayout from '@/layout/ContainerLayout'
import { useLoading } from '@/context/LoadingContext'

// Custom Hooks for Architecture and Optimization
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { useLightSectionDetection } from '@/hooks/useLightSectionDetection';
import { useMenuAnimation } from '@/hooks/useMenuAnimation';

const Navbar = () => {
    const { isGlobalAudioEnabled, setIsGlobalAudioEnabled } = useLoading();
    const pathname = usePathname();
    const menuBtnRef = useRef<HTMLButtonElement>(null);
    const menuSfxRef = useRef<HTMLAudioElement | null>(null);

    // Encapsulated UI logic and GSAP animations
    const isHidden = useNavbarScroll();
    const isLightSection = useLightSectionDetection();
    const { overlayRef, menuItemsRef, menuOpen, toggleMenu } = useMenuAnimation();

    const [isOpen, setIsOpen] = useState<boolean | null>(null);

    // Operating hours calculation
    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const hours = now.getHours();
            // User requested 9 - 4
            setIsOpen(hours >= 9 && hours < 16);
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    const handleToggleMenu = () => {
        // Play sound effect smoothly
        if (menuSfxRef.current) {
            menuSfxRef.current.currentTime = 0;
            menuSfxRef.current.play().catch(e => console.log('Audio play failed:', e));
        }
        toggleMenu();
    };

    const toggleAudio = () => {
        setIsGlobalAudioEnabled(!isGlobalAudioEnabled);
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
        <nav className={`${pathname === '/' ? 'fixed' : 'absolute'} top-0 left-0 w-full z-50 transition-transform duration-500 ${isHidden ? '-translate-y-full' : '-translate-y-0'} bg-transparent text-white`}>
            <ContainerLayout>
                <div className="flex justify-between gap-4 items-center">
                    <Link href="/">
                        <Image src="/Raks_Logo.png" alt="RAKS_Logo.png" width={120} height={50} className="cursor-pointer w-20 h-10  md:w-[100px] md:h-[50px]"/>
                    </Link>
                    <div className="flex gap-10 items-center">
                        {/* Status Indicator */}
                        {isOpen !== null && (
                            <div className="hidden lg:flex flex-col items-end gap-0 uppercase">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-[#00FF00]' : 'bg-[#FF0000]'}`} />
                                    <span className={`text-[12px] md:text-sm font-bold tracking-wider ${isLightSection ? 'text-black' : 'text-white'}`}>
                                        {isOpen ? 'OPEN' : 'CLOSED'} — 9AM - 4PM
                                    </span>
                                </div>
                                <span className={`text-[10px] md:text-[11px] font-medium tracking-tight opacity-80 ${isLightSection ? 'text-black' : 'text-white'}`}>
                                    COIMBATORE, INDIA
                                </span>
                            </div>
                        )}

                        <button
                            onClick={toggleAudio}
                            suppressHydrationWarning={true}
                            className="group flex flex-col items-center justify-center mx-auto gap-2 cursor-pointer"
                        >
                            <AudioWave isPlaying={isGlobalAudioEnabled} isLightSection={isLightSection} />

                            <p className="text-[10px] md:text-sm tracking-wide">
                                <span
                                    className={
                                        isGlobalAudioEnabled
                                            ? "text-[#000086]"
                                            : isLightSection
                                                ? "text-[#000086]"
                                                : "text-[#000086]"
                                    }
                                >
                                    AUDIO
                                </span>{" "}
                                <span
                                    className={`font-bold ${isGlobalAudioEnabled
                                        ? "text-[#000086]"
                                        : isLightSection
                                            ? "text-[#000086]"
                                            : "text-[#000086]"
                                        }`}
                                >
                                    {isGlobalAudioEnabled ? "ON" : "OFF"}
                                </span>
                            </p>
                        </button>

                        <Link href={'/admissions'} className=" hidden md:flex bg-[#000086] hover:bg-[#0c0cbc] text-white py-2 px-4 rounded-md transition-colors duration-200  items-center justify-center gap-2 cursor-pointer font-normal uppercase  text-sm md:text-base">
                            Admission
                        </Link>

                        <div className="relative">
                            <MenuIcon ref={menuBtnRef} isOpen={menuOpen} onClick={handleToggleMenu} />

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
                                                        onClick={toggleMenu} // Clean close without sound effect
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
    )
}

export default Navbar;