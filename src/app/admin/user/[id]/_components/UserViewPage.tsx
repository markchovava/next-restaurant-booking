import AsidePrimary from '@/_components/asides/AsidePrimary'
import React from 'react'
import UserViewSection from './UserViewSection'
import UserEditModal from './UserEditModal'

export default function UserViewPage() {
  return (
    <>
     {/* Your main content area */}
          <main className="w-full h-screen overflow-hidden flex items-start justify-start">
              <div className="w-20 min-h-screen">
              <AsidePrimary />
              </div>
              <div className="relative flex-1 min-h-screen">
              
                  <section className="relative w-full h-full">
                      <UserViewSection />
                  </section>
              </div>
          </main>
      
          <UserEditModal />
    </>
  )
}
