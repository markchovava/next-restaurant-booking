"use client"
import AsidePrimary from "@/_components/asides/AsidePrimary"
import AppInfoViewSection from "./AppInfoViewSection"
import AppInfoEditModal from "./AppInfoEditModal"
import { useAppInfoStore } from "@/_store/useAppInfoStore"
import { useEffect } from "react"

  

export default function AppInfoViewPage({dbData}: {dbData: any}) {
  const { setData } = useAppInfoStore();
  useEffect(() => {
      setData(dbData.data)
  }, [])

  
  return (
    <>
    {/* Your main content area */}
    <main className="w-full h-screen overflow-hidden flex items-start justify-start">
        <div className="w-20 min-h-screen">
        <AsidePrimary />
        </div>
        <div className="relative flex-1 min-h-screen">
            <section className="relative w-full h-full">
                <AppInfoViewSection />
            </section>
        </div>
    </main>

    <AppInfoEditModal />
        
    </>
  )
}
