"use client"

import { BookingTimeData2 } from "@/_data/sample/BookingTimeData"
import { CustomSelect } from "../inputs/CustomSelect"
import { Next30DaysCalendar } from "../inputs/Next30DaysCalendar"



export default function FormBanner() {
  return (
    <section className="text-white ">
        <div className=" w-[70%] mx-auto grid grid-cols-7 border-black">
            <div className="border col-span-2 p-2">
                <p className="font-light text-sm">Guests</p>
                <CustomSelect />
            </div>
            <div className="border col-span-2 border-white p-2">
                <p className="font-light text-sm">Time</p>
                <CustomSelect options={BookingTimeData2} />
            </div>
            <div className="border col-span-2 border-white p-2">
                <p className="font-light text-sm">Date</p>
                <Next30DaysCalendar 
                    value="2025-11-05"
                    onChange={(date: any) => console.log(date)}
                    disabled={false}
                    />
            </div>
            <div className="border relative col-span-1 bg-red-800">
                <button 
                    className={`absolute cursor-pointer z-20 text-sm flex items-center justify-center h-full w-full font-medium 
                    bg-red-800 text-white hover:bg-white hover:text-black transition-all ease-initial duration-200`}>
                    Check Availability
                </button>
                
            </div>
        </div>
    </section>
  )
}
