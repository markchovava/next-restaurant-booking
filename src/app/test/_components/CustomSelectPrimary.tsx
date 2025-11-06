"use client"
import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6"


interface PropsInterface{
    title: string,
    data: string[] | number[],
    onChange: (value: string | number) => void,
    value: string | number
}


export default function CustomSelectPrimary({
    title, 
    data, 
    onChange, 
    value
}: PropsInterface
) {
    const [isToggle, setIsToggle] = useState(false)

    const handleSelect = (i: string | number) => {
        onChange(i)
        setIsToggle(false)
    }

    
  return (
    <section className="w-full relative bg-white drop-shadow">
        <p className='font-light text-sm px-2 pt-4 pb-1'>{title}</p>
        <button 
            className='group px-2 pb-1 w-full cursor-pointer flex items-center justify-between' 
            onClick={() => setIsToggle(!isToggle)} >
            <span>{value? value : "Select an Option"}</span>
            <span 
                className={`p-1 rounded-full duration-200 ease-in-out transition-all 
                group-hover:bg-gray-100 flex items-center justify-center`}>
                <FaAngleDown 
                    className={`text-xl transition-all duration-300 ease-initial 
                    ${ isToggle ? 'rotate-0' : '-rotate-180' } `}
                />
            </span>
        </button>
        <ul className={`bg-white border-t font-light border-gray-100 absolute z-10 w-full h-50 overflow-auto 
            ease-initial transition-all duration-200
            ${isToggle ? 'opacity-100 translate-y-1 ' : 'opacity-0 -translate-y-0.5'}`}>
            {isToggle && 
                data.map((i, key) => (
                <li 
                    onClick={() => handleSelect(i)}
                    key={key} 
                    className={`px-2 py-1 
                    ${value === i && 'bg-gray-200'} 
                    cursor-pointer hover:bg-gray-200 `}>
                    {i}
                </li>
            ))}
        </ul>
    </section>
  )
}
