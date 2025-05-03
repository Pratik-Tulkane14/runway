import React from 'react'
import cardArr from '../constants/cardArr'
import Card from './Card'

const News = () => {
    return (
        <div className={`p-5 md:my-24 sm:px-28 flex flex-col`}>
            <h3 className='text-[#0c0c0c] text-4xl my-3 font-medium'>News</h3>
            <div className="w-full flex flex-col md:flex-row gap-3" >
                {cardArr.map((item, index) => {
                    return <Card key={index} imgPath={item.imgPath} heading={item.heading} date={item.date} />
                })}
            </div>
        </div>
    )
}

export default News