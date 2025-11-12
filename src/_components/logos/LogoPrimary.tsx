"use client"
import Image from 'next/image'


export default function LogoPrimary({width}: {width?: number}) {
  return (
    <div className="cursor-pointer">
        <Image
          src="/assets/img/logo.png" 
          alt="Image" 
          width={250} 
          height={70} 
          className="" />
        </div>
  )
}
