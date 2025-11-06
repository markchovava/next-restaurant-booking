"use client"
import Image from 'next/image'


export default function LogoPrimary() {
  return (
    <div className="">
        <Image
          src="/assets/img/logo.png" 
          alt="Image" 
          width={300} 
          height={70} 
          className="" />
        </div>
  )
}
