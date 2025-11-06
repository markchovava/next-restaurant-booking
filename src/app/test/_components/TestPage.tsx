"use client"
import { useState } from "react";
import CustomSelectPrimary from "./CustomSelectPrimary";
import { formatDate, getNextDays } from "@/_utils/formatDate";
import CustomSelectDate from "./CustomSelectDate";



const fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Grapes',
  'Strawberry',
  'Watermelon',
  'Pineapple',
  'Mango',
  'Peach',
  'Pear',
  'Kiwi',
  'Cherry',
  'Plum',
  'Lemon',
  'Lime',
  'Blueberry',
  'Raspberry',
  'Pomegranate',
  'Cantaloupe',
  'Apricot'
];


interface DataInterface{
  fruit: string | number,
  date: string
}


export default function TestPage() {
  const [data, setData] = useState<DataInterface>({
    fruit: "",
    date: ""
  })
  
  // DATE 
  const currentDate = new Date();
 


  
  return (
    <div className='flex items-center flex-col gap-3 justify-center h-screen w-full'>
       <div className='lg:w-[20%] w-[50%]'>
            <CustomSelectPrimary
                title="Fruit"
                data={fruits}
                value={data.fruit}
                onChange={(value) => setData({...data, fruit: value})}
            />
        </div> 

        <div className='lg:w-[20%] w-[50%]'>
          <CustomSelectDate
              title="Date:"
              date={currentDate}
              value={data.date}
              days={60}
              onChange={(value) => setData({...data, date: value})}
          />
          
            
        </div>
    </div>
  )
}
