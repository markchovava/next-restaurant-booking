"use client"

import AsidePrimary from "@/_components/asides/AsidePrimary"
import ButtonBooking from "@/_components/buttons/ButtonBooking"
import BookingFormModal from "@/_components/forms/BookingFormModal"
import KeyTable from "@/_components/KeyTable"
import BottomNav from "@/_components/navs/BottomNav"
import FloorTablePlanSection from "@/_components/sections/FloorTablePlanSection"
import { DbTableFloorPlanInterface } from "@/_data/entity/DbTableFloorPlanEntity"
import { TableBookingScheduleInterface } from "@/_data/entity/TableBookingScheduleEntity"
import { useNavStore } from "@/_store/useNavStore"
import { useTablePlanStore } from "@/_store/useTablePlanStore"
import { useEffect } from "react"


interface BookingPageInterface{
  dbData: DbTableFloorPlanInterface[],
  cookieData: TableBookingScheduleInterface
}


export default function BookingPage({dbData, cookieData}: BookingPageInterface ) {
  const { currentFloor } = useNavStore()
  const { setDbTablesData, setCookieData} = useTablePlanStore()

  useEffect(() => {
    setCookieData(cookieData)
    setDbTablesData(dbData)
  }, [])
  
  
  return (
    <>
     {/* Your main content area */}
    <main className="w-full h-screen overflow-hidden flex items-start justify-start">
        <div className="lg:w-20 w-10 min-h-screen">
          <AsidePrimary />
        </div>
      <div className="relative flex-1 min-h-screen">
        <KeyTable />

        <div className="text-4xl text-center py-4">You are on {currentFloor.name}</div>
      
        {/* <ButtonBooking /> */}
  
      
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
