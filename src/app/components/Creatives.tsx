import React from 'react'
import Card from './Card'
import creativeArr from '../constants/creativeArr'

const Creatives = () => {
  return (
    <div className='h-full w-full flex flex-col items-center gap-8 p-5 sm:p-28'>
      <h1 className={`text-black text-[5vw] text-center md:leading-20 font-['timesNow']`}>How the world’s top creatives <br />
        are using Runway.</h1>
      <button className='text-black bg-white border-1 capitalize rounded-full px-4 py-1   hover:text-white hover:bg-black transition-all ease-in-out duration-300 '>more customer stories</button>
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