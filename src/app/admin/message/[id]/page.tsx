import { _contactViewAction } from '@/_api/_actions/ContactActions'
import React from 'react'
import MessageViewPage from './_components/MessageViewPage'


export default async function page({params: {id}}: {params: {id: string | number}}) {
  const [ userData ] = await Promise.all([_contactViewAction(id)])
  return (
    <>
    
    <MessageViewPage 
        id={id} 
        dbData={userData} />

    </>
  )
}
