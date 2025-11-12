import React from 'react'
import BookingViewPage from './_components/BookingViewPage'
import { checkAuthAction } from '@/_api/_actions/AuthActions'
import { _tableBookingScheduleViewAction } from '@/_api/_actions/TableBookingScheduleActions'


interface ViewPageByInInterface{
  params: {
    id: string | number
  }
}


export default async function page({params: {id} }: ViewPageByInInterface) {
  await checkAuthAction()
  const [ bookingsData ] = await Promise.all([ _tableBookingScheduleViewAction(id) ])


  return (
    <>
    <BookingViewPage id={id} dbData={bookingsData.data} /> 
    </>
  )
}
