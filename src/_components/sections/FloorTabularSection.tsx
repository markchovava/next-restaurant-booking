"use client"
import { useNavStore } from "@/_store/useNavStore"
import FirstFloorTabular from "@/app/tabular/_components/FirstFloorTabular"
import GroundFloorTabular from "@/app/tabular/_components/GroundFloorTabular"
import { useMemo } from "react"



export default function FloorTabularSection() {
    const { bottomNavData } = useNavStore()
    const currentFloor = useMemo(() => {
    const activeFloor = bottomNavData.find(item => item.isClicked)
    if (!activeFloor) return <GroundFloorTabular />
        return activeFloor === bottomNavData[0] 
            ? <GroundFloorTabular /> 
            : <FirstFloorTabular />;
    }, [bottomNavData])

  return (
    <section className="mx-auto w-full h-full">
      {currentFloor}
    </section>
  )
}
