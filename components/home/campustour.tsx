'use client'
import React from 'react'
import ScrollReveal from '../reuseable/effects/Scrollreveal'
import ContainerLayout from '@/layout/ContainerLayout'

const campustour = () => {
    return (
        <div className='bg-[#000086] min-h-screen overflow-hidden'>
            <ContainerLayout>
                <div className='flex flex-col gap-5 justify-start items-start h-full'>
                    <ScrollReveal
                        baseOpacity={0.1}
                        enableBlur
                        baseRotation={3}
                        textClassName="text-white"
                        blurStrength={4}
                    >
                        <>Step into a school where learning is intentional, relationships are meaningful, and every experience is designed to help children grow with confidence, curiosity and purpose <br />

                            Discover the values that guide us, the research that shapes us, and the vision that inspires us to create joyful, future-ready learning every single day.</>
                    </ScrollReveal>
                    <button className='bg-white text-[#000086] px-4 py-2 capitalize rounded-md'>schedule a campus tour</button>
                </div>
            </ContainerLayout>
        </div>
    )
}

export default campustour