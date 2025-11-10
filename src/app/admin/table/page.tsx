import React from 'react'
import { checkAuthAction } from '@/_api/_actions/AuthActions'
import BookingListPage from './_components/TableListPage'
import { _tableFloorPlanAction } from '@/_api/_actions/TableFloorPlanActions'



export default async function page() {
  await checkAuthAction()
  const [ tableFloorPlanData ] = await Promise.all([_tableFloorPlanAction(), ])
   
  return (
    <>
        <BookingListPage dbData={tableFloorPlanData} />
    </>
  )
}
