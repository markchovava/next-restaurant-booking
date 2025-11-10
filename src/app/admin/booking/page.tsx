import React from 'react'
import { checkAuthAction } from '@/_api/_actions/AuthActions'
import BookingListPage from './_components/BookingListPage'



export default async function page() {
  await checkAuthAction()
  
  return (
    <>
        <BookingListPage />
    </>
  )
}
