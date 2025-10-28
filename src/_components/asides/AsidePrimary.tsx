"use client"
import { AsideNavData } from '@/_data/sample/NavData'
import React, { useLayoutEffect } from 'react'
import ButtonAside from '../buttons/ButtonAside'
import { useNavStore } from '@/_store/useNavStore'



export default function AsidePrimary() {
    const {setAsideIsClicked, asideNavData, setAsideNavData} = useNavStore()
    useLayoutEffect(() => {
      setAsideNavData(AsideNavData)
    }, [])

    const handleIsClicked = (id: number) => {
      setAsideIsClicked(id)
    }

  return (
    <section className="h-[100vh] w-full overflow-auto bg-slate-900 drop-shadow">
        <ul className="w-full flex flex-col">
        {asideNavData.map((i, key) => 
          <ButtonAside 
              key={key}
              onClick={() => handleIsClicked(i.id)} 
              dbData={i} />
        )}
        </ul>
        
       
    </section>
  )
}
