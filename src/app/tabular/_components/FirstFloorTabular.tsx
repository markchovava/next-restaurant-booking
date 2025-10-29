"use client"
import CardPrimary from "@/_components/cards/CardPrimary"
import Heading1 from "@/_components/headings/Heading1"
import SelectInputSecondary from "@/_components/inputs/SelectInputSecondary"
import LoaderPrimary from "@/_components/loaders/LoaderPrimary"
import { FirstFloorTableData } from "@/_data/sample/FirstFloorTableData"
import { KeyListData } from "@/_data/sample/KeyData"
import { useTablePlanStore } from "@/_store/useTablePlanStore"
import { useEffect } from "react"


const title = "First Floor";


export default function FirstFloorTabular() {
  const { 
    setTablesData,
    tablesData,
    isLoading
  } = useTablePlanStore()

    useEffect(() => {
      setTablesData(FirstFloorTableData)
    }, [])
  
  
    if(isLoading){
      return (
        <LoaderPrimary />
      )
    }
  return (
    <div className="w-full ">
      <section className="h-20 px-8 flex items-center justify-between border-b border-slate-300 pb-2">
       <Heading1 title={title} />
       <SelectInputSecondary data={KeyListData} />
      </section>

     <section className="h-[calc(100vh-5rem)] px-8 pt-12 pb-50 w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 py-4 overflow-x-auto overflow-auto">
      {tablesData.map((i, key) => (
        <CardPrimary data={i} />
      ))}
    </section>
    </div>
  )
}
