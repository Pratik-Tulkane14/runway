import React from 'react'
import { videoProps } from '../types'

const VideoUi: React.FC<videoProps> = ({ source, style, poster }) => {
    return (
        <video
            muted
            autoPlay
            loop
            playsInline
            poster={poster}
            preload='auto'
            className={`${style} "w-full rounded-lg"`}
        >
            <source src={source} />
        </video>
    )
}

export default VideoUi