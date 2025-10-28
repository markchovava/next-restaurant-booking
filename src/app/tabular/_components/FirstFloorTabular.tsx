"use client"

import LoaderPrimary from "@/_components/loaders/LoaderPrimary"
import { FirstFloorTableData } from "@/_data/sample/FirstFloorTableData"
import { useTablePlanStore } from "@/_store/useTablePlanStore"
import { useEffect } from "react"

export default function FirstFloorTabular() {
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
    setTablesData(FirstFloorTableData)
  }, [])

  if(isLoading){
    return (
      <LoaderPrimary />
    )
  }
  
  return (
    <div>FirstFloorTabular</div>
  )
}
