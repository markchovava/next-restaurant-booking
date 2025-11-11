"use client"
import { ChangeEvent, useState } from "react"
import { IoMdInformationCircleOutline } from "react-icons/io"


interface CheckboxPrimaryInterface{
    title: string,
    name: string,
    desc: string,
    value: string | number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}


export default function CheckboxPrimary({title, desc, name, value=0, onChange}: CheckboxPrimaryInterface) {
    const [toggle, setToggle] = useState(false)

  return (
    <div className='flex items-center justify-start gap-4'>
        <label id='receive_news' className='flex items-center justify-start gap-2 font-light'>
            <input 
                type='checkbox' 
                onChange={onChange} 
                name={name} 
                value={value} 
                className='' />
            <p>{title}</p>
        </label>
        {desc &&
            <div className="relative">
                <button 
                    type='button' 
                    onClick={() => setToggle(!toggle)}>
                    <IoMdInformationCircleOutline 
                        className='text-slate-700 hover:text-black cursor-pointer' />
                </button>
                <p className={`${toggle 
                    ? 'opacity-100 translate-y-1 visible' // When visible
                    : 'opacity-0 -translate-y-0.5 invisible pointer-events-none' // When hidden, add 'invisible' and 'pointer-events-none'
                    } absolute text-sm bg-white px-4 py-3 w-80 rounded-lg drop-shadow-lg`}>
                    {desc}
                </p>
            </div>
        }

    </div>
  )
}
