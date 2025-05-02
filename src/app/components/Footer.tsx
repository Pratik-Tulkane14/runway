import React from 'react'
import footerItems from '../constants/footerItems'
import { items } from '../types'

const Footer = () => {
  const style = "capitalize text-[#efeee699] text-sm"
  return (
    <>
      <div className="relative h-full w-full flex flex-wrap flex-col justify-start p-5 gap-y-10 bg-[#0C0C0C]">
        <video
          muted
          autoPlay
          loop
          playsInline
          // poster=''
          preload='auto'
          className='rounded-lg  w-full'
        >
          <source src='/videos/hero.mp4' />
        </video>
        <div className="flex flex-col md:flex-row justify-between">

          {Object.entries(footerItems).map(([category, item]) => {
            return (
              <div className="w-[70%] flex flex-col  items-start " key={category}>
                <h6 className='text-[#efeee699] py-4 text-sm capitalize'>{category}</h6>
                {item.map((item: items, index: number) => {
                  return (
                    <div className="flex flex-col " key={index}>
                      <a target='_blank' href={item.path} className='text-white hover:underline transition-all ease-in-out duration-200 capitalize' >{item.key}</a>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center md:w-1/2">
          <h6 className="font-bold text-white text-2xl ">runway</h6>
          <div className="flex flex-wrap gap-x-1">
            <a href="#" className={style}>© 2025 Runway AI, Inc.</a>
            <a href="#" className={style}>terms of use privacy policy</a>
            <a href="#" className={style}>code of conduct</a>
            <a href="#" className={style}>system status</a>
          </div>
        </div>
      </div>
    </>

  )
}

export default Footer