import React from 'react'
import ProfileViewPage from './_components/ProfileViewPage'
import { _profileViewAction } from '@/_api/_actions/ProfileActions'



export default async function page() {
  const [ authData ] = await Promise.all([_profileViewAction()])
  
  return (
    <div>
        <ProfileViewPage dbData={authData} />
    </div>
  )
}
