"use client"
import { FaArrowRightLong } from 'react-icons/fa6'


interface ButtonSecondaryInterface{
    title: string,
    onClick: () => void
}

export default function ButtonSecondary({title, onClick}: ButtonSecondaryInterface) {
  return (
   <>
    <button onClick={onClick} className="rounded-lg ease-initial transition-all duration-200 text-gray-900 border border-gray-300 hover:bg-slate-900 hover:text-white flex items-center justify-center gap-2 cursor-pointer px-6 py-3">
        {title}
        <FaArrowRightLong />
    </button>
   </>
  )
}
