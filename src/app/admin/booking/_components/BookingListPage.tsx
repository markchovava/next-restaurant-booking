"use client"
import AsidePrimary from '@/_components/asides/AsidePrimary'
import React, { useEffect } from 'react'
import BookingListSection from './BookingListSection'
import BookingAddModal from './BookingAddModal'
import { ResponseInterface } from '@/_data/entity/ResponseEntity'
import { useAdminTableBookingScheduleStore } from '@/_store/useAdminTableBookingScheduleStore'



export default function BookingListPage({ dbData }: {dbData: ResponseInterface}) {
  const { setDataList } = useAdminTableBookingScheduleStore()

  console.log('Booking List Page dbData', dbData)

  useEffect(() => {
    setDataList(dbData)
  }, []);

  return (
    <>
      <main className="w-full h-screen overflow-hidden flex items-start justify-start">
            <div className="w-20 min-h-screen">
            <AsidePrimary />
            </div>
            <div className="relative flex-1 min-h-screen">
                <section className="relative w-full h-full">
                    <BookingListSection />
                </section>
            </div>
        </main>
    
        <BookingAddModal />
    </>
  )
}
