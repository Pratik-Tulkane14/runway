import React from 'react'
import { commonStyle } from '../constants/commonStyle'
import cardArr from '../constants/cardArr'
import Card from './Card'

const News = () => {
    return (
        <div className={`${commonStyle} md:my-20 px-32 flex flex-col`}>
            <h3 className='text-[#0c0c0c] text-3xl my-3'>News</h3>
            <div className="w-full flex flex-col md:flex-row gap-2" >
                {cardArr.map((item, index) => {
                    return <Card key={index} imgPath={item.imgPath} heading={item.heading} date={item.date} />
                })}
            </div>
        </div>
    )
}

export default News