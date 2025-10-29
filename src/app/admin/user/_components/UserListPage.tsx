import React from 'react'
import UserAddModal from './UserAddModal'
import UserListSection from './UserListSection'
import AsidePrimary from '@/_components/asides/AsidePrimary'

export default function UserListPage() {
  return (
    <>
     {/* Your main content area */}
    <main className="w-full h-screen overflow-hidden flex items-start justify-start">
        <div className="w-20 min-h-screen">
        <AsidePrimary />
        </div>
        <div className="relative flex-1 min-h-screen">
        
            <section className="relative w-full h-full">
                <UserListSection />
            </section>
        </div>
    </main>

    <UserAddModal />
        
    </>
  )
}
