"use client"
import BreadCrumbs from '@/_components/breadcrumbs/BreadCrumbs'
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import Heading1 from '@/_components/headings/Heading1'
import LoaderPrimary from '@/_components/loaders/LoaderPrimary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import { useUserStore } from '@/_store/useUserStore'
import { IsAdminUser } from '@/app/admin/_components/IsAdminUser'
import { RoleOfUser } from '@/app/admin/_components/RoleOfUser'
import React from 'react'



const title = "View User"


export default function UserViewSection({id}: {id: string | number}) {
  const {toggleModal, setToggleModal, preData, isLoading} = useUserStore()
  
  
  const BreadCrumbsData = [
      {id: 1, name: "Home", href:"/"},
      {id: 2, name: "Dashboard", href:"/admin"},
      {id: 4, name: "Users List", href: `/admin/user`},
      {id: 3, name: "View User", href: `/admin/user/${id}`},
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
          <RecordPrimary label="Phone:" value={preData.phone ?? "Not yet Added"} />
          <RecordPrimary label="Email:" value={preData.email ?? "Not yet Added"} />
          <RecordPrimary label="Code:" value={preData.code ?? "Not yet Added"} />
          <RecordPrimary 
            label="Admin:" 
            value={preData.isAdmin ? <IsAdminUser data={Number(preData.isAdmin)} /> : "Not yet Added"} />
          <RecordPrimary label="Role:" 
            value={preData.isAdmin ? <RoleOfUser data={Number(preData.accessLevel)} /> : "Not yet Added"} />
      </section>

    </div>
    </>
  )
}
