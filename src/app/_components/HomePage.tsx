"use client"

import AsidePrimary from "@/_components/asides/AsidePrimary"
import ButtonBooking from "@/_components/buttons/ButtonBooking"
import BookingFormModal from "@/_components/forms/BookingFormModal"
import KeyTable from "@/_components/KeyTable"
import BottomNav from "@/_components/navs/BottomNav"
import FloorTablePlanSection from "@/_components/sections/FloorTablePlanSection"




export default function HomePage() {
  return (
    <>
     {/* Your main content area */}
    <main className="w-full h-screen overflow-hidden flex items-start justify-start">
      <div className="w-20 min-h-screen">
        <AsidePrimary />
      </div>
      <div className="relative flex-1 min-h-screen">
        <KeyTable />
        <ButtonBooking />
        <section className="relative w-full h-full">
          <FloorTablePlanSection />
        </section>
        <BottomNav />
      </div>
    </main>

    <BookingFormModal />
    </>
  )
}
