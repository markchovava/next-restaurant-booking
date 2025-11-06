import React from 'react'
import BookingListPage from './_components/BookingListPage'
import { checkAuthAction } from '@/_api/_actions/AuthActions'



export default async function page() {
  await checkAuthAction()
  
  return (
    <>
        <BookingListPage />
    </>
  )
}
