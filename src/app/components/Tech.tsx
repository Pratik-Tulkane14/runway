import React from 'react'
import Button from './Button'
import VideoUi from './VideoUi'

const Tech = () => {
    return (
        <>
            <div className='w-full h-full mt-18  px-5 flex flex-col justify-center items-center bg-white gap-y-0 md:gap-y-10'>
                <div className="flex flex-col items-center gap-y-5  md:mt-20">

                    <h6 className="font-['timesNew'] text-3xl md:text-[5.5vw] leading-10 md:leading-20">Technology for a new era <br />
                        of media and storytelling.</h6>
                    <p className='text-justify md:text-center'>Runway is a global AI research and media company working with the world’s top film studios,<br className='hidden md:block' />
                        production companies, agencies and brands. We build foundational AI research models
                        <br className='hidden md:block' />
                        and creative tools that are empowering a new production paradigm.</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <Button name='gen-4' style="text-black bg-white border-1 capitalize rounded-full px-4 py-1 hover:text-white hover:bg-black" />
                        <Button name='our research' style="text-black bg-white hover:text-white hover:bg-black" />

                    </div>
                </div>
                <VideoUi source="/videos/teaser1.mp4" style="w-full mt-8 md:mt-0 rounded-lg md:object-cover" poster='/images/teaser2.webm' />
            </div>
        </>

    )
}

export default Tech