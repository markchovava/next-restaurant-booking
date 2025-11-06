"use client"
import { AsideNavData } from '@/_data/sample/NavData'
import React, { useLayoutEffect } from 'react'
import ButtonAside from '../buttons/ButtonAside'
import { useNavStore } from '@/_store/useNavStore'
import { AuthTokenCookieName, getTheCookie } from '@/cookies/CookiesClient'



export default function AsidePrimary() {
    const {setAsideIsClicked, asideNavData, setAsideNavData, isLoading} = useNavStore()
    const authCookie = getTheCookie(AuthTokenCookieName)
    console.log('authCookie', authCookie)

    useLayoutEffect(() => {
      setAsideNavData(AsideNavData)
    }, [])

    const handleIsClicked = (id: number) => {
      setAsideIsClicked(id)
    }

    if(isLoading){
      return (
        <section className="h-screen w-full overflow-auto bg-slate-900 drop-shadow"></section>
      )
    }


  return (
    <section className="h-screen w-full overflow-auto bg-slate-900 drop-shadow">
        <ul className="w-full flex flex-col">
        {asideNavData.map((i, key) => 
          i.name === "Dashboard" && !authCookie ? null :
          <ButtonAside 
              key={key}
              onClick={() => handleIsClicked(i.id)} 
              dbData={i} />
        )}
        </ul>
        
       
    </section>
  )
}
