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


  return (
    <section className=" ">
        <div className="relative lg:w-[70%] w-[92%] mx-auto grid lg:grid-cols-7 grid-cols-1 lg:gap-0 gap-2 border-black">
            <section className="col-span-1 lg:col-span-2 ">
                <CustomSelectPrimary
                    side="left"
                    title="Guests"
                    placeholder="0"
                    data={GuestQuantityData}
                    value={data.numberOfGuests}
                    onChange={(value) => setValue('numberOfGuests', value)}
                />
            </section>
            <section className="col-span-1 lg:col-span-2 "> {/* Removed md:col-span-2 and mobile border-r */}
                <CustomSelectPrimary
                    title="Time"
                    side=""
                    placeholder="Select"
                    data={BookingTimeData2}
                    value={data.time}
                    onChange={(value) => setValue('time', value)}
                />
            </section>
            <section className="col-span-1 lg:col-span-2 "> {/* Removed md:col-span-2 and mobile border-r */}
                <CustomSelectDate
                    title="Date:"
                    date={currentDate}
                    value={data.date}
                    days={60}
                    onChange={(value) => setValue('date', value)}
                />
            </section>
            <div className="relative col-span-1 lg:h-full h-16"> 
                <button 
                    className={`w-full h-full lg:rounded-r-lg absolute cursor-pointer z-20 text-sm flex 
                        items-center justify-center font-medium hover:bg-white bg-black text-white 
                        hover:text-black transition-all ease-initial duration-200`
                }>
                    Check Availability
                </button>
            </div>
        </div>
    </section>
  )
}
