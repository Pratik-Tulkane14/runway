import React from 'react'

const Tech = () => {
    return (
        <>
            <div className='w-full h-screen mt-18 md:mt-60 px-4 flex flex-col justify-center items-center bg-white gap-y-0 md:gap-y-10'>
                <div className="flex flex-col items-center gap-y-5 md:gap-y-8 md:mt-20">

                    <h6 className="font-['timesNew'] text-3xl md:text-[5.5vw] leading-10 md:leading-16">Technology for a new era <br />
                        of media and storytelling.</h6>
                    <p className='text-justify md:text-center'>Runway is a global AI research and media company working with the world’s top film studios,<br className='hidden md:block'/>
                        production companies, agencies and brands. We build foundational AI research models
                        <br className='hidden md:block'/>
                        and creative tools that are empowering a new production paradigm.</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <button className='text-black bg-white border-1 capitalize rounded-full px-4 py-1   hover:text-white hover:bg-black transition-all ease-in-out duration-300 '>gen-4</button>
                        <button className='text-black bg-white border-1 capitalize rounded-full px-4 py-1    hover:text-white hover:bg-black transition-all ease-in-out duration-300 '>our research</button>
                    </div>
                </div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    // poster=''
                    preload='auto'
                    className='w-full mt-8 md:mt-0 rounded-lg md:object-cover '
                >
                    <source
                        src="/videos/tech.mp4"
                    />
                </video>
            </div>
        </>

    )
}

export default Tech