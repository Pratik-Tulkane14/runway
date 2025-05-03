import React from 'react'
import researchArr from '../constants/researchArr'
import Card from './Card'

const Research = () => {
    return (
        <div className='bg-black flex flex-col gap-10 py-5 sm:px-28'>
            <div className="flex flex-col gap-3">
                <h6 className='uppercase text-white font-semibold'> our research</h6>
                <p className='text-4xl text-white font-medium'>We are pioneering general-purpose <br className='hidden sm:inline-flex' /> multimodal simulators of the world.
                </p>
                <button className='capitalize w-32  text-white bg-black px-3 py-1.5 rounded-full hover:text-black hover:bg-white outline-1 border-white transition-all ease-in-out duration-400'>read more</button>
            </div>
            <div className="flex flex-col items-center  sm:justify-center  sm:flex-row gap-3">
                {researchArr.map((item, index) => {
                    return <Card
                        key={index}
                        imgPath={item.imgPath}
                        heading={item.heading}
                        date={item.date}
                        style="text-white"

                    />
                })}
            </div>
        </div>
    )
}

export default Research