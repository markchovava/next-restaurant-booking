"use client"
import BreadCrumbs from '@/_components/breadcrumbs/BreadCrumbs'
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import Heading1 from '@/_components/headings/Heading1'
import LoaderPrimary from '@/_components/loaders/LoaderPrimary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import { useMessageStore } from '@/_store/useMessageStore'
import { formatDate } from '@/_utils/formatDate'
import React from 'react'



const title = "View Message"


export default function MessageViewSection({id}: {id: string | number}) {
  const { setToggleModal, preData, isLoading } = useMessageStore()
  
  
  const BreadCrumbsData = [
      {id: 1, name: "Home", href:"/"},
      {id: 2, name: "Dashboard", href:"/admin"},
      {id: 4, name: "Messages List", href: `/admin/message`},
      {id: 3, name: "View Message", href: `/admin/message/${id}`},
  ]

  if(isLoading) {
    return (
      <LoaderPrimary />
    )
  }

  return (
    <>
    <div className="px-8 overflow-y-auto h-screen">
      <section className="h-20 flex items-center justify-between border-b border-slate-300 pb-2">
        <Heading1 title={title} />
      </section>
      <BreadCrumbs data={BreadCrumbsData} />
      <div className='h-8'></div>
      <div className='flex items-center justify-end'>
        <ButtonTertiary title='Edit' onClick={() => setToggleModal(true)} />
      </div>
      <section className=" bg-white py-8 flex flex-col items-start justify-center gap-3 rounded-xl">
          <RecordPrimary label="Name:" value={preData.name ?? "Not yet Added"} />
          <RecordPrimary label="Email:" value={preData.email ?? "Not yet Added"} />
          <RecordPrimary label="Message:" value={preData.message ?? "Not yet Added"} />
          <RecordPrimary label="Created:" value={formatDate(preData.createdAt) ?? "Not yet Added"} />
          <RecordPrimary label="Updated:" value={formatDate(preData.updatedAt) ?? "Not yet Added"} />
          <RecordPrimary label="Status:" value={preData.status ?? "Not yet Added"} />
      </section>

    </div>
    </>
  )
}
