import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const Hero = () => {
  return (
    <div className='h-dvh w-full relative'>
      <video
        muted
        autoPlay
        loop
        playsInline
        // poster=''
        preload='auto'
        className='object-cover h-full w-full opacity-95'
      >
        <source src='/videos/hero.mp4' />
      </video>
      <div className="absolute bottom-10 px-5 md:px-9 flex flex-col  md:gap-3">
        <h6 className='text-white text-bold'>Made with Gen-4</h6>
        <p className="text-white text-bold font-['timesNow'] text-[10vw] md:text-[4.8vw] md:leading-15">The Lonely Little Flame</p>
        <p className="text-[#efeee699] font-['timesNow'] text-[10vw] md:text-[4.8vw] md:leading-15">NYC is a Zoo</p>
        <p className="text-[#efeee699] font-['timesNow'] text-[10vw] md:text-[4.8vw] md:leading-15">The Herd</p>
        <p className='text-white'>A series of short films made with Gen-4, our next-generation series <br /> of AI models for media generation and world consistency.</p>
        <div className="flex flex-wrap gap-3 items-center mt-5">
          <button className='px-4 py-1.5 flex items-center gap-1 text-md rounded-full text-black hover:text-gray-600 hover:cursor-pointer bg-white capitalize'>try runway now
            <GoArrowRight />
          </button>
          <button className='px-4 py-1.5 text-md rounded-full text-white hover:text-black hover:bg-white transition-all ease-in-out duration-200 border-1 capitalize'>learn more about gen-4</button>
        </div>
      </div>
    </div>
  )
}

export default Hero