"use client"
import AsidePrimary from '@/_components/asides/AsidePrimary'
import React from 'react'
import RegisterSection from './RegisterSection'



export default function RegisterPage() {
  return (
    <>
    <main className="w-full h-screen overflow-hidden flex items-start justify-start">
        <div className="lg:w-20 w-10 min-h-screen">
        <AsidePrimary />
        </div>
        <div className="relative flex-1 min-h-screen">
            <section className="relative w-full h-full">
                <RegisterSection />
            </section>
        </div>
    </main>
    </>
  )
}
