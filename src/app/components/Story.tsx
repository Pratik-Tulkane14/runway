import React from 'react'
import Button from './Button'

const Story = () => {
    return (
        <div className='h-full w-full flex flex-col gap-10 items-center bg-black px-5  sm:py-20'>
            <h6 className='font-bold text-white text-2xl'>runway <span className='font-light'>Studios</span></h6>
            <h4 className={`font-[timesNow] text-xl sm:text-[7vw] md:leading-28 text-center text-white`}>For anyone with <br />
                a story to tell.</h4>
            <div className="flex justify-center">
                <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    // poster=''
                    preload='auto'
                    className='rounded-lg  w-[70vw]'
                >
                    <source src='/videos/hero.mp4' />
                </video>
            </div>
            <h4 className='text-white text-xl sm:text-[2.4vw] sm:leading-10 text-center sm:mt-8'>Runway Studios is the entertainment and production arm of Runway, <br className='hidden sm:inline-flex' />
                dedicated to producing and funding films, documentaries, <br className='hidden sm:inline-flex' />
                printed publications, music videos and other media.</h4>
            <Button name='go to runway studio' style="w-48  text-white bg-black hover:text-black hover:bg-white border-white" />

        </div>
    )
}

export default Story