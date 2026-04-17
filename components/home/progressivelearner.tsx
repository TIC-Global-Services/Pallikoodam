import React from 'react'
import Image from "next/image"
import icon1 from "@/assets/home/icons/icon-1.svg"
import icon2 from "@/assets/home/icons/icon-2.svg"
import icon3 from "@/assets/home/icons/icon-3.svg"
import icon4 from "@/assets/home/icons/icon-4.svg"
import icon5 from "@/assets/home/icons/icon-5.svg"
import ContainerLayout from '@/layout/ContainerLayout'
import ScrollOverlappingCards from '../reuseable/scrollOverlapping'

import progressive1 from '@/assets/home/progressive_1.png'
import progressive2 from '@/assets/home/pod.png'
import progressive3 from '@/assets/home/innovation_labs.jpg'
import progressive4 from '@/assets/home/clifton_blocks.jpg'
import progressive5 from '@/assets/home/quad.png'

const ProgressiveLearner = () => {

    const data = [
        {
            title: "Innovative Classrooms",
            description: "Classrooms that are designed to be versatile, warm, interactive spaces anchored in active learning.",
            icon: <Image src={icon1} alt="Innovative Classrooms" className="w-full h-full object-contain" />,
            bgImage: progressive1,
            textColor: "white"
        },
        {
            title: "Innovation Labs",
            description: "Purpose-designed environments where ideas are tested, shaped, and brought to life",
            icon: <Image src={icon2} alt="Innovation Labs" className="w-full h-full object-contain" />,
            bgImage: progressive3,
            textColor: "white"
        },
        {
            title: "POD",
            description: "Here is where curiosity turns into collaboration and ideas find expression through deeper thinking.",
            icon: <Image src={icon3} alt="POD Learning" className="w-84 h-84 object-contain" />,
            bgImage: progressive2,
            textColor: "white"
        },
        {
            title: "QUAD",
            description: "A space designed for movement, collaboration, discovery, and presentations.",
            icon: <Image src={icon4} alt="QUAD Learning" className="w-full h-full object-contain" />,
            bgImage: progressive5,
            textColor: "white"
        },
        {
            title: "Clifton Block (Library)",
            description: "A quiet, sunlit haven where stories, ideas, and possibilities wait to be discovered.",
            icon: <Image src={icon5} alt="Clifton Block" className="w-full h-full object-contain" />,
            bgImage: progressive4,
            textColor: "white"
        },
    ]
    return (
        <div className=''>
            <ContainerLayout className='mt-[10%]'>
                <ScrollOverlappingCards
                    heading=<>Purpose-Built Spaces for the progressive <br /> <span className='text-[#000086] font-ppe  font-normal italic'> 21st Century</span> Learner</>
                    paragraph=<>Where learning moves beyond classrooms into studios, labs, workshops, kitchens, gardens, theatres, and<br /> community spaces.</>
                    cards={data}
                />
            </ContainerLayout>
        </div>
    )
}

export default ProgressiveLearner