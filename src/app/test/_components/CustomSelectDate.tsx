"use client"
import { getNextDays } from "@/_utils/formatDate"
import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6"


interface PropsInterface{
    title: string,
    data?: string[],
    days: number,
    date: string | Date,
    onChange: (value: string) => void,
    value: string
}


export default function CustomSelectDate({
    title, 
    days, 
    date,
    onChange, 
    value
}: PropsInterface
) {
    const [isToggle, setIsToggle] = useState(false)
    const DaysList = getNextDays(date, days)
    const handleSelect = (i: string ) => {
        onChange(i)
        setIsToggle(false)
    }

    function formatDateValueDisplay(i: string){
        const {today, dayName} = formatDisplayDate(i)
        return dayName + ', ' + today;
    }

    function DisplayDate(data: string) {
        const {today, dayName, date} = formatDisplayDate(data)
        return (
            <DateItem today={today} dayName={dayName} date={String(date)} />
        )
    }
  

  return (
    <section className="w-full relative bg-white">
        <p className='font-light text-sm px-2 pt-3 pb-1'>{title}</p>
        <button 
            className='group px-2 pb-1 w-full cursor-pointer flex items-center justify-between' 
            onClick={() => setIsToggle(!isToggle)} >
            <span>{value ? formatDateValueDisplay(value) : "Select an Option"}</span>
            <span 
                className={`p-1 rounded-full duration-200 ease-in-out transition-all 
                group-hover:bg-gray-100 flex items-center justify-center`}>
                <FaAngleDown 
                    className={`text-xl transition-all duration-300 ease-initial 
                    ${ isToggle ? 'rotate-0' : '-rotate-180' } `}
                />
            </span>
        </button>
        <ul className={`bg-white border-t font-light border-gray-100 absolute z-10 w-full h-50 overflow-auto 
            ease-initial transition-all duration-200
            ${isToggle ? 'opacity-100 translate-y-1' : 'opacity-0 -translate-y-0.5'}`}>
            
            {isToggle && 
                DaysList.map((i, key) => (
                <li 
                    onClick={() => handleSelect(i)}
                    key={key} 
                    className={`px-2 py-2 border-b border-gray-300
                    ${value === i && 'bg-gray-200'} 
                    cursor-pointer hover:bg-gray-200 `}>
                    {DisplayDate(i)}
                </li>
            ))}

        </ul>
    </section>
  )
}


const formatDisplayDate = (i: string) => {
    //console.log(i)
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = new Date(i);
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const date = currentDate.getDate()
    const day = currentDate.getDay()
    const dayName: string = daysOfWeek[day];
    const today = date + " " + monthNames[month] + " " + year 
    console.log('today', today)
    return {
        today,
        dayName,
        date
    }   
}


interface DateItemInterface{
    today: string,
    dayName: string,
    date: string
}

function DateItem({today, dayName, date}: DateItemInterface){
     return (
        <div className="flex items-center justify-start gap-1 text-sm">
            <p className={`w-12 bg-red-800 text-white py-1 px-3 rounded-lg 
                flex flex-col items-center justify-center`}>
                <span className="font-light leading-tight">
                    {dayName}
                </span>
                <span className="font-extrabold leading-tight">
                    {date} 
                </span>
            </p>
            <p>{today}</p>
        </div>
     )
}
