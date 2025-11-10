"use client"
import { BookingTimeData2 } from "@/_data/sample/BookingTimeData"
import CustomSelectPrimary from "../inputs/selects/CustomSelectPrimary"
import CustomSelectDate from "@/app/test/_components/CustomSelectDate"
import { useTableBookingScheduleStore } from "@/_store/useTableBookingSchedule"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"


const GuestQuantityData = Array.from({ length: 10 - 1 + 1 }, (_, i) => 1 + i)


export default function FormBanner() {
    const router = useRouter()
    const {
        data, 
        setValue,
        errors,
        setIsSubmitting,
        isSubmitting,
        setData
    } = useTableBookingScheduleStore()
    
    // DATE 
    const currentDate = new Date();


    async function postData(e: React.FormEvent) {
        e.preventDefault()
        setIsSubmitting(true)
        const formData = {
            date: data.date,
            time: data.time,
            numberOfGuests: data.numberOfGuests
        }
        try {
            await setData(formData)
            setIsSubmitting(false)
            router.push('/booking')

        } catch (error) {
            toast.error('Failed to save data. Please try again.');
            console.error('Form submission error:', error);
        }
    }


    return (
        <section className="">
            <div className="relative lg:w-[70%] w-[92%] mx-auto border-black">
                <form onSubmit={postData} className="grid lg:grid-cols-7 grid-cols-1 lg:gap-0 gap-2">
                    <section className="col-span-1 lg:col-span-2">
                        <CustomSelectPrimary
                            side="left"
                            title="Guests"
                            placeholder="0"
                            data={GuestQuantityData}
                            value={data.numberOfGuests}
                            onChange={(value) => setValue('numberOfGuests', value)}
                        />
                        {errors.numberOfGuests &&
                            <p className="text-sm text-red-600">
                                {errors.numberOfGuests}
                            </p>
                        }
                    </section>
                    <section className="col-span-1 lg:col-span-2"> 
                        <CustomSelectPrimary
                            title="Time"
                            side=""
                            placeholder="Select"
                            data={BookingTimeData2}
                            value={data.time}
                            onChange={(value) => setValue('time', value)}
                        />
                        {errors.time &&
                            <p className="text-sm text-red-600">
                                {errors.time}
                            </p>
                        }
                    </section>
                    <section className="col-span-1 lg:col-span-2"> 
                        <CustomSelectDate
                            title="Date:"
                            date={currentDate}
                            value={data.date}
                            days={60}
                            onChange={(value) => setValue('date', value)}
                        />
                        {errors.date &&
                            <p className="text-sm text-red-600">
                                {errors.date}
                            </p>
                        }
                    </section>
                    <div className="relative col-span-1 lg:h-full h-16"> 
                       <ButtonChecking status={isSubmitting} />
                    </div>
                </form> 
            </div>
        </section>
    )
}




function ButtonChecking({status}: {status: boolean} ){
    return (
        <button 
            type="submit"
            className="w-full h-full lg:rounded-r-lg absolute cursor-pointer text-sm flex items-center 
                justify-center font-medium hover:bg-red-800 bg-black text-white hover:text-white 
                transition-all ease-initial duration-200 z-100">
            { status ?
            "Checking" :
            "Check Availability" }
        </button>
    )
}