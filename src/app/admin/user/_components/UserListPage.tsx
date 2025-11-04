"use client"
import React, { useEffect } from 'react'
import UserAddModal from './UserAddModal'
import UserListSection from './UserListSection'
import AsidePrimary from '@/_components/asides/AsidePrimary'
import { useUserStore } from '@/_store/useUserStore'
import { ResponseInterface } from '@/_data/entity/ResponseEntity'
 


export default function UserListPage({dbData}: {dbData: ResponseInterface}) {
  const {setDataList} = useUserStore()
  useEffect(() => {
    setDataList(dbData)
  }, [])

  return (
    <>
    
    <main className="w-full h-screen overflow-hidden flex items-start justify-start">
        <div className="w-20 min-h-screen">
        <AsidePrimary />
        </div>
        <div className="relative flex-1 min-h-screen">
        
            <section className="relative w-full h-full">
                <UserListSection />
            </section>
        </div>
    </main>

    <UserAddModal />
        
    </>
  )
}
