"use client"
import { IoClose } from "react-icons/io5"


interface ButtonCloseInterface{
    setToggleModal: (value: boolean) => void
}


export default function ButtonClose({ setToggleModal }: ButtonCloseInterface) {
  return (
    <button 
        onClick={() => setToggleModal(false)} 
        className='cursor-pointer hover:text-red-600 transition-all ease-in-out duration-200'>
        <IoClose className='text-2xl' />
    </button>
  )
}