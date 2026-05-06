'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import image1 from '@/assets/home/wayofteaching-1.jpg'
import image2 from '@/assets/home/wayofteaching-2.jpg'
import image3 from '@/assets/home/wayofteaching-4.jpg'
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
        let ctx: gsap.Context;

        const initAnimation = () => {
            ctx = gsap.context(() => {
                const isMobile = window.innerWidth < 768;
                const isSmallHeightDesktop = window.innerHeight < 768;
                const offset = isSmallHeightDesktop ? 2 : 5;
                const scrollMultiplier = isMobile
                    ? 120
                    : isSmallHeightDesktop
                        ? 150
                        : 250;

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
                        tl.set(`.card-${index}`, { yPercent: 0 });
                        return;
                    }

                    tl.fromTo(
                        `.card-${index}`,
                        { yPercent: 250 },
                        { yPercent: index * offset, duration: 0.5 }
                    );
                });
                ScrollTrigger.refresh();
            }, sectionRef);
        };

        const timer = setTimeout(initAnimation, 100);

        const handleResize = () => ScrollTrigger.refresh();

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        window.addEventListener('load', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
            window.removeEventListener('load', handleResize);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <div className='bg-white'>
            <section
                ref={sectionRef}
                className="w-full bg-white rounded-t-[40px] font-sans pb-2 md:pb-0 md:min-h-svh flex flex-col justify-start items-center overflow-hidden"

            >
                <ContainerLayout>
                    <div className='text-center mt-10 mb-2 md:mb-12'>
                        <h1 ref={titleRef} className='text-3xl md:text-5xl font-medium leading-tight tracking-tight text-black'>
                            RAKS way of <span className='font-ppe italic font-light'>Teaching & Learning</span>
                        </h1>
                    </div>

                    <div className='relative w-full flex justify-center items-start min-h-[75vh] sm:min-h-[85vh]'>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`card-${index} absolute top-0 w-full max-w-5xl rounded-[10px] overflow-hidden shadow-2xl origin-top bg-white h-[65vh] sm:h-[70vh] md:h-[clamp(300px,60vh,1100px)]!`}
                                style={{
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
                                        style={{objectPosition:"20% 10%"}}
                                        priority={index === 0}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

                                    {/* Content */}
                                    <div className='absolute bottom-0 left-0 w-full p-6 md:p-14 text-white'>
                                        <h2 className='text-[2.2rem] leading-[1.1] md:text-5xl font-medium mb-3 md:mb-5 max-w-4xl tracking-tight'>
                                            {item.title}
                                        </h2>
                                        <p className='text-[1.1rem] md:text-lg text-gray-200 max-w-md font-light leading-[1.2] lg:leading-[1.2] tracking-wide'>
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