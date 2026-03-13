'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/context/LoadingContext';

export default function Loader() {
    const pathname = usePathname();
    const { heroVideoLoaded } = useLoading();
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    // Initial load state and route change state
    useEffect(() => {
        setIsLoading(true);
        setProgress(0);

        const duration = 1200; // Total duration in ms
        const intervalTime = 20; // Update frequency in ms
        const steps = duration / intervalTime;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            let calculatedProgress = Math.floor((currentStep / steps) * 100);

            // If we are on the home page, stall at 99% until the video loads
            if (pathname === '/' && !heroVideoLoaded) {
                calculatedProgress = Math.min(99, calculatedProgress);
            } else {
                calculatedProgress = Math.min(100, calculatedProgress);
            }

            setProgress(calculatedProgress);

            if (calculatedProgress === 100) {
                clearInterval(interval);
                setTimeout(() => setIsLoading(false), 200); // Small buffer after hitting 100
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [pathname, heroVideoLoaded]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000086] transition-opacity duration-500 ease-in-out">
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                <div className="flex items-center space-x-2">
                    <h2 className="text-white text-xl md:text-2xl font-light tracking-widest font-ppe uppercase">Loading</h2>
                    <span className="text-white text-xl md:text-2xl font-light font-ppe">{progress}%</span>
                </div>
            </div>
        </div>
    );
}
