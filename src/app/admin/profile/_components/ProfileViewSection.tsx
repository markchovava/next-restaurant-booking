"use client"
import BreadCrumbs from '@/_components/breadcrumbs/BreadCrumbs'
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import Heading1 from '@/_components/headings/Heading1'
import RecordPrimary from '@/_components/records/RecordPrimary'
import { useProfileStore } from '@/_store/useProfileStore'
import React from 'react'

const title = "Profile"

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 4, name: "Profile", href:"/admin/profile"},
]


export default function ProfileViewSection() {
  const {toggleModal, setToggleModal} = useProfileStore()

  console.log('toggleModal', toggleModal)

  return (
    <>
    <section className="h-20 px-8 flex items-center justify-between border-b border-slate-300 pb-2">
      <Heading1 title={title} />
    </section>
    <BreadCrumbs data={BreadCrumbsData} />
    <div className='h-8'></div>
    <div className='px-8 flex items-center justify-end'>
      <ButtonTertiary title='Edit' onClick={() => setToggleModal(true)} />
    </div>
    <div className=" bg-white p-8 flex flex-col items-start justify-center gap-3 rounded-xl">
        <RecordPrimary label="Name:" value={"Not yet Added"} />
        <RecordPrimary label="Phone:" value={"Not yet Added"} />
        <RecordPrimary label="Email:" value={"Not yet Added"} />
        <RecordPrimary label="Admin:" value={"Not yet Added"} />
        <RecordPrimary label="Role:" value={"Not yet Added"} />
    </div>
    </>
  )
}
