
"use client"

import AsidePrimary from "@/_components/asides/AsidePrimary"
import RecordPrimary from "@/_components/records/RecordPrimary"
import AppInfoViewSection from "./AppInfoViewSection"

export default function AppInfoViewPage() {
  return (
    <>
    {/* Your main content area */}
        <main className="w-full h-screen overflow-hidden flex items-start justify-start">
            <div className="w-20 min-h-screen">
            <AsidePrimary />
            </div>
            <div className="relative flex-1 min-h-screen">
           
                <section className="relative w-full h-full">
                    <AppInfoViewSection />
                </section>
            </div>
        </main>
    
        {/* <BookingFormModal /> */}
        
    </>
  )
}
