import React from 'react'
import { checkAuthAction } from '@/_api/_actions/AuthActions'
import BookingListPage from './_components/BookingListPage'
import { _tableBookingScheduleListAction } from '@/_api/_actions/TableBookingScheduleActions'



export default async function page() {
  await checkAuthAction()
  const [ schedulesData ] = await Promise.all([ _tableBookingScheduleListAction() ])
  
  return (
    <>
        <BookingListPage dbData={schedulesData} />
    </>
  )
}
