"use client"
import BreadCrumbs from '@/_components/breadcrumbs/BreadCrumbs'
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import Heading1 from '@/_components/headings/Heading1'
import RecordPrimary from '@/_components/records/RecordPrimary'
import { useUserStore } from '@/_store/useUserStore'
import React from 'react'



const title = "View User"

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 4, name: "User", href:"/admin/user"},
]

export default function UserViewSection() {
  const {toggleModal, setToggleModal} = useUserStore()



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
          <RecordPrimary label="Name:" value={"Not yet Added"} />
          <RecordPrimary label="Phone:" value={"Not yet Added"} />
          <RecordPrimary label="Email:" value={"Not yet Added"} />
          <RecordPrimary label="Admin:" value={"Not yet Added"} />
          <RecordPrimary label="Role:" value={"Not yet Added"} />
      </section>

    </div>
    </>
  )
}
