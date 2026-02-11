import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { CardContainer, CardBody } from '../3d-Card';

interface CardProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    variant?: 'text-top' | 'text-bottom';
    className?: string;
    imageClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    imageContainerClassName?: string;
    style?: React.CSSProperties;
}

export default function Card({
    title,
    description,
    image,
    variant = 'text-top',
    className = '',
    imageClassName = '',
    titleClassName = '',
    descriptionClassName = '',
    imageContainerClassName = '',
    style
}: CardProps) {
    const isTextTop = variant === 'text-top';

    return (
        <CardContainer containerClassName="w-full h-full" className="w-full h-full">
            <CardBody className="w-full h-full">
                <div className={`bg-[#E6E6E6] rounded-[22px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden w-full h-full ${className}`} style={style}>
                    {/* Content Wrapper - Order changes based on variant */}
                    {/* Text Content */}
                    <div className={`z-10 relative h-full flex flex-col ${isTextTop ? 'justify-start' : 'justify-end'} pointer-events-none`}>
                        <div className={`${isTextTop ? 'mb-8' : 'mt-8'} pointer-events-auto`}>
                            <h2 className={`text-[4.5vh] tracking-tight font-medium leading-[1.1] tracking-tight text-black mb-4 ${titleClassName}`}>
                                {title}
                            </h2>
                            <p className={`text-[2.3vh] leading-[28px] text-gray-800 max-w-prose ${descriptionClassName}`}>
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div
                        className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none 
        ${isTextTop ? "top-[40%] left-[20%]" : "-top-[40%] left-[25%]"} 
        ${imageContainerClassName}`}
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            priority
                            className={`object-cover scale-350 transition-transform duration-700 ease-out
            ${isTextTop ? "object-bottom" : "object-top"} 
            ${imageClassName}`}
                        />
                    </div>
                </div>
            </CardBody>
        </CardContainer>
    );
}