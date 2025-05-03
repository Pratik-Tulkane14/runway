'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import navItem from '../constants/navItem'
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Button from './Button';
const Navbar = () => {
    const style = "fixed top-0 z-10 h-16 w-full px-5 py-3 flex justify-between items-center transition-all duration-200 ease-in-out";
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const handleClick = () => {
        setIsMenuOpen((prev) => !prev)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)

            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    return (
        <>
            <div className={`w-full ${isScrolled ? "bg-[rgba(0,0,0,0.9)]" : "bg-transparent"} ${style}`}>
                <h6 className="text-white text-3xl font-bold">runway</h6>
                <div className="hidden md:flex justify-center items-center gap-4">
                    {navItem.map((item, index) => {
                        return (
                            <Link className='uppercase text-sm text-white font-semibold' href={item.path} key={index}>{item.name}</Link>
                        )
                    })}
                </div>
                <Button name='get started' style={`hidden md:block text-white border-white text-md   hover:text-gray-200 ${isScrolled ? "text-black" : "bg-transparent"}`} />
                <button className='md:hidden' onClick={handleClick}>
                    {!isMenuOpen && <IoMenu className='text-white' />

                    }
                </button>
            </div>
            <div className={`absolute  ${isMenuOpen ? "-left-0" : "-left-full"} bg-white transition-all duration-300 ease-in-out w-full h-screen z-20 px-5 py-3`}>
                <div className="flex justify-between items-center">
                    <h6 className="text-black text-2xl font-extrabold">runway</h6>
                    <IoClose className='text-black' onClick={handleClick} />
                </div>
                <div className="w-full h-screen flex flex-col items-start justify-center gap-7">
                    {navItem.map((item, index) => {
                        return (
                            <Link className="font-['timesNow'] text-5xl w-full capitalize text-black relative after:absolute after:content-['] after:h-[1px] after:w-full after:bg-gray-500 after:-bottom-3 after:left-0"

                                href={item.path} key={index}>{item.name}</Link>
                        )
                    })}
                    <Button name='get started' style="text-white bg-black w-full" />
                </div>
            </div>

        </>

    )
}

export default Navbar