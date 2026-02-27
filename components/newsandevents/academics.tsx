import React from 'react'
import Image from 'next/image'
import ContainerLayout from '@/layout/ContainerLayout'
import academics1 from '@/assets/learningatraks/environment-1.jpg'
import academics2 from '@/assets/learningatraks/environment-2.jpg'
import academics3 from '@/assets/home/innovationnew-5.jpg'

const academics = () => {

    const resourcesInfo = {
        main: {
            image: academics1,
            title: "Study Skills Toolkit & Subject-Wise Learning Tips",
            description: "Practical strategies to build independence, confidence,\nand effective learning habits."
        },
        items: [
            {
                id: 1,
                image: academics2,
                title: <>Curriculum Overview<br />Brochures</>,
                list: ["Cambridge", "CBSE"],
            },
            {
                id: 2,
                image: academics3,
                title: "Assessment Guidelines",
                description: "Clear frameworks for Grades 1–12"
            }
        ]
    }

    return (
        <section className="w-full bg-white">
            <ContainerLayout>
                <div className="w-full">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] text-[#000000] leading-[1.1] font-medium tracking-tight mb-8 md:mb-12">
                        Academic <span className="font-ppe italic font-normal">Resources</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Large Card */}
                        <div className="bg-[#E9E9E9] rounded-xl lg:rounded-2xl p-4 lg:p-4 flex flex-col justify-between w-full lg:w-1/2">
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
                                <Image
                                    src={resourcesInfo.main.image}
                                    alt="Study Skills Toolkit"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="px-2 mb-10">
                                <h3 className="text-[#000000] text-lg lg:text-xl font-medium mb-1">
                                    {resourcesInfo.main.title}
                                </h3>
                                <p className="text-[#6B7280] text-sm lg:text-xl leading-snug whitespace-pre-line">
                                    {resourcesInfo.main.description}
                                </p>
                            </div>
                        </div>

                        {/* Right Stacked Cards */}
                        <div className="flex flex-col gap-6 w-full lg:w-1/2">
                            {resourcesInfo.items.map((item) => (
                                <div key={item.id} className="bg-[#E9E9E9] rounded-xl lg:rounded-2xl p-2 lg:p-4 flex flex-col sm:flex-row gap-6 h-full items-center sm:items-start">
                                    <div className="relative w-full sm:w-1/2 aspect-[4/4] rounded-xl overflow-hidden shrink-0">
                                        <Image
                                            src={item.image}
                                            alt="Academic Resource"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center sm:w-1/2 h-full gap-2">
                                        <h3 className="text-[#000000] text-lg lg:text-2xl leading-snug font-medium">
                                            {item.title}
                                        </h3>
                                        {item.list ? (
                                            <ul className="text-[#6B7280] text-sm lg:text-xl space-y-1 font-medium">
                                                {item.list.map((listItem, i) => (
                                                    <li key={i}>&bull; {listItem}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-[#6B7280] text-sm lg:text-lg leading-snug">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContainerLayout>
        </section>
    )
}

export default academics