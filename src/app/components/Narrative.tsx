import React from 'react'
import { commonStyle } from '../constants/commonStyle'
import Image from 'next/image'
import Button from './Button'
interface image {
    path: string
}
const Narrative = () => {
    const images: image[] = [
        {
            path: "/images/poster4.jpg",
        },
        {
            path: "/images/poster3.jpg",
        },
        {
            path: "/images/poster2.jpg",
        },
        {
            path: "/images/poster1.jpg",
        },
        {
            path: "/images/monkey.jpg",
        },
    ]
    return (
        <div className={` bg-[#0C0C0C] flex flex-col px-5 sm:px-28 gap-15 items-center py-10`}>
            <div className="flex flex-col items-center gap-2  sm:w-[45%]">
                <p className='text-white font-bold text-sm'>Runway Gen-4</p>
                <h4 className='text-white text-3xl'>Narrative Capabilities</h4>
                <p className='text-gray-300 text-center'>A collection of short films and music videos made entirely with Gen-4 to test the model&#39;s narrative capabilities.</p>
                <Button name='learn more' style="text-black bg-white hover:text-white hover:bg-black hover:outline-1 hover:border-white" />

            </div>
            <div className="flex flex-wrap gap-3 justify-center w-full">
                {images.map((item, index) => {
                    return <Image
                        key={index}
                        src={item.path}
                        alt={item.path}
                        height={100}
                        width={100}
                        className='h-full sm:h-[555px] w-full sm:w-auto object-contain rounded-xl'
                    />
                })}
            </div>
        </div>
    )
}

export default Narrative