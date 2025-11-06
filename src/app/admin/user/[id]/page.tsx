import React from 'react'
import UserViewPage from './_components/UserViewPage'
import { _userViewAction } from '@/_api/_actions/UserActions'
import { checkAuthAction } from '@/_api/_actions/AuthActions'




export default async function page({params: {id}}: {params: {id: string | number}}) {
  await checkAuthAction()
  const [userData] = await Promise.all([_userViewAction(id)])
  
  return (
    <>
    <UserViewPage id={id} dbData={userData}/>
    </>
  )
}
