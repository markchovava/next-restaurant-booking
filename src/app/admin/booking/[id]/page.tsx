import React from 'react'
import BookingViewPage from './_components/BookingViewPage'


interface ViewPageByInInterface{
  params: {
    id: string | number
  }
}


export default function page({params: {id} }: ViewPageByInInterface) {
  return (
    <>
    <BookingViewPage id={id} /> 
    </>
  )
}
