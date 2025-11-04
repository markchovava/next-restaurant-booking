"use client"
import Image from 'next/image'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function HeaderPrimary() {
  return (
    <>
    <div className="mx-auto w-[92%] flex justify-between items-center py-4">
        <div className="">
        <button className="group cursor-pointer">
            <GiHamburgerMenu
            className={`text-4xl text-white transition-all ease-initial group-hover:scale-110`} />
        </button>
        </div>
        <div className="">
        <Image src="/assets/img/logo.png" alt="Image" width={400} height={100} className="" />
        </div>
        <div className="">
            <button className={`bg-red-900 text-white  text-lg px-4.5 py-2.5 cursor-pointer rounded-lg 
             hover:text-black 
            hover:bg-white transition-all duration-200`}>
            CONTACT US
            </button>
        </div>
    </div>
   
    </>
  )
}
