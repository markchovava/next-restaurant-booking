import React from 'react'
import ProfileViewPage from './_components/ProfileViewPage'
import { _profileViewAction } from '@/_api/_actions/ProfileActions'
import { checkAuthAction } from '@/_api/_actions/AuthActions'



export default async function page() {
  await checkAuthAction()
  const [ authData ] = await Promise.all([_profileViewAction()])
  
  return (
    <div>
        <ProfileViewPage dbData={authData} />
    </div>
  )
}
