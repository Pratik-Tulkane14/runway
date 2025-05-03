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
            className={style}
        >
            <source src={source} />
        </video>
    )
}

export default VideoUi