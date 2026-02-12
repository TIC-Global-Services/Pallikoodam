"use client";
import { useEffect, useRef } from 'react';
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
            let scrollMultiplier = 150;
            if (isMobile) {
                scrollMultiplier = isSmallHeight ? 50 : 75;
            } else if (isSmallHeightDesktop) {
                scrollMultiplier = 100;
            }

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: isSmallHeight ? 'top 10%' : 'top 5%',
                    end: `+=${scrollMultiplier}%`,
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

    return (
        <section ref={sectionRef} className="scroll-section min-h-svh py-6 md:py-10 bg-background relative">
            <div className="w-full px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-x-[20%] w-full items-start max-w-[1600px] mx-auto">
                    {/* Left Column: Static Text */}
                    <div ref={titleRef} className="left-content">
                        <h2 className="text-[clamp(1.25rem,4vw,3.4rem)] tracking-tight md:leading-[58px] font-medium w-full font-hoves-pro mb-4 md:mb-6 lg:mb-8">
                            {heading}
                        </h2>
                        <p className='text-[clamp(0.875rem,2vw,1.25rem)] leading-[120%] max-w-full lg:max-w-xl font-regular font-inter-tight'>
                            {paragraph}
                        </p>
                    </div>

                    {/* Right Column: Cards Container */}
                    <div className="right-content relative mb-6 md:mb-10">
                        <div
                            className="cards-container relative w-full overflow-visible"
                            style={{ height: 'clamp(300px, 50vh, 500px)' }}
                        >
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`card card-${index} absolute top-0 left-0 w-full lg:w-[521px] rounded-3xl overflow-auto shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-between gap-3 md:gap-4`}
                                    style={{
                                        zIndex: index + 1,
                                        height: 'clamp(300px, 55vh, 500px)',
                                        maxHeight: 'clamp(300px, 55vh, 500px)',
                                        backgroundColor: card.color
                                    }}
                                >
                                    <div className="flex justify-between items-start w-full gap-3">
                                        <h3 className="text-white text-[clamp(1.25rem,3vw,3rem)] font-medium tracking-tight font-inter-tight leading-tight max-w-[70%]">
                                            {card.title}
                                        </h3>
                                        <div className="bg-white rounded-full p-2 md:p-3 lg:p-4 flex items-center justify-center w-[clamp(2.5rem,8vw,4rem)] h-[clamp(2.5rem,8vw,4rem)] shrink-0 text-black">
                                            {card.icon}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <p className="text-white font-inter-tight text-[clamp(0.875rem,2vw,1.5rem)] leading-tight">
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


