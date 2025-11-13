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
        
        // If no active floor, default to ground floor
        if (!activeFloor) {
            console.log('No active floor, showing GroundFloorPlan')
            return <GroundFloorPlan />
        }
        
        // Check if active floor is the first floor (index 1)
        const isFirstFloor = activeFloor === bottomNavData[1]
        console.log('Active floor:', activeFloor, 'Is First Floor:', isFirstFloor)
        
        return isFirstFloor ? <FirstFloorPlan /> : <GroundFloorPlan />
    }, [bottomNavData])

    // Check if first floor is selected for conditional styling
    const isFirstFloorSelected = useMemo(() => {
        const activeFloor = bottomNavData.find(item => item.isClicked)
        return activeFloor === bottomNavData[1]
    }, [bottomNavData])

    return (
        <section className="mx-auto w-full min-h-screen overflow-auto">
            {isFirstFloorSelected && <div className="lg:h-30" />}
            <ZoomableFloorPlan>
                <div className="w-full lg:pt-32 pt-0 pb-60">
                    <section className='mx-auto lg:w-[85%] w-[95%] min-h-[600px] relative flex items-center justify-center'>
                        {currentFloor}
                    </section>
                </div>
            </ZoomableFloorPlan>
        </section>
    )
}