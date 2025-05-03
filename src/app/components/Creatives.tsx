import React from 'react'
import Card from './Card'
import creativeArr from '../constants/creativeArr'
import Button from './Button'

const Creatives = () => {
  return (
    <div className='h-full w-full flex flex-col items-center gap-8 p-5 sm:p-28'>
      <h1 className={`text-black text-[5vw] text-center md:leading-20 font-['timesNow']`}>How the world’s top creatives <br />
        are using Runway.</h1>
      <Button name='more customer stories' style='text-black bg-white hover:text-white hover:bg-black' />
      <div className="flex flex-col md:flex-row gap-3">
        {creativeArr.map((item, index) => {
          return <Card
            key={index}
            imgPath={item.imgPath}
            heading={item.heading}
            date={item.date}
          />
        })}
      </div>
    </div>
  )
}

export default Creatives