"use client"

import BreadCrumbs from "@/_components/breadcrumbs/BreadCrumbs"
import Heading1 from "@/_components/headings/Heading1"


const title = "Cancellation Policy"
const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 3, name: "Cancellation Policy", href:"/cancel-policy"},
]

export default function CancelPolicyPage() {
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
                <h4 className="font-light text-xl mb-3">Cancellation Policy</h4>
                <ul className=" pl-6 list-disc ">
                    <li>Cancellations must be done at least 7 days prior to
                        your scheduled reservation, to receive a refund on the deposit.
                    </li>
                </ul>
            </div> */}

            <div className="border-b border-gray-300"></div>

            <div className="mt-3">
                <h3 className="font-light text-4xl mb-6">For Daily Reservations</h3>
                <h4 className="font-light text-xl mb-3">Cancellation Policy</h4>
                <ul className=" pl-6 list-disc ">
                    <li>
                        For guests who have paid a deposit, it is refundable if the reservation 
                        is cancelled at least 48 hours prior to the scheduled time.
                    </li>
                </ul>
            </div>

        </main>

        <div className="h-16" />
    </div>
    </>
  )
}
