import React from 'react'
import footerItems from '../constants/footerItems'
import { items } from '../types'

const Footer = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-y-28  px-5 py-38 bg-[#0C0C0C] '>
      <div className="flex justify-between  py-14">

        {Object.entries(footerItems).map(([category, item]) => {
          return (
            <div className="w-[70%] flex flex-col  items-start " key={category}>
              <h6 className='text-dark-gray" py-4 text-sm capitalize'>{category}</h6>
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
      <div className="flex justify-between items-center w-1/2 ">
        <h6 className="font-bold text-white text-2xl">runway</h6>
        <div className="flex">
          <a href="#" className='capitalize text-dark-gray text-sm'>© 2025 Runway AI, Inc./</a>
          <a href="#" className='capitalize text-dark-gray text-sm'>terms of use privacy policy/</a>
          <a href="#" className='capitalize text-dark-gray text-sm'>code of conduct/</a>
          <a href="#" className='capitalize text-dark-gray text-sm'>system status</a>
        </div>
      </div>
    </div>
  )
}

export default Footer