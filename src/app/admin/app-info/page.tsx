import React from 'react'
import AppInfoViewPage from './_components/AppInfoViewPage'
import { _appInfoViewAction } from '@/_api/_actions/AppInfoActions'
import { checkAuthAction } from '@/_api/_actions/AuthActions'


export default async function page() {
  await checkAuthAction()
  const [ appData] = await Promise.all([_appInfoViewAction()])
  
  return (
    <>
    <AppInfoViewPage dbData={appData} />
    </>
  )
}
