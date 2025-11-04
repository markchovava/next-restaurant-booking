"use client"
import AsidePrimary from "@/_components/asides/AsidePrimary"
import ProfileViewSection from "./ProfileViewSection"
import ProfileEditModal from "./ProfileEditModal"
import { useEffect } from "react"
import { useProfileStore } from "@/_store/useProfileStore"


export default function ProfileViewPage({dbData}: {dbData: any}) {
  const {setData} = useProfileStore()
  console.log('PROFILE dbData', dbData)
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
                  <ProfileViewSection />
              </section>
          </div>
      </main>
  
      <ProfileEditModal />
    </>
  )
}
