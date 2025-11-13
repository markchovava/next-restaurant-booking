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
import FirstFloorPlan from "@/app/_components/FirstFloorPlan"
import GroundFloorPlan from "@/app/_components/GroundFloorPlan"
import ZoomableFloorPlan from "@/app/_components/ZoomableFloorPlan"
import { useEffect } from "react"


interface GroundFloorPageInterface{
  dbData: DbTableFloorPlanInterface[],
  cookieData: TableBookingScheduleInterface
}


export default function GroundFloorPage({dbData, cookieData}: GroundFloorPageInterface ) {
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
       {/*  <div className="lg:w-20 w-10 min-h-screen">
          <AsidePrimary />
        </div> */}
      <div className="relative flex-1 min-h-screen">
        <KeyTable />

         <div className={`lg:block hidden absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-light`}>
            Ground Floor
         </div>
      
        <section className="relative w-full h-full">
          

            <section className="mx-auto w-full min-h-screen overflow-auto">
                <div className="lg:h-30" />
                <ZoomableFloorPlan>
                    <div className="w-full lg:pt-32 pt-0 pb-60">
                        <section className='mx-auto lg:w-[85%] w-[95%] min-h-[600px] relative flex items-center justify-center'>
                            <GroundFloorPlan /> 
                        </section>
                    </div>
                </ZoomableFloorPlan>
            </section>



        </section>
        <BottomNav floor={1} />
      </div>
    </main>

    <BookingFormModal />
    </>
  )
}
