"use client"
import AsidePrimary from '@/_components/asides/AsidePrimary'
import React, { useEffect } from 'react'
import UserViewSection from './UserViewSection'
import UserEditModal from './UserEditModal'
import { useUserStore } from '@/_store/useUserStore'



export default function UserViewPage({id, dbData}: {id: string | number, dbData: any}) {
  const {setData} = useUserStore()
  useEffect(() => {
    setData(dbData.data)
  }, [])

  console.log('USER', dbData)
  return (
    <>
     {/* Your main content area */}
        <main className="w-full h-screen overflow-hidden flex items-start justify-start">
            <div className="w-20 min-h-screen">
            <AsidePrimary />
            </div>
            <div className="relative flex-1 min-h-screen">
            
                <section className="relative w-full h-full">
                    <UserViewSection id={id} />
                </section>
            </div>
        </main>
    
        <UserEditModal />
    </>
  )
}
