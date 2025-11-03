"use client"
import AsidePrimary from '@/_components/asides/AsidePrimary'
import React from 'react'
import BookingViewSection from './BookingViewSection'
import BookingEditModal from './BookingEditModal'


interface PropsInterface{
  id: number | string
}

export default function BookingViewPage({id}: PropsInterface) {
  return (
    <>
      <main className="w-full h-screen overflow-hidden flex items-start justify-start">
          <div className="w-20 min-h-screen">
          <AsidePrimary />
          </div>
          <div className="relative flex-1 min-h-screen">
          
              <section className="relative w-full h-full">
                  <BookingViewSection id={id} />
              </section>
          </div>
      </main>
  
      <BookingEditModal />
    </>
  )
}
