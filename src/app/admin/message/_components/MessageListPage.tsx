"use client"
import React, { useEffect } from 'react'
import MessageAddModal from './MessageAddModal'
import MessageListSection from './MessageListSection'
import AsidePrimary from '@/_components/asides/AsidePrimary'
import { useMessageStore } from '@/_store/useMessageStore'
import { ResponseInterface } from '@/_data/entity/ResponseEntity'
 


export default function MessageListPage({dbData}: {dbData: ResponseInterface}) {
  const {setDataList} = useMessageStore()
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
                <MessageListSection />
            </section>
        </div>
    </main>

    <MessageAddModal />
        
    </>
  )
}
