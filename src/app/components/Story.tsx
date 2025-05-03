import React from 'react'

const Story = () => {
    return (
        <div className='h-full w-full flex flex-col gap-5 items-center bg-black px-5  sm:py-20'>
            <h6 className='font-bold text-white'>runway <span className=''>Studios</span></h6>
            <h4 className={`font-[timesNow] text-xl sm:text-[6vw] md:leading-20 text-center text-white`}>For anyone with <br />
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
            <h4 className='text-white text-xl sm:text-4xl text-center'>Runway Studios is the entertainment and production arm of Runway, <br className='hidden sm:inline-flex' />
                dedicated to producing and funding films, documentaries, <br className='hidden sm:inline-flex' />
                printed publications, music videos and other media.</h4>
            <button className='capitalize w-48  text-white bg-black px-3 py-1.5 rounded-full hover:text-black hover:bg-white outline-1 border-white transition-all ease-in-out duration-400'>go to runway studio</button>
        </div>
    )
}

export default Story