import React from 'react'
import { commonStyle } from '../constants/commonStyle'
import Image from 'next/image'
interface image {
    path: string
}
const Narrative = () => {
    const images: image[] = [
        {
            path: "/images/poster1.jpg",
        },
        {
            path: "/images/poster2.jpg",
        },
        {
            path: "/images/poster3.jpg",
        },
        {
            path: "/images/poster4.jpg",
        },
        {
            path: "/images/poster1.jpg",
        },
    ]
    return (
        <div className={`${commonStyle} bg-black flex flex-col gap-15 items-center py-10`}>
            <div className="flex flex-col items-center gap-2  w-[45%]">
                <p className='text-white font-bold text-sm'>Runway Gen-4</p>
                <h4 className='text-white text-3xl'>Narrative Capabilities</h4>
                <p className='text-gray-300 text-center'>A collection of short films and music videos made entirely with Gen-4 to test the model&#39;s narrative capabilities.</p>
                <button className='capitalize text-black bg-white px-3 py-1 rounded-full hover:text-white hover:bg-black hover:outline-2 hover:border-white transition-all ease-in-out duration-400'>learn more</button>
            </div>
            <div className="flex flex-wrap gap-3 justify-center w-full">
                {images.map((item, index) => {
                    return <Image
                        key={index}
                        src={item.path}
                        alt={item.path}
                        height={100}
                        width={100}
                        className='h-[500px] w-auto object-contain rounded-xl'
                    />
                })}
            </div>
        </div>
    )
}

export default Narrative