"use client"
import React, { useState } from 'react'
import LogoPrimary from '../logos/LogoPrimary';
import HeaderNav from './HeaderNav';


export default function HeaderPrimary() {
  return (
    <>
    <div className="mx-auto hidden w-[92%] lg:flex justify-between items-start py-4">
        <HeaderNav />
        
        <LogoPrimary />

        <div className="">
            <button className={`text-lg px-4.5 py-2.5 cursor-pointer rounded-lg 
            text-white hover:text-black
            bg-red-800 hover:bg-white transition-all duration-200`}>
            BACK TO WEBSITE
            </button>
        </div>
    </div>

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
