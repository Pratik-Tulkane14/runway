import React from 'react';
import Image from 'next/image';
import { BrandImage } from '../types';



const Partners = () => {
    const baseImages: BrandImage[] = [
        {
            path: "/images/sonos.svg",
            alt: "sonos",
            width: 89,
            height: 27
        },
        {
            path: "/images/spotify.svg",
            alt: "spotify",
            width: 100,
            height: 30
        },
        {
            path: "/images/open-ai.svg",
            alt: "open-ai",
            width: 113,
            height: 27
        },
        {
            path: "/images/zapier.svg",
            alt: "zapier",
            width: 90,
            height: 30
        },
        {
            path: "/images/patreon.svg",
            alt: "patreon",
            width: 117,
            height: 16
        },
        {
            path: "/images/auth0.svg",
            alt: "auth",
            width: 90,
            height: 32
        },
        {
            path: "/images/imdb.svg",
            alt: "imdb",
            width: 60,
            height: 25
        },
    ];
    const images = [...baseImages, ...baseImages, ...baseImages, ...baseImages]
    return (
        <div className='py-16 flex flex-col items-center gap-3 bg-[#F9FAFB]'>
            <h6 className='text-gray-500 text-sm font-medium uppercase tracking-wider'>
                Select Enterprise Partners
            </h6>

            <div className="w-full overflow-hidden relative">
                <div className="flex items-center py-4">
                    <div className="flex moving-images whitespace-nowrap">
                        {images.map((item, index) => (
                            <div key={`img-${index}`} className="inline-flex items-center justify-center mx-8 min-w-max">
                                <Image
                                    src={item.path}
                                    alt={item.alt}
                                    width={item.width}
                                    height={item.height}
                                    className="object-contain grayscale"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;