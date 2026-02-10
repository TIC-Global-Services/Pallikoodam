"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useLetterReveal } from './texteffect/useLetterReveal';
import BlurText from './texteffect/BlurText';

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
     const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;
            const isSmallHeight = window.innerHeight < 700;
            const isSmallHeightDesktop = window.innerWidth >= 768 && isSmallHeight;

            // Adjust offset based on screen size
            let offset = 5;
            if (isSmallHeight && isMobile) {
                offset = 1;
            } else if (isSmallHeightDesktop) {
                offset = 2;
            }

            // Adjust scroll multiplier for better control
            let scrollMultiplier = 100;
            if (isMobile) {
                scrollMultiplier = isSmallHeight ? 15 : 20;
            } else if (isSmallHeightDesktop) {
                scrollMultiplier = 50;
            }

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: isSmallHeight ? 'top 10%' : 'top 5%',
                    end: `+=${cards.length * scrollMultiplier}%`,
                    pin: true,
                    scrub: isMobile ? 0.2 : 1,
                    anticipatePin: 1,
                },
            });

            // Set initial state for first card immediately
            gsap.set(`.card-0`, { yPercent: 0, xPercent: 0, rotation: 0 });

            // Set other cards below the view initially
            cards.forEach((_, index) => {
                if (index > 0) {
                    gsap.set(`.card-${index}`, { yPercent: 250, xPercent: 10, rotation: -20 });
                }
            });

            cards.forEach((_, index) => {
                if (index === 0) return;

                tl.to(
                    `.card-${index}`,
                    { yPercent: index * offset, xPercent: 0, rotation: 0, duration: 0.4, ease: "power2.out" }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [cards]);

    useEffect(() => {
        const updateSizes = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const isSmallHeight = height < 700;
            const isVerySmallHeight = height < 600;

            if (width < 768) {
                // Mobile
                let mobileHeight = 380;
                if (isVerySmallHeight) {
                    mobileHeight = Math.min(height * 0.5, 280);
                } else if (isSmallHeight) {
                    mobileHeight = Math.min(height * 0.55, 320);
                }
                setContainerHeight(mobileHeight);
                setCardWidth('100%');
                setCardMaxHeight(`${mobileHeight}px`);
            } else if (width < 1280) {
                // Tablet
                let tabletHeight = 500;
                if (isVerySmallHeight) {
                    tabletHeight = Math.min(height * 0.55, 320);
                } else if (isSmallHeight) {
                    tabletHeight = Math.min(height * 0.6, 380);
                }
                setContainerHeight(tabletHeight);
                setCardWidth('100%');
                setCardMaxHeight(`${tabletHeight}px`);
            } else if (width < 1536) {
                // Desktop
                let desktopHeight = 500;
                if (isVerySmallHeight) {
                    desktopHeight = Math.min(height * 0.55, 350);
                } else if (isSmallHeight) {
                    desktopHeight = Math.min(height * 0.6, 400);
                }
                setContainerHeight(desktopHeight);
                setCardWidth('521px');
                setCardMaxHeight(`${desktopHeight}px`);
            } else {
                // Large Desktop
                let largeHeight = 500;
                if (isVerySmallHeight) {
                    largeHeight = Math.min(height * 0.6, 380);
                } else if (isSmallHeight) {
                    largeHeight = Math.min(height * 0.65, 450);
                }
                setContainerHeight(largeHeight);
                setCardWidth('521px');
                setCardMaxHeight(`${largeHeight}px`);
            }
        };

        updateSizes();
        window.addEventListener('resize', updateSizes);
        return () => window.removeEventListener('resize', updateSizes);
    }, []);

    return (
        <section ref={sectionRef} className="scroll-section min-h-svh py-10 bg-background relative">
            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-x-[20%] w-full items-start  xl:px-0">
                    {/* Left Column: Static Text */}
                    <div className="left-content">
                        <h2 ref={titleRef} className="xl:text-[3.4rem] text-[1.25rem] tracking-tight leading-[54px] font-medium w-full font-hoves-pro mb-[2%]">
                            {heading}
                        </h2>
                        <BlurText text={paragraph}
                        className='text-[0.875rem] leading-[120%] max-w-sm md:max-w-xl xl:text-[1.25rem] font-regular font-inter-tight pt-[3%]'
                        delay={5}
                        animateBy="words"
                        direction="top"
                        />
                    </div>

                    {/* Right Column: Cards Container */}
                    <div className="right-content relative mb-10">
                        <div className="cards-container relative w-full overflow-visible" style={{ height: `${containerHeight}px` }}>
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`card card-${index} absolute top-0 left-0 w-full rounded-3xl overflow-auto shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-between gap-4`}
                                    style={{
                                        zIndex: index + 1,
                                        width: cardWidth,
                                        height: cardMaxHeight,
                                        maxHeight: cardMaxHeight,
                                        backgroundColor: card.color
                                    }}
                                >
                                    <div className="flex justify-between items-start w-full gap-3">
                                        <h3 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-5xl font-medium tracking-tight font-inter-tight leading-tight max-w-[70%]">
                                            {card.title}
                                        </h3>
                                        <div className="bg-white rounded-full p-2 md:p-3 lg:p-4 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 shrink-0 text-black">
                                            {card.icon}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <p className="text-white font-inter-tight text-sm md:text-base lg:text-lg xl:text-2xl leading-tight">
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


