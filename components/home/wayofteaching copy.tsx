'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import image1 from '@/assets/home/stack-1.jpg'
import image2 from '@/assets/home/stack-2.jpg'
import image3 from '@/assets/home/stack-3.jpg'
import ContainerLayout from '@/layout/ContainerLayout'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLineReveal } from '../reuseable/texteffect/useLineReveal'

gsap.registerPlugin(ScrollTrigger)

const data = [
    {
        title: <span>Learning by <span className='font-ppe italic font-light'>Design</span>, Not Delivery</span>,
        description: "Every experience is planned with intention and centred on the learner.",
        image: image1
    },
    {
        title: <span>Hands-On & Real-World <span className='font-ppe italic font-light'>Learning</span></span>,
        description: "Thinking through doing, questioning, building, making.",
        image: image2
    },
    {
        title: <span><span className='font-ppe italic font-light'>Learning</span> Begins With the Learner at the Center of Everything We Do! </span>,
        description: "Every experience is planned with intention and centred on the learner.",
        image: image3
    },
]
const Wayofteaching = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const { elementRef: titleRef } = useLineReveal<HTMLHeadingElement>();

    useEffect(() => {
        const initGsap = async () => {
            const ctx = gsap.context(() => {
                const isMobile = window.innerWidth < 768;
                const isSmallHeightDesktop = window.innerHeight < 768;
                const offset = isSmallHeightDesktop ? 2 : 5;
                const scrollMultiplier = isMobile
                    ? 40
                    : isSmallHeightDesktop
                        ? 50
                        : 150;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: `+=${scrollMultiplier}%`,
                        pin: true,
                        scrub: isMobile ? 0.2 : 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                data.forEach((_, index) => {
                    if (index === 0) {
                        tl.set(`.card-${index}`, { opacity: 1, yPercent: 0 });
                        return;
                    }

                    tl.fromTo(
                        `.card-${index}`,
                        { opacity: 0, yPercent: 100 },
                        { opacity: 1, yPercent: index * offset, duration: 0.5 }
                    );
                });
                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 100);
            }, sectionRef);
            const handleResize = () => ScrollTrigger.refresh();

            window.addEventListener('resize', handleResize);
            window.addEventListener('orientationchange', handleResize);
            window.addEventListener('load', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('orientationchange', handleResize);
                window.removeEventListener('load', handleResize);
                ctx.revert();
            };
        };

        initGsap();
    }, []);

    return (
        <div className='bg-white'>
            <section
                ref={sectionRef}
                className="w-full bg-white rounded-t-[40px] font-sans min-h-[100svh] flex flex-col justify-start items-center overflow-hidden"

            >
                <ContainerLayout>
                    <div className='text-center mt-10 mb-6 md:mb-12'>
                        <h1 ref={titleRef} className='text-3xl md:text-[54px] font-medium leading-tight tracking-tight text-black'>
                            RaK’s way of <span className='font-ppe italic font-light'>Teaching & Learning</span>
                        </h1>
                    </div>

                    <div className='relative w-full flex justify-center items-start' style={{ minHeight: 'clamp(400px, 55vh, 500px)' }}>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`card-${index} absolute top-0 w-full max-w-5xl rounded-[10px] overflow-hidden shadow-2xl origin-top bg-white`}
                                style={{
                                    height: 'clamp(400px, 50vh, 700px)',
                                    zIndex: index + 1,
                                }}
                            >
                                <div className='relative w-full h-full'>
                                    <Image
                                        src={item.image}
                                        alt="Way of teaching"
                                        fill
                                        className='object-cover'
                                        placeholder='blur'
                                        priority={index === 0}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

                                    {/* Content */}
                                    <div className='absolute bottom-0 left-0 w-full p-6 md:p-14 text-white'>
                                        <h2 className='text-2xl md:text-5xl font-medium mb-2 md:mb-4 max-w-4xl leading-tight'>
                                            {item.title}
                                        </h2>
                                        <p className='text-base md:text-xl text-gray-200 max-w-md font-light'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ContainerLayout>
            </section>
        </div>
    )
}

export default Wayofteaching