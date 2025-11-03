"use client"
import BreadCrumbs from '@/_components/breadcrumbs/BreadCrumbs'
import ButtonPrimary from '@/_components/buttons/ButtonPrimary'
import ButtonSecondary from '@/_components/buttons/ButtonSecondary'
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import Heading1 from '@/_components/headings/Heading1'
import RecordPrimary from '@/_components/records/RecordPrimary'
import { useAppInfoStore } from '@/_store/useAppInfoStore'
import React from 'react'

const title = "App Information"

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 4, name: "App Information", href:"/admin/app-info"},
]

export default function AppInfoViewSection() {
  const {toggleModal, setToggleModal} = useAppInfoStore()

 
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
      <section className=" bg-white py-8 flex flex-col items-start justify-center gap-3 rounded-xl">
          <RecordPrimary label="Name:" value={"Not yet Added"} />
          <RecordPrimary label="Phone:" value={"Not yet Added"} />
          <RecordPrimary label="Email:" value={"Not yet Added"} />
          <RecordPrimary label="Website:" value={"Not yet Added"} />
          <RecordPrimary label="Address:" value={"Not yet Added"} />
          <RecordPrimary label="Facebook:" value={"Not yet Added" } />
          <RecordPrimary label="WhatsApp:" value={"Not yet Added"} />
          <RecordPrimary label="Description:" value={"Not yet Added"} />
      </section>
    </div>
    </>
  )
}
