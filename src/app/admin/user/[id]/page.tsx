import React from 'react'
import UserViewPage from './_components/UserViewPage'
import { _userViewAction } from '@/_api/_actions/UserActions'




export default async function page({params: {id}}: {params: {id: string | number}}) {
  const [userData] = await Promise.all([_userViewAction(id)])
  return (
    <>
    <UserViewPage id={id} dbData={userData}/>
    </>
  )
}
