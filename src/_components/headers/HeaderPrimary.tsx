"use client"
import { HelpNavData } from '@/_data/sample/NavData';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLargeLine } from "react-icons/ri";


export default function HeaderPrimary() {
  const [btnToggle, setBtnToggle] = useState(false)

  const handleToggle = () => {
    setBtnToggle(!btnToggle)
  }
  return (
    <>
    <div className="mx-auto w-[92%] flex justify-between items-start py-4">
        <div className={`relative text-white `}>
          <button onClick={handleToggle} className="group relative cursor-pointer h-10 w-10 flex items-center justify-center">
          {/* Close Icon (RiCloseLargeLine) */}
            <RiCloseLargeLine
                className={`
                    text-4xl 
                    absolute 
                    transition-opacity 
                    duration-300 
                    ease-in-out 
                    ${btnToggle ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
                    group-hover:scale-110
                `}
            />

            {/* Menu Icon (GiHamburgerMenu) */}
            <GiHamburgerMenu
                className={`
                    text-4xl 
                    absolute 
                    transition-opacity 
                    duration-300 
                    ease-in-out 
                    ${btnToggle ? 'opacity-0 pointer-events-none' : 'opacity-100'} 
                    group-hover:scale-110
                `}
            />
        </button>
          <ul className={`w-40 absolute z-10 bg-white text-black rounded-lg overflow-hidden
              ${btnToggle ? 'opacity-100 translate-y-1' : 'opacity-0 -translate-y-0.5'}`}>
              {HelpNavData.map((i, key) => (
                <Link key={key} href={i.href}>
                  <li className='cursor-pointer py-1 px-3 hover:bg-gray-200'>{i.name}</li>
                </Link>
              ))}
          </ul>
        </div>
        <div className="">
        <Image 
          src="/assets/img/logo.png" 
          alt="Image" 
          width={300} 
          height={70} 
          className="" />
        </div>
        <div className="">
            <button className={`text-lg px-4.5 py-2.5 cursor-pointer rounded-lg 
            text-white hover:text-black
            bg-red-800 hover:bg-white transition-all duration-200`}>
            BACK TO WEBSITE
            </button>
        </div>
    </div>
   
    </>
  )
}
