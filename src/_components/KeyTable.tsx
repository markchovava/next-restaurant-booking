"use client"

import { KeyData } from "@/_data/sample/KeyData"
import { useState } from "react"
import { IoMdInformationCircleOutline } from "react-icons/io"

export default function KeyTable() {
  const [toggle, setToggle] = useState(false)


  return (
    <div className="absolute z-50 top-4 left-4 md:left-4 max-md:top-2 w-[60%] md:w-auto md:max-w-md">
        <div className="bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg p-3 md:p-4">
            <h3 className="font-semibold text-gray-800 mb-2 text-xs md:text-sm">Table Status</h3>
            <section className="flex flex-wrap items-center justify-start gap-2 md:gap-3">
              {KeyData.map((i, key) => (
                <p key={key} className="flex items-center justify-start gap-1.5 md:gap-2">
                  <span className={`w-3 h-3 md:w-4 md:h-4 ${i.css} rounded flex-shrink-0`}></span>
                  <span className="text-xs md:text-sm text-gray-700 whitespace-nowrap">{i.name}</span>
                </p>
              ))}
            </section>
           {/*  <p className="text-xs md:text-sm mt-1 italic leading-tight">
              Click the <b>+</b> button to zoom in, <b>-</b> button to zoom out, the circular button to refresh. 
              Swipe across the floor and select the available seat marked in green.
            </p> */}
        </div>

        <div className="relative mt-4">
            <button 
                type='button' 
                onClick={() => setToggle(!toggle)}>
                <IoMdInformationCircleOutline
                    className='text-slate-700 text-xl hover:text-black cursor-pointer' />
            </button>
            <p className={`${toggle 
                ? 'opacity-100 translate-y-1 visible' // When visible
                : 'opacity-0 -translate-y-0.5 invisible pointer-events-none'}
                absolute text-sm font-light bg-white left-0 px-4 py-3 w-80 rounded-lg drop-shadow-lg`}>
                Click the <b>+</b> button to zoom in, <b>-</b> button to zoom out, the circular button to refresh. 
                Swipe across the floor and select the available seat marked in green.
            </p>
        </div>
    </div>
)
}
