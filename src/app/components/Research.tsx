import React from 'react'
import researchArr from '../constants/researchArr'
import Card from './Card'

const Research = () => {
    return (
        <div className='bg-black flex flex-col gap-10 p-20'>
            <div className="flex flex-col gap-3">
                <h6 className='uppercase text-white'> our research</h6>
                <p className='text-3xl text-white'>We are pioneering general-purpose <br /> multimodal simulators of the world.
                </p>
                <button className='capitalize w-32  text-white bg-black px-3 py-1.5 rounded-full hover:text-black hover:bg-white outline-1 border-white transition-all ease-in-out duration-400'>read more</button>
            </div>
            <div className="flex gap-3">
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