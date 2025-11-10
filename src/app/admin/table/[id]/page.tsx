import React from 'react'
import TableViewPage from './_components/TableViewPage'
import { _tableFloorPlanViewAction } from '@/_api/_actions/TableFloorPlanActions'


interface ViewPageByIdInterface{
  params: {
    id: string | number
  }
}


export default async function page({params: {id} }: ViewPageByIdInterface) {
    const [ tableFloorPlanData ] = await Promise.all([ _tableFloorPlanViewAction(id) ])
 
  return (
    <>
    <TableViewPage id={id} dbData={tableFloorPlanData} /> 
    </>
  )
}
