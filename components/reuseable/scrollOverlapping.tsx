"use client";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image, { StaticImageData } from 'next/image';
import { useLetterReveal } from './texteffect/useLetterReveal';
import BlurText from './texteffect/BlurText';

gsap.registerPlugin(ScrollTrigger);

interface Card {
    bgImage: StaticImageData;
    title: string;
    description: string;
    icon: React.ReactNode;
    textColor: string;
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

    useGSAP(() => {
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
            scrollMultiplier = isSmallHeight ? 105 : 105;
        } else if (isSmallHeightDesktop) {
            scrollMultiplier = 100;
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                refreshPriority:2,
                start: isSmallHeight ? 'top 10%' : 'top 15%',
                end: `+=${scrollMultiplier}%`,
                pin: true,
                scrub: isMobile ? 0.2 : 1,
                // anticipatePin: 1,
                invalidateOnRefresh: true, // Re-calc on resize
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

        // Ensure layout is fully calculated after fonts/images load
        const handleRefresh = () => ScrollTrigger.refresh();
        document.fonts?.ready.then(handleRefresh);
        window.addEventListener("load", handleRefresh);

        return () => {
            window.removeEventListener("load", handleRefresh);
        };
    }, { scope: sectionRef, dependencies: [cards] });

    return (
        <section ref={sectionRef} className="scroll-section min-h-[50vh] md:min-h-[70vh]  bg-background relative">
            <div className="w-full px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-x-[20%] w-full items-start max-w-[1600px] mx-auto">
                    {/* Left Column: Static Text */}
                    <div ref={titleRef} className="left-content">
                        <h2 className="text-[32px] md:text-[clamp(1.25rem,4vw,2.8rem)] tracking-tight leading-[36px] md:leading-[50px] font-medium w-full font-hoves-pro mb-4 md:mb-6 lg:mb-8">
                            {heading}
                        </h2>
                        <p className='text-base md:text-[clamp(0.875rem,2vw,1.125rem)] md:leading-[120%] leading-[20px] max-w-full lg:max-w-xl font-regular font-inter-tight'>
                            {paragraph}
                        </p>
                    </div>

                    {/* Right Column: Cards Container */}
                    <div className="right-content relative mb-6 md:mb-10">
                        <div
                            className="cards-container relative w-full overflow-visible"
                            style={{ height: 'clamp(220px, 42vh, 500px)' }}
                        >
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`card card-${index} absolute top-0 left-0 w-full lg:w-[521px] rounded-3xl overflow-hidden shadow-lg h-[35vh] min-h-[35vh] md:h-[40vh] md:max-h-[40vh] lg:h-[42vh] lg:max-h-[42vh] xl:h-[50vh] xl:max-h-[50vh]`}
                                    style={{
                                        zIndex: index + 1,
                                    }}
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={card.bgImage}
                                        alt={card.title}
                                        fill
                                        className="object-cover scale-110"
                                        sizes="(max-width: 768px) 100vw, 521px"
                                        priority={index === 0}
                                    />
                                    {/* Dark gradient overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 z-[1]" />

                                    {/* Card content */}
                                    <div className="relative z-[2] flex flex-col justify-between h-full p-4 md:p-6 lg:p-8 xl:p-10 gap-3 md:gap-4">
                                        <div className="flex justify-between items-start w-full gap-3">
                                            <h3 className={`text-${card.textColor} text-[clamp(1.25rem,3vw,3rem)] font-medium tracking-tight font-inter-tight leading-tight max-w-[70%]`}>
                                                {card.title}
                                            </h3>
                                            <div className={`bg-white rounded-full flex items-center justify-center w-[clamp(2.5rem,8vw,4rem)] h-[clamp(2.5rem,8vw,4rem)] shrink-0 text-black ${index === 2 || index === 3 ? 'p-0' : 'p-2 md:p-3 lg:p-4'}`}>
                                                {card.icon}
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <p className={`text-${card.textColor} font-inter-tight text-base md:text-[clamp(0.875rem,2vw,1.125rem)] leading-tight`}>
                                                {card.description}
                                            </p>
                                        </div>
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


