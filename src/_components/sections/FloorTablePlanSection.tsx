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
    <section className="mx-auto w-full h-screen overflow-auto">
      <ZoomableFloorPlan>
       <div className="w-full lg:pt-32 pt-0 pb-60">
         <section className='mx-auto lg:w-[85%] w-[95%] h-screen relative flex items-center justify-center'>
            {currentFloor}
         </section>
       </div>
      </ZoomableFloorPlan>
    </section>
    </>
  )
}
