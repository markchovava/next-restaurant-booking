import React from 'react'
import AppInfoViewPage from './_components/AppInfoViewPage'
import { _appInfoViewAction } from '@/_api/_actions/AppInfoActions'

export default async function page() {
  const [ appData] = await Promise.all([_appInfoViewAction()])
  return (
    <>
    <AppInfoViewPage dbData={appData} />
    </>
  )
}
