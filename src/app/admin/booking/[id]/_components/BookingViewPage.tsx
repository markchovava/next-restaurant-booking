"use client"
import AsidePrimary from '@/_components/asides/AsidePrimary'
import React, { useEffect } from 'react'
import BookingViewSection from './BookingViewSection'
import BookingEditModal from './BookingEditModal'
import { TableBookingScheduleInterface } from '@/_data/entity/TableBookingScheduleEntity'
import { useAdminTableBookingScheduleStore } from '@/_store/useAdminTableBookingScheduleStore'


interface PropsInterface{
  id: number | string,
  dbData: TableBookingScheduleInterface
}


export default function BookingViewPage({
    id, 
    dbData
}: PropsInterface) {
  const { setData} = useAdminTableBookingScheduleStore()


  useEffect(() => {
    setData(dbData)
  }, []);

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
  
      <BookingEditModal id={id} />
    </>
  )
}
