"use client"
import BreadCrumbs from '@/_components/breadcrumbs/BreadCrumbs'
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import Heading1 from '@/_components/headings/Heading1'
import LoaderPrimary from '@/_components/loaders/LoaderPrimary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import { useTableFloorPlanStore } from '@/_store/useTableFloorPlanStore'
import { formatDate } from '@/_utils/formatDate'
import React from 'react'



const title = "View Table Floor Plan"

interface PropsInterface{
  id: number | string
}


export default function TableViewSection({ id }: PropsInterface) {
  const {
    setToggleModal, 
    data, 
    preData, 
    isLoading
  } = useTableFloorPlanStore()
  
  
  if(isLoading){
    return ( <LoaderPrimary /> )
  }
  

  const BreadCrumbsData = [
      {id: 1, name: "Home", href:"/"},
      {id: 2, name: "Dashboard", href:"/admin"},
      {id: 4, name: "Tables List", href:"/admin/table"},
      {id: 4, name: "View Table", href:`/admin/table/${id}`},
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
          <RecordPrimary 
              label="Name:" 
              value={data.name ? data.name : 'Not added'} />
          <RecordPrimary 
              label="Details:" 
              value={preData.details ? preData.details : 'Not added'} />
          <RecordPrimary 
              label="Floor:" 
              value={preData.floor ? preData.floor : 'Not Added'} />
          <RecordPrimary 
              label="Updated:" 
              value={data.updatedAt ? formatDate(data.updatedAt) : 'Not Added'} />
          <RecordPrimary 
              label="Created:" 
              value={data.createdAt ? formatDate(data.createdAt) : 'Not Added'} />
          <div className='w-full border-b border-gray-300' />

      </section>
    </div>
    </>
  )
}
