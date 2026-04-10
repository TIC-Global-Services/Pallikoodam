'use client';

import React, { createContext, useContext, useState, useMemo, useCallback, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface LoadingContextType {
    heroVideoLoaded: boolean;
    setHeroVideoLoaded: (loaded: boolean) => void;
    isGlobalAudioEnabled: boolean;
    setIsGlobalAudioEnabled: (enabled: boolean) => void;
    isFirstLoad: boolean;
    setIsFirstLoad: (isFirst: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
    const [heroVideoLoaded, setHeroVideoLoadedState] = useState(false);
    const [isGlobalAudioEnabled, setIsGlobalAudioEnabledState] = useState(false);
    const [isFirstLoad, setIsFirstLoadState] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsGlobalAudioEnabledState(false);
        setHeroVideoLoadedState(false);
    }, [pathname]);

    const setHeroVideoLoaded = useCallback((loaded: boolean) => {
        setHeroVideoLoadedState(loaded);
    }, []);

    const setIsGlobalAudioEnabled = useCallback((enabled: boolean) => {
        setIsGlobalAudioEnabledState(enabled);
    }, []);

    const setIsFirstLoad = useCallback((isFirst: boolean) => {
        setIsFirstLoadState(isFirst);
    }, []);

    const value = useMemo(() => ({
        heroVideoLoaded,
        setHeroVideoLoaded,
        isGlobalAudioEnabled,
        setIsGlobalAudioEnabled,
        isFirstLoad,
        setIsFirstLoad
    }), [heroVideoLoaded, isGlobalAudioEnabled, setHeroVideoLoaded, setIsGlobalAudioEnabled, isFirstLoad, setIsFirstLoad]);

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
}
