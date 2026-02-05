import React from 'react'
import Image from "next/image"
import icon1 from "@/assets/home/icons/icon-1.svg"
import icon2 from "@/assets/home/icons/icon-2.svg"
import icon3 from "@/assets/home/icons/icon-3.svg"
import icon4 from "@/assets/home/icons/icon-4.svg"
import ContainerLayout from '@/layout/ContainerLayout'
import ScrollOverlappingCards from '../reuseable/scrollOverlapping'


const ProgressiveLearner = () => {

    const data = [
        {
            title: "Innovative Classrooms",
            description: "Classrooms that are designed to be versatile, warm, interactive spaces anchored in active learning.",
            icon: <Image src={icon1} alt="Innovative Classrooms" className="w-full h-full object-contain" />,
            color: "#000086"
        },
        {
            title: "Innovation Labs",
            description: "Purpose-designed environments where ideas are tested, shaped, and brought to life",
            icon: <Image src={icon2} alt="Innovation Labs" className="w-full h-full object-contain" />,
            color: "#C0B4FE"
        },
        {
            title: "POD Learning",
            description: "Here is where curiosity turns into collaboration and ideas find expression through deeper thinking.",
            icon: <Image src={icon3} alt="POD Learning" className="w-full h-full object-contain" />,
            color: "#144840"
        },
        {
            title: "QUAD Learning",
            description: "A space designed for movement, collaboration, discovery, and presentations.",
            icon: <Image src={icon4} alt="QUAD Learning" className="w-full h-full object-contain" />,
            color: "#FFCEC7"
        },
    ]
    return (
        <div>
            <ContainerLayout className='mt-[10%]'>
                <ScrollOverlappingCards
                    heading=<>Built Spaces for the progressive 21st Century Learner</>
                    paragraph=<>Where learning moves beyond classrooms into studios, labs, workshops, kitchens, gardens, theatres, and community spaces.</>
                    cards={data}
                />
            </ContainerLayout>
        </div>
    )
}

export default ProgressiveLearner