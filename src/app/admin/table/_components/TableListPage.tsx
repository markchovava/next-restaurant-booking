"use client"
import AsidePrimary from '@/_components/asides/AsidePrimary'
import React, { useEffect } from 'react'
import TableListSection from './TableListSection'
import { useTableFloorPlanStore } from '@/_store/useTableFloorPlanStore'



export default function TableListPage({ dbData }: {dbData: any}) {
  const { setDataList } = useTableFloorPlanStore()
  useEffect(() => { setDataList(dbData) }, []);

  
  return (
    <>
      <main className="w-full h-screen overflow-hidden flex items-start justify-start">
            <div className="w-20 min-h-screen">
            <AsidePrimary />
            </div>
            <div className="relative flex-1 min-h-screen">
                <section className="relative w-full h-full">
                    <TableListSection />
                </section>
            </div>
        </main>
    
        {/* <TableAddModal /> */}
    </>
  )
}
