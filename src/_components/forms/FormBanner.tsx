"use client"

import { BookingTimeData2 } from "@/_data/sample/BookingTimeData"
import { CustomSelect } from "../inputs/CustomSelect"
import { Next30DaysCalendar } from "../inputs/Next30DaysCalendar"
import { useState } from "react"
import CustomSelectPrimary from "../inputs/selects/CustomSelectPrimary"
import { useBookingUserStore } from "@/_store/useBookingUserStore"
import CustomSelectDate from "@/app/test/_components/CustomSelectDate"

const GuestQuantityData = Array.from({ length: 10 - 1 + 1 }, (_, i) => 1 + i)



export default function FormBanner() {
    const {setValue, data} = useBookingUserStore()

    // DATE 
    const currentDate = new Date();

    console.log('data.numberOfGuests', data.numberOfGuests)

  return (
    <section className=" ">
        <div className=" lg:w-[70%] w-[92%] mx-auto grid grid-cols-7 border-black">
            <section className="col-span-2 border-r border-gray-300">
                <CustomSelectPrimary
                    title="Number Of Guests"
                    data={GuestQuantityData}
                    value={data.numberOfGuests}
                    onChange={(value) => setValue('numberOfGuests', value)}
                />
            </section>
            <section className="col-span-2 border-r border-gray-300">
                <CustomSelectPrimary
                    title="Time"
                    data={BookingTimeData2}
                    value={data.time}
                    onChange={(value) => setValue('time', value)}
                />
            </section>
            <section className="col-span-2 border-r border-gray-300">
               <CustomSelectDate
                    title="Date:"
                    date={currentDate}
                    value={data.date}
                    days={60}
                    onChange={(value) => setValue('date', value)}
                />
            </section>
            <div className="relative col-span-1">
                <button 
                    className={`w-full h-full border border-white absolute cursor-pointer z-20 text-sm flex items-center justify-center font-medium 
                    bg-red-800 hover:bg-black text-white hover:text-white transition-all ease-initial duration-200`}>
                    Check Availability
                </button>
                
            </div>
        </div>
    </section>
  )
}
