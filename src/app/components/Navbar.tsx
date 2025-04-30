'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import navItem from '../constants/navItem'
// import { IoCloseOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const style = "fixed top-0 z-10 h-16 w-full px-5 py-3 flex justify-between items-center transition-all duration-200 ease-in-out";
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const handleClick = () => {

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
        <div className={` ${isScrolled ? "bg-[rgba(0,0,0,0.9)]" : "bg-transparent"} ${style} `}>
            <h6 className="text-white text-2xl font-extrabold">runway</h6>
            <div className="hidden md:flex justify-center items-center gap-4">
                {navItem.map((item, index) => {
                    return (
                        <Link className='uppercase text-[12px] text-white font-semibold' href={item.path} key={index}>{item.name}</Link>
                    )
                })}
            </div>
            <button className="hidden md:block px-3 py-1 border rounded-2xl text-md text-white bg-transparent capitalize ">get started</button>
            <button className='md:hidden text-white' onClick={handleClick}>
                <CiMenuFries />
            </button>
        </div>
    )
}

export default Navbar