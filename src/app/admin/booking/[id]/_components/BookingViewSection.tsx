"use client"
import BreadCrumbs from '@/_components/breadcrumbs/BreadCrumbs'
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import Heading1 from '@/_components/headings/Heading1'
import RecordPrimary from '@/_components/records/RecordPrimary'
import { useBookingStore } from '@/_store/useBookingStore'
import React from 'react'



const title = "View Booking"

interface PropsInterface{
  id: number | string
}


export default function BookingViewSection({id}: PropsInterface) {
  const {toggleModal, setToggleModal} = useBookingStore()
  
  const BreadCrumbsData = [
      {id: 1, name: "Home", href:"/"},
      {id: 2, name: "Dashboard", href:"/admin"},
      {id: 4, name: "Bookings List", href:"/admin/booking"},
      {id: 4, name: "View Booking", href:`/admin/booking/${id}`},
  ]
 
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
          <RecordPrimary label="Table Name:" value={"Not yet Added"} />
          <RecordPrimary label="Status:" value={"Not yet Added" } />
          <RecordPrimary label="Number Of People:" value={"Not yet Added"} />
          <RecordPrimary label="Number Of Children:" value={"Not yet Added"} />
          <RecordPrimary label="Date:" value={"Not yet Added"} />
          <RecordPrimary label="Time (Start & End):" value={"Not yet Added"} />
          <div className='w-full border-b border-gray-300' />
          <h3 className='font-light text-4xl'>User Information</h3>
          <RecordPrimary label="Full Name:" value={"Not yet Added"} />
          <RecordPrimary label="Email:" value={"Not yet Added"} />
          <RecordPrimary label="Details:" value={"Not yet Added"} />
          <RecordPrimary label="Phone:" value={"Not yet Added"} />
          <div className='w-full border-b border-gray-300' />
      </section>
    </div>
    </>
  )
}
