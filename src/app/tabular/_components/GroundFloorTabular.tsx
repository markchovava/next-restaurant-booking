"use client"
import SelectInputSecondary from "@/_components/inputs/SelectInputSecondary"
import LoaderPrimary from "@/_components/loaders/LoaderPrimary"
import RecordSecondary from "@/_components/records/RecordSecondary"
import { GroundFloorTableData } from "@/_data/sample/GroundFloorTableData"
import { KeyListData } from "@/_data/sample/KeyData"
import { useTablePlanStore } from "@/_store/useTablePlanStore"
import { useEffect } from "react"
import { FaArrowRightLong } from "react-icons/fa6";

const title = "Ground Floor";

export default function GroundFloorTabular() {
  const { selectedTable, 
    hoveredTable, 
    setSelectedTable, 
    setHoveredTable, 
    setTablesData,
    setLeaveTable,
    tablesData,
    isLoading
  } = useTablePlanStore()

    useEffect(() => {
      setTablesData(GroundFloorTableData)
    }, [])
  
  
    if(isLoading){
      return (
        <LoaderPrimary />
      )
    }
  return (
    <div className="w-full ">
      <section className="p-8 flex items-center justify-between border-b border-slate-300 pb-2">
        <h3 className="text-[3rem] font-black leading-tight">{title}</h3>
       <SelectInputSecondary data={KeyListData} />
      </section>

     <section className="px-8 pt-12 pb-50 w-full grid grid-cols-4 gap-8 py-4 overflow-x-auto h-screen overflow-auto">
      {tablesData.map((i, key) => (
        <div className="bg-white drop-shadow-md">
          <div className="bg-green-700 text-2xl font-bold w-[80%] text-white px-4 py-3 my-2">
            {i.status}
          </div>
          <div className="px-4 pt-2 pb-3">
            <RecordSecondary label="Name" value={i.name} />
            <RecordSecondary label="Number of Seats" value={i.numberOfSeats} />
            <RecordSecondary label="Details" value={i.details} />
            <RecordSecondary label="Table Id" value={i.id} />
          </div>
          <div className="px-4 pb-4">
            <button className="border border-gray-300 flex items-center justify-center gap-2 cursor-pointer px-6 py-3">
              Book Now
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      ))}
    </section>
    </div>
  )
}
