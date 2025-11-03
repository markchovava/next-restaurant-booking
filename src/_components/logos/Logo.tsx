"use client"

import { MdBook } from "react-icons/md"



export default function Logo() {
  return (
    <div className='text-center flex flex-col items-center justify-center font-light text-4xl'>
        <MdBook className='text-red-700 text-[4rem]' />
        Cobblestone Booking App
    </div>
  )
}
