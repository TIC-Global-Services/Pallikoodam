'use client';
import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/context/LoadingContext';
import Image from 'next/image';
import bgImage1 from '@/assets/home/bg-image-1.png';
import bgImage2 from '@/assets/home/bg-image-2.png';
import bgImage3 from '@/assets/home/bg-image-3.png';
import bgImage4 from '@/assets/home/bg-image-4.png';

export default function Loader() {
    const pathname = usePathname();
    const { heroVideoLoaded, isFirstLoad, setIsFirstLoad } = useLoading();
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [iconIndex, setIconIndex] = useState(0);

    const icons = [bgImage1, bgImage2, bgImage3, bgImage4];

    const heroVideoLoadedRef = useRef(heroVideoLoaded);
    const pathnameRef = useRef(pathname);

    useEffect(() => {
        heroVideoLoadedRef.current = heroVideoLoaded;
        pathnameRef.current = pathname;
    }, [heroVideoLoaded, pathname]);

    // Initial load state and route change state
    useEffect(() => {
        if (!isFirstLoad) {
            setIsLoading(false);
            return;
        }

        console.log("Hero video loaded status:", heroVideoLoadedRef.current);

        setIsLoading(true);
        setProgress(0);

        const duration = 1200; // Total duration in ms
        const intervalTime = 20; // Update frequency in ms
        const steps = duration / intervalTime;
        let currentStep = 0;

        const maxWaitTime = 5000; // 5 seconds fallback
        const startTime = Date.now();

        const interval = setInterval(() => {
            currentStep++;
            let calculatedProgress = Math.floor((currentStep / steps) * 100);

            const timeElapsed = Date.now() - startTime;

            // If we are on the home page, stall at 99% until the video loads or timeout hits
            if (pathnameRef.current === '/' && !heroVideoLoadedRef.current && timeElapsed < maxWaitTime) {
                calculatedProgress = Math.min(99, calculatedProgress);
            } else {
                calculatedProgress = Math.min(100, Math.max(calculatedProgress, 100)); // Ensure it hits 100 if sequence finishes or fallback hits
            }

            setProgress(calculatedProgress);

            if (calculatedProgress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                    setIsFirstLoad(false);
                }, 200); // Small buffer after hitting 100
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [isFirstLoad, setIsFirstLoad]);

    // Cycling icons effect
    useEffect(() => {
        if (!isLoading) return;
        const iconInterval = setInterval(() => {
            setIconIndex(prev => (prev + 1) % icons.length);
        }, 200); // Change icon every 200ms
        return () => clearInterval(iconInterval);
    }, [isLoading, icons.length]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000086] transition-opacity duration-500 ease-in-out">
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                {/* Changing Icons Loader */}
                <div className="w-[50vw] h-[20vh] translate-x-[1/2] bottom-[-15%] absolute overflow-hidden">
                    <Image
                        src={icons[iconIndex]}
                        alt={`loading-icon-${iconIndex}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <h2 className="text-white text-xl md:text-2xl font-light tracking-widest font-ppe uppercase">Loading</h2>
                    {/* Optionally keep progress percentage if you want, or just wait for 100 on the icons */}
                    <span className="text-white text-xl md:text-2xl font-light font-ppe">{progress}%</span>
                </div>
            </div>
        </div>
    );
}
