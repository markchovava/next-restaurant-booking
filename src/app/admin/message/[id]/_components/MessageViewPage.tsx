"use client"
import AsidePrimary from '@/_components/asides/AsidePrimary'
import React, { useEffect } from 'react'
import MessageViewSection from './MessageViewSection'
import MessageEditModal from './MessageEditModal'
import { useMessageStore } from '@/_store/useMessageStore'



export default function MessageViewPage({id, dbData}: {id: string | number, dbData: any}) {
  const {setData} = useMessageStore()
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
                      <MessageViewSection id={id} />
                  </section>
              </div>
          </main>
      
          <MessageEditModal />
    </>
  )
}
