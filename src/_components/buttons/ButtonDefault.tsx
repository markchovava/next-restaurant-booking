import React from 'react'

interface PropsInterface{
    name: string,
    type: "submit" | "reset" | "button" | undefined,
    status?: boolean
}

export default function ButtonDefault({name, status, type="button" }: PropsInterface) {
  return (
     <button 
        type={type} 
        className={`cursor-pointer px-5 absolute z-90 top-4 right-8 border ease-initial 
        transition-all duration-200 border-slate-900 hover:border-transparent 
        hover:bg-slate-900 hover:text-white hover:drop-shadow-lg rounded-lg py-2`}>
        { status ? 
          'Processing' : 
          name
        }
    </button>
  )
}
