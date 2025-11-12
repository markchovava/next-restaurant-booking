"use client"
import React, { useState } from 'react'
import LogoPrimary from '../logos/LogoPrimary';
import HeaderNav from './HeaderNav';
import Link from 'next/link';


export default function HeaderPrimary() {
  return (
    <>
    <section className='w-full bg-red-900 py-8'>
        <div className="mx-auto relative hidden w-[92%] lg:flex justify-center items-start">
            <div className='left-[4%] absolute h-full flex items-center justify-start'>
            <HeaderNav />
            </div>
            <div className=''>
            <LogoPrimary />
            </div>

         <div className="right-[4%] absolute h-full flex items-center justify-end">
            <Link href="#">
                <button className={`text-md px-4.5 py-2.5 cursor-pointer rounded-lg 
                text-white hover:text-black
                border-white border hover:bg-white transition-all duration-200`}>
                BACK TO WEBSITE
                </button>
            </Link>
          </div>
        </div>
    </section>


    {/*  */}

    <div className="mx-auto lg:hidden w-[92%] flex flex-col justify-between items-center py-4 gap-5">
        <LogoPrimary />
        
        <div className="w-full flex items-center justify-between gap-4">
            <HeaderNav />
            <button className={`lg:text-lg px-4.5 py-2.5 cursor-pointer rounded-lg 
              text-white hover:text-black
              bg-red-800 hover:bg-white transition-all duration-200`}>
              BACK TO WEBSITE
            </button>
        </div>
    </div>
   
    </>
  )
}
