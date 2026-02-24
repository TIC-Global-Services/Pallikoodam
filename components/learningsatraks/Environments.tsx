import React from 'react'
import Image from 'next/image'
import environments1 from '@/assets/learningatraks/environment-1.jpg'
import environments2 from '@/assets/learningatraks/environment-1.jpg'
import environments3 from '@/assets/home/innovationnew-5.jpg'
import icon1 from '@/assets/admission/books.png'
import icon2 from '@/assets/admission/react.png'
import icon3 from '@/assets/admission/lab.png'
import Developement from './developement'

const Environments = () => {

    const features = [
        {
            id: 1,
            title: <><span className='font-ppe italic pr-1 font-normal'>Collaborative</span> Classrooms & <br className="hidden lg:block" />Flexible Spaces</>,
            description: "Our classrooms and learning spaces are designed to support group-work, creative discussions, and flexible movement, ideal for active, social learning.",
            image: environments1,
            icon: icon1,
        },
        {
            id: 2,
            title: <>Interdisciplinary & <br />Project-Based <span className='font-ppe italic pl-1 font-normal'>Learning</span></>,
            description: "Students work on real-world projects that draw on multiple subjects, developing critical thinking, problem-solving, and practical application skills.",
            image: environments2,
            icon: icon2,
        },
        {
            id: 3,
            title: <>Innovation <span className='font-ppe italic px-1 font-normal'>Labs</span> & <br />Maker-Spaces</>,
            description: "From open studios to science and tech labs, students get hands-on exposure to arts, robotics, digital media, and more, helping them experiment, explore, and create.",
            image: environments3,
            icon: icon3,
        }
    ];

    return (
        <div className='bg-white'>
            {/* The outer container holds everything and extends the blue background */}
            <div className='bg-[#000086] pt-16 pb-0 px-4 md:px-8 lg:px-[5%] rounded-t-[3rem]'>
                <div className='mb-10'>
                    <h1 className='text-white md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-medium'>
                        Learning <span className='font-ppe italic font-normal'>Environment & Methods</span>
                    </h1>
                </div>
                <Developement />
            </div>
        </div>
    )
}

export default Environments