"use client"
import { useNavStore } from "@/_store/useNavStore"
import FirstFloorPlan from "@/app/_components/FirstFloorPlan"
import GroundFloorPlan from "@/app/_components/GroundFloorPlan"
import ZoomableFloorPlan from "@/app/_components/ZoomableFloorPlan"
import { useMemo } from "react"



export default function FloorTablePlanSection() {
    const { bottomNavData } = useNavStore()
    const currentFloor = useMemo(() => {
        const activeFloor = bottomNavData.find(item => item.isClicked)
        if (!activeFloor) return <GroundFloorPlan />
        return activeFloor === bottomNavData[0] 
          ? <GroundFloorPlan /> 
          : <FirstFloorPlan />;
    }, [bottomNavData])

  return (
    <>
    <section className="mx-auto w-full h-full">
        <ZoomableFloorPlan>
          {currentFloor}

        </ZoomableFloorPlan>
    </section>
    </>
  )
}
