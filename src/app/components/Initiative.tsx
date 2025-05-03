import React from 'react'
import Card from './Card'
import initiativesArr from '../constants/initiativesArr'

const Initiative = () => {
    return (
        <div className='w-full h-full flex flex-col gap-8 bg-black px-5 sm:px-20 py-5'>
            <h3 className='text-white text-2xl sm:text-4xl'>Runway Studios Initiatives</h3>
            <div className="flex flex-col md:flex-row gap-3">
                {initiativesArr.map((item, index) => {
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

export default Initiative