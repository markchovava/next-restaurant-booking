"use client"
import AsidePrimary from '@/_components/asides/AsidePrimary'
import React, { useEffect } from 'react'
import TableViewSection from './TableViewSection'
import TableEditModal from './TableEditModal'
import { useTableFloorPlanStore } from '@/_store/useTableFloorPlanStore'



interface PropsInterface{
  id: number | string,
  dbData: any
}


export default function TableViewPage({id, dbData}: PropsInterface) {
  const { setData } = useTableFloorPlanStore()
  useEffect(() => { setData(dbData?.data) }, []);


  return (
    <>
      <main className="w-full h-screen overflow-hidden flex items-start justify-start">
          <div className="w-20 min-h-screen">
          <AsidePrimary />
          </div>
          <div className="relative flex-1 min-h-screen">
          
              <section className="relative w-full h-full">
                  <TableViewSection id={id} />
              </section>
          </div>
      </main>
  
      <TableEditModal id={id} />
      
    </>
  )
}
