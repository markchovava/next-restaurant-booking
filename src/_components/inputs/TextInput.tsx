"use client"

import { ChangeEvent } from "react"


interface TextInputInterface{
    label: string,
    type: string,
    name: string,
    onChange: (e: ChangeEvent<HTMLInputElement> | 
      ChangeEvent<HTMLTextAreaElement> | 
      ChangeEvent<HTMLSelectElement>
    ) => void
    value: string,
    placeholder: string,
    error: string
}

export default function TextInput({
    label,
    type,
    name,
    onChange,
    value,
    placeholder,
    error,
}: TextInputInterface
) {
  return (
    <div className='w-full mb-6'>
        <p className='mb-2 leading-none text-sm font-light'>{label}:</p>
        <input 
            type={type} 
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className='w-full border border-gray-300 outline-none p-2' />
        {error &&
        <p className='text-red-600 text-sm'>{error}</p>}
    </div>
  )
}
