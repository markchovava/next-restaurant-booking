"use client"

import BreadCrumbs from "@/_components/breadcrumbs/BreadCrumbs"
import Heading1 from "@/_components/headings/Heading1"


const title = "Reservation Policy"
const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 3, name: "Reservation Policy", href:"/reservation-policy"},
]

export default function ReservationPolicyPage() {
  return (
    <>
    <div className="w-full overflow-auto h-screen pb-30">
        <section className="h-16 sm:h-20 flex items-center justify-between border-b border-slate-300 pb-2">
            <div className="px-8 w-full text-center flex items-center justify-center">
                <Heading1 title={title} />
            </div>
            </section>
        <div className="px-8">
            <BreadCrumbs data={BreadCrumbsData} />
        </div>
        <div className="h-16" />

        <main className="px-8 font-light">
            {/* <div className="mb-6">
                <h3 className="font-light text-4xl mb-6">For Venue Hire</h3>
                <h4 className="font-light text-xl mb-3">Reservation Policy</h4>
                <ul className=" pl-6 list-disc ">
                    <li>A 70% deposit is required to confirm your reservation. </li>
                    <li>A curated set menu is available at a price per head. </li>
                    <li>An open bar is available for guests during the event, charges are 
                        calculated based on consumption and billed afterwards.
                    </li>
                </ul>
            </div>
            */}
        
            {/* <div className="border-b border-gray-300"></div> */}

            <div className="mt-3">
                <h3 className="font-light text-4xl mb-6">For Daily Reservations</h3>
                <h4 className="font-light text-xl mb-3">Reservation Policy</h4>
                <ul className=" pl-6 list-disc ">
                    <li>
                        For groups of 11-19 people, a deposit of US$150 is required to secure 
                        your reservation, effectively booking a semi-venue hire.
                    </li>
                    <li>
                        There is a 15-minute grace period on table reservations
                    </li>
                    <li>Reservation changes are subject to avaliability</li>
                </ul>
            </div>

        </main>

        <div className="h-40" />
    </div>
    </>
  )
}
