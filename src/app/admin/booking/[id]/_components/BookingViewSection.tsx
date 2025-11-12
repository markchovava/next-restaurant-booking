"use client"
import BreadCrumbs from '@/_components/breadcrumbs/BreadCrumbs'
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import Heading1 from '@/_components/headings/Heading1'
import LoaderPrimary from '@/_components/loaders/LoaderPrimary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import StickerPrimary from '@/_components/stickers/StickerPrimary'
import { useAdminTableBookingScheduleStore } from '@/_store/useAdminTableBookingScheduleStore'
import { useBookingStore } from '@/_store/useBookingStore'
import { formatDate } from '@/_utils/formatDate'
import { stringToUpper } from '@/_utils/StringManipulation'
import React from 'react'



const title = "View Booking"


interface PropsInterface{
  id: number | string
}


export default function BookingViewSection({id}: PropsInterface) {
  const { preData, setToggleModal, isLoading } = useAdminTableBookingScheduleStore()
  
  const BreadCrumbsData = [
      {id: 1, name: "Home", href:"/"},
      {id: 2, name: "Dashboard", href:"/admin"},
      {id: 4, name: "Bookings List", href:"/admin/booking"},
      {id: 4, name: "View Booking", href:`/admin/booking/${id}`},
  ]

  if(isLoading) {
    return (
      <LoaderPrimary />
    )
  }
 
  return (
    <>
    <div className="px-8 overflow-y-auto h-screen">
      <section className="h-20 flex items-center justify-between border-b border-slate-300 pb-2">
        <Heading1 title={title} />
      </section>
      <BreadCrumbs data={BreadCrumbsData} />
      <div className='h-8'></div>
      <section className='flex items-center justify-end'>
        <ButtonTertiary title='Edit' onClick={() => setToggleModal(true)} />
      </section>
      <section className=" bg-white pt-8 pb-24 flex flex-col items-start justify-center gap-3 rounded-xl">
          <div className='w-full border-b border-gray-300' />
          <h3 className='font-light text-4xl'>Table Information</h3>
          <RecordPrimary label="Ref:" value={preData.bookingRef ? <b>{preData.bookingRef}</b> : 'Not Added Yet.'} />
          <RecordPrimary label="Table Name:" value={preData.tableFloorPlan?.name ?? 'Not Added Yet.'} />
          <RecordPrimary label="Seats:" value={preData.tableFloorPlan?.details ?? 'Not Added Yet.'} />
          <RecordPrimary label="Floor:" value={preData.tableFloorPlan?.floor ? 
              stringToUpper(preData.tableFloorPlan?.floor) : 
              'Not Added Yet.'} />
          <RecordPrimary 
            label="Status:" 
            value={preData.status ? <StickerPrimary status={preData.status} /> : 'Not Added Yet.'} />
          <RecordPrimary label="Number Of People:" value={preData.numberOfGuests ?? 'Not Added Yet.'} />
          <RecordPrimary label="Date:" value={preData.date ? formatDate(preData.date) : 'No Added Yet.'} />
          <RecordPrimary label="Time (Start - End):" value={preData.time ?? "Not yet Added"} />
          <div className='w-full border-b border-gray-300' />
          <h3 className='font-light text-4xl'>User Information</h3>
          <RecordPrimary label="Full Name:" value={preData.fullName ?? "Not yet Added"} />
          <RecordPrimary label="Email:" value={preData.email ?? "Not yet Added"} />
          <RecordPrimary label="Phone:" value={preData.phone ?? "Not yet Added"} />
          <RecordPrimary label="Notes:" value={preData.notes ?? "Not yet Added"} />
          <div className='w-full border-b border-gray-300' />
      </section>
    </div>
    </>
  )
}
