"use client"
import BreadCrumbs from '@/_components/breadcrumbs/BreadCrumbs'
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import Heading1 from '@/_components/headings/Heading1'
import LoaderPrimary from '@/_components/loaders/LoaderPrimary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import { useProfileStore } from '@/_store/useProfileStore'
import React from 'react'
import { RoleOfUser } from '../../_components/RoleOfUser'
import { IsAdminUser } from '../../_components/IsAdminUser'

const title = "Profile"

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 4, name: "Profile", href:"/admin/profile"},
]


export default function ProfileViewSection() {
  const {toggleModal, setToggleModal, isLoading, preData} = useProfileStore()

  if(isLoading){
    return (
      <LoaderPrimary />
    )
  }





  return (
    <>
    <div className="px-8 overflow-y-auto h-screen">
      <section className="h-20flex items-center justify-between border-b border-slate-300 pb-2">
        <Heading1 title={title} />
      </section>
      <BreadCrumbs data={BreadCrumbsData} />
      <div className='h-8'></div>
      <div className='flex items-center justify-end'>
        <ButtonTertiary title='Edit' onClick={() => setToggleModal(true)} />
      </div>
      <section className=" bg-white py-8 flex flex-col items-start justify-center gap-3 rounded-xl">
          <RecordPrimary label="Name:" value={preData.name ?? 'Not yet Added'} />
          <RecordPrimary label="Phone:" value={preData.phone ?? "Not yet Added"} />
          <RecordPrimary label="Email:" value={preData.email ?? "Not yet Added"} />
          <RecordPrimary label="Admin:" value={<IsAdminUser data={preData.isAdmin} />} />
          <RecordPrimary label="Role:" value={<RoleOfUser data={preData.accessLevel} />} />
      </section>

    </div>
    </>
  )
}
