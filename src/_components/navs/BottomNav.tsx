"use client"
import { BottomNavData } from '@/_data/sample/NavData'
import { useNavStore } from '@/_store/useNavStore'
import React, { useLayoutEffect } from 'react'



export default function BottomNav() {
    const {setBottomIsClicked, bottomNavData } = useNavStore()
  
    const handleIsClicked = (id: number) => {
      setBottomIsClicked(id)
    }

  return (
    <>
     {/* The fixed bottom navigation section */}
    <section className="w-full fixed bottom-8 z-50 flex items-center justify-center">
    <nav className="relative rounded-full overflow-hidden">
        {/* Background/Shadow Layer */}
        <div className="absolute z-10 w-full h-full bg-slate-900 drop-shadow rounded-full"></div>

        {/* Navigation Links List */}
        <ul className="relative z-20 flex items-center justify-center text-sm text-white">
        {bottomNavData.map((i, key) => (
            <li key={key} 
                onClick={() => handleIsClicked(i.id)}
                className={`${key < (bottomNavData.length - 1) ? "border-r border-gray-400" : ""} 
                ${i.isClicked ? "bg-slate-950" : "bg-transparent"}
                cursor-pointer flex items-center px-3 py-2 duration-200 ease-initial transition-all
                hover:bg-slate-950 hover:drop-shadow`}> 
                {i.name}
            </li>
        ))}
        </ul>
    </nav>
    </section>
    </>
  )
}