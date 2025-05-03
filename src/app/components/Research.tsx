import React from 'react'
import researchArr from '../constants/researchArr'
import Card from './Card'
import Button from './Button'

const Research = () => {
    return (
        <div className='bg-black flex flex-col gap-10 py-5 sm:px-28'>
            <div className="flex flex-col gap-3">
                <h6 className='uppercase text-white font-semibold'> our research</h6>
                <p className='text-4xl text-white font-medium'>We are pioneering general-purpose <br className='hidden sm:inline-flex' /> multimodal simulators of the world.</p>
                <Button name='read more' style="w-32  text-white bg-black hover:text-black hover:bg-white border-white border-1" />
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