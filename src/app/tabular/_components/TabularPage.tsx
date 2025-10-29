import AsidePrimary from '@/_components/asides/AsidePrimary'
import BookingFormModal from '@/_components/forms/BookingFormModal'
import BottomNav from '@/_components/navs/BottomNav'
import FloorTabularSection from '@/_components/sections/FloorTabularSection'
import React from 'react'

export default function TabularPage() {
  return (
    <>
    {/* Your main content area */}
    <main className="w-full h-screen overflow-hidden flex items-start justify-start">
        <div className="w-20 min-h-screen">
        <AsidePrimary />
        </div>
        <div className="relative flex-1 min-h-screen">
       
        <section className="relative w-full h-full">
           <FloorTabularSection />
        </section>
        <BottomNav />
        </div>
    </main>

    <BookingFormModal />
    </>
  )
}
