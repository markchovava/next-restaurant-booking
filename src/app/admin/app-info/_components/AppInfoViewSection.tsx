"use client"
import BreadCrumbs from '@/_components/breadcrumbs/BreadCrumbs'
import ButtonPrimary from '@/_components/buttons/ButtonPrimary'
import ButtonSecondary from '@/_components/buttons/ButtonSecondary'
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import Heading1 from '@/_components/headings/Heading1'
import RecordPrimary from '@/_components/records/RecordPrimary'
import React from 'react'

const title = "App Information"

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 4, name: "App Information", href:"/admin/app-info"},
]

export default function AppInfoViewSection() {
  return (
    <>
    <section className="h-20 px-8 flex items-center justify-between border-b border-slate-300 pb-2">
      <Heading1 title={title} />
    </section>
    <BreadCrumbs data={BreadCrumbsData} />
    <div className='h-8'></div>
    <div className='px-8 flex items-center justify-end'>
      <ButtonTertiary title='Edit' />
    </div>
    <div className=" bg-white p-8 flex flex-col items-start justify-center gap-3 rounded-xl">
        <RecordPrimary label="Name:" value={"Not yet Added"} />
        <RecordPrimary label="Phone:" value={"Not yet Added"} />
        <RecordPrimary label="Email:" value={"Not yet Added"} />
        <RecordPrimary label="Address:" value={"Not yet Added"} />
        <RecordPrimary label="Facebook:" value={"Not yet Added" } />
        <RecordPrimary label="Tiktok:" value={"Not yet Added"} />
        <RecordPrimary label="Instagram:" value={"Not yet Added"} />
        <RecordPrimary label="Twitter:" value={"Not yet Added"} />
        <RecordPrimary label="WhatsApp:" value={"Not yet Added"} />
        <RecordPrimary label="Description:" value={"Not yet Added"} />
    </div>
    </>
  )
}
