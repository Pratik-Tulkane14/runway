import Image from 'next/image'
import React from 'react'
import { cardTypes } from '../types'

const Card: React.FC<cardTypes> = ({ imgPath, heading, date, style }) => {
  const animation = 'hover:scale-[1.01] object-cover  transition-all ease-in-linear duration-500 '
  return (
    <div className='flex flex-col gap-2 rounded-lg w-full'>
      <Image src={imgPath} alt="cardImg" height={100} width={100} className={`w-full ${animation}`}  />
      <h5 className={`text-2xl ${style}`}>{heading}</h5>
      <p className='text-gray-500 text-sm'>{date}</p>
    </div>
  )
}

export default Card