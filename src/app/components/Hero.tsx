import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen w-full relative'>
      <video 
      muted
      autoPlay
      loop
      >
        <source src='/videos/hero.mp4'/>
      </video>
    </div>
  )
}

export default Hero