'use client'
import React, { useEffect, useRef, useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import Button from './Button'
import { videos } from '../types'

const Hero = () => {
  const videosArr: videos[] = [
    {
      source: "/videos/hero.mp4"
    },
    {
      source: "/videos/teaser1.mp4"
    },
    {
      source: "/videos/teaser2.mp4",
    },
    {
      source: "/videos/teaser3.webm"
    },
    {
      source: "/videos/footer.webm"
    },
  ]

  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const handleVideoEnd = () => {
    // Play next video when current ends
    const nextIndex = (currentVideoIndex + 1) % videosArr.length;
    setCurrentVideoIndex(nextIndex);
  };

  // Play the new video when currentVideoIndex changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [currentVideoIndex]);
  return (
    <div className='h-dvh w-full relative'>
      <video
        ref={videoRef}
        key={videosArr[currentVideoIndex].source}
        className="w-full h-full object-cover"
        onEnded={handleVideoEnd}
        muted
        autoPlay
        playsInline
      >
        <source src={videosArr[currentVideoIndex].source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-10 px-5 md:px-9 flex flex-col  md:gap-3">
        <h6 className='text-white text-bold'>Made with Gen-4</h6>
        <p className="text-white text-bold font-['timesNow'] text-[10vw] md:text-[4.8vw] md:leading-15">The Lonely Little Flame</p>
        <p className="text-[#efeee699] font-['timesNow'] text-[10vw] md:text-[4.8vw] md:leading-15">NYC is a Zoo</p>
        <p className="text-[#efeee699] font-['timesNow'] text-[10vw] md:text-[4.8vw] md:leading-15">The Herd</p>
        <p className='text-white'>A series of short films made with Gen-4, our next-generation series <br /> of AI models for media generation and world consistency.</p>
        <div className="flex flex-wrap gap-3 items-center mt-5">
          <Button name='try runway now' style="flex items-center gap-1 text-black hover:text-gray-600 hover:cursor-pointer bg-white border-none" >
            <GoArrowRight />
          </Button>
          <Button name='learn more about gen-4' style="text-white hover:text-black hover:bg-white" />
        </div>
      </div>
    </div>
  )
}

export default Hero