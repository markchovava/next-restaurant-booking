"use client"
import React, { useState } from 'react'
import LogoPrimary from '../logos/LogoPrimary'
import Link from 'next/link'
import ButtonNav from '../buttons/ButtonNav'
import { ButtonOpenClose } from '../buttons/ButtonOpenClose'
import { HelpNavData } from '@/_data/sample/NavData'

export default function HeaderSecondary() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  

  return (
    <>
    {/* DESKTOP */}
    <section className='w-full lg:block hidden bg-red-900 h-28 text-white relative '>
        <div className='absolute top-1/2 -translate-y-1/2 w-full left-0'>
           <div className='relative w-full'>
                <div className='pl-[3%]'>
                    <ButtonOpenClose 
                        size={50} 
                        onToggle={setIsOpen} 
                        isOpen={isOpen} />
                </div>
                <ul className={`absolute left-0 top-[135%] mt-2 w-60 pb-4 bg-red-900 origin-top transition-all duration-300 ease-out ${
                    isOpen 
                        ? 'opacity-100 scale-y-100 translate-y-0' 
                        : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
                }`}>
                    {HelpNavData.map((i, key) => (
                        <Link key={key} href={i.href}>
                            <li 
                                onClick={() => setIsOpen(false)} 
                                className='cursor-pointer py-1 px-3 hover:bg-red-800 transition-colors duration-150'>
                                {i.name}
                            </li>
                        </Link>
                    ))}
                    <li className='pt-1 pb-2 px-3 text-sm text-yellow-100'>
                        For further inquiries contact us on <br />
                        <Link className='text-yellow-200 italic' href="mailto:info@cobblestonezw.com?subject=Inquiry&body=Hello">
                            info@cobblestonezw.com
                        </Link>
                    </li>
                </ul>   
            </div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <LogoPrimary width={200} />
        </div>
        <div className='absolute top-1/2 -translate-y-1/2 right-[3%]'>
            <Link href="#">
               <ButtonNav title="Back to Website" />
            </Link>
        </div>
       
    </section>

    {/* MOBILE */}
    <section className='w-full block lg:hidden'>
        <div className='bg-red-900 h-28 text-white relative'>
            <div className='absolute top-1/2 -translate-y-1/2 w-full left-0'>
                <div className='pl-[3%]'>
                    <ButtonOpenClose 
                        size={50} 
                        onToggle={setIsOpen} 
                        isOpen={isOpen} />
                </div>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <LogoPrimary width={200} />
            </div>
        </div>
        {/*  */}
        <ul className={`absolute z-200 w-full left-0 pb-4 bg-white drop-shadow-lg origin-top transition-all duration-300 ease-out ${
                isOpen 
                    ? 'opacity-100 scale-y-100 translate-y-0' 
                    : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
            }`}>
                <Link href="#">
                    <li 
                        className='cursor-pointer hover:underline py-2 px-3 text-center hover:bg-gray-100 transition-colors duration-150'>
                        Back To Website
                    </li>
                </Link>
                {HelpNavData.map((i, key) => (
                    <Link key={key} href={i.href}>
                        <li 
                            onClick={() => setIsOpen(false)} 
                            className='cursor-pointer py-2 px-3 text-center hover:underline hover:bg-gray-100 transition-colors duration-150'>
                            {i.name}
                        </li>
                    </Link>
                ))}
                <li className='pt-1 pb-2 px-3 text-sm text-red-800 text-center'>
                    For further inquiries contact us on <br />
                    <Link className='text-red-900 italic' href="mailto:info@cobblestonezw.com?subject=Inquiry&body=Hello">
                        info@cobblestonezw.com
                    </Link>
                </li>
            </ul>  
    </section>
    </>
  )
}
