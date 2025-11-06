"use client"
import { HelpNavData } from '@/_data/sample/NavData';
import Link from 'next/link';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLargeLine } from "react-icons/ri";



export default function HeaderNav() {
     const [btnToggle, setBtnToggle] = useState(false)
    
    const handleToggle = () => {
        setBtnToggle(!btnToggle)
      }
  return (
    <div className={`relative`}>
        <button onClick={handleToggle} className="group text-white relative cursor-pointer h-10 w-10 flex items-center justify-center">
          {/* Close Icon (RiCloseLargeLine) */}
          <RiCloseLargeLine
            className={`
              text-4xl 
              absolute 
              transition-all
              duration-300 
              ease-in-out 
              ${btnToggle ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'} 
              group-hover:scale-110
            `}
          />

          {/* Menu Icon (GiHamburgerMenu) */}
          <GiHamburgerMenu
            className={`
              text-4xl 
              absolute 
              transition-all
              duration-300 
              ease-in-out 
              ${btnToggle ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'} 
              group-hover:scale-110
            `}
          />
        </button>
        
        <ul className={`
          w-60
          absolute 
          z-10 
          bg-white 
          text-black 
          rounded-lg 
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${btnToggle ? 'opacity-100 translate-y-1 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}>
          {HelpNavData.map((i, key) => (
            <Link key={key} href={i.href}>
              <li 
                onClick={() => setBtnToggle(false)} 
                className='cursor-pointer py-1 px-3 hover:bg-gray-200 transition-colors duration-150'>
                {i.name}
              </li>
            </Link>
          ))}
           <li className='pt-1 pb-2 px-3 text-sm'>
            For further inquiries contact us on <br />
            <Link className='text-red-800 italic' href="mailto:info@cobblestonezw.com?subject=Inquiry&body=Hello">
                info@cobblestonezw.com
            </Link>
            </li>
        </ul>
      </div>
  )
}
