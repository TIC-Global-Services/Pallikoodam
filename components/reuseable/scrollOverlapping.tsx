"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Card {
    color: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    // badge?: React.ReactNode;
}

interface ScrollOverlappingCardsProps {
    heading: string | React.ReactNode;
    paragraph: string | React.ReactNode;
    cards: Card[];
}

const ScrollOverlappingCards: React.FC<ScrollOverlappingCardsProps> = ({
    heading,
    paragraph,
    cards,
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [containerHeight, setContainerHeight] = useState(400);
    const [cardWidth, setCardWidth] = useState('100%');
    const [cardMaxHeight, setCardMaxHeight] = useState('auto');

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;
            const isSmallHeightDesktop = window.innerWidth >= 768 && window.innerHeight < 768;
            const offset = isSmallHeightDesktop ? 2 : 5;
            const scrollMultiplier = isMobile ? 20 : isSmallHeightDesktop ? 75 : 100; // Reduced mobile to 30 for faster scroll

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 15%',
                    end: `+=${cards.length * scrollMultiplier}%`,
                    pin: true,
                    scrub: isMobile ? 0.2 : 1, // Lower scrub value = faster, snappier animations
                    anticipatePin: 1,
                },
            });

            cards.forEach((_, index) => {
                if (index === 0) {
                    tl.set(`.card-${index}`, { opacity: 1, yPercent: 0 });
                    return;
                }

                tl.fromTo(
                    `.card-${index}`,
                    { opacity: 0, yPercent: 100 },
                    { opacity: 1, yPercent: index * offset, duration: 0.5 } // Shorter duration
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [cards]);

    useEffect(() => {
        const updateSizes = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            if (width < 768) {
                setContainerHeight(380);
                setCardWidth('100%');
                setCardMaxHeight('380px');
            } else if (width < 1280) {
                setContainerHeight(400);
                setCardWidth('100%');
                setCardMaxHeight('400px');
            } else if (width < 1536) {
                setContainerHeight(500);
                setCardWidth('521px');
                setCardMaxHeight('521px');
            } else {
                setContainerHeight(600);
                setCardWidth('521px');
                setCardMaxHeight('521px');
            }
        };

        updateSizes();
        window.addEventListener('resize', updateSizes);
        return () => window.removeEventListener('resize', updateSizes);
    }, []);

    return (
        <section ref={sectionRef} className="scroll-section min-h-screen py-10 bg-background relative">
            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-x-[10%] w-full items-start  xl:px-0">
                    {/* Left Column: Static Text */}
                    <div className="left-content">
                        <h2 className="xl:text-[2.75rem] text-[1.25rem] tracking-tighter font-medium w-full font-hoves-pro">
                            {heading}
                        </h2>
                        <p className="text-[0.875rem] leading-[120%] max-w-sm md:max-w-lg xl:text-[1.25rem] font-regular font-inter-tight pt-2">
                            {paragraph}
                        </p>
                    </div>

                    {/* Right Column: Cards Container */}
                    <div className="right-content relative mb-10">
                        <div className="cards-container relative w-full" style={{ height: `${containerHeight}px` }}>
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`card card-${index} absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden shadow-lg p-8 md:p-10 flex flex-col justify-between`}
                                    style={{
                                        zIndex: index + 1,
                                        width: cardWidth,
                                        maxHeight: cardMaxHeight,
                                        backgroundColor: card.color
                                    }}
                                >
                                    <div className="flex justify-between items-start w-full">
                                        <h3 className="text-white text-3xl md:text-5xl font-medium tracking-tight font-inter-tight leading-none max-w-[70%]">
                                            {card.title}
                                        </h3>
                                        <div className="bg-white rounded-full p-4 flex items-center justify-center w-16 h-16 shrink-0 text-black">
                                            {card.icon}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        {/* {card.badge && (
                                            <div className="absolute -top-16 left-0">
                                                {card.badge}
                                            </div>
                                        )} */}
                                        <p className="text-white font-inter-tight text-lg md:text-2xl leading-tight">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollOverlappingCards;


