"use client"

import BreadCrumbs from "@/_components/breadcrumbs/BreadCrumbs"
import ButtonTertiary from "@/_components/buttons/ButtonTertiary"
import Heading1 from "@/_components/headings/Heading1"
import LoaderPrimary from "@/_components/loaders/LoaderPrimary"
import NoDataPrimary from "@/_components/NoDataPrimary"
import { BookingsData } from "@/_data/sample/BookingData"
import { useBookingStore } from "@/_store/useBookingStore"
import { useTablePlanStore } from "@/_store/useTablePlanStore"
import Link from "next/link"
import { useEffect } from "react"
import { FaDeleteLeft, FaEye } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import { IoSearch } from "react-icons/io5"
import { toast } from "react-toastify"



const title = "Booking List"

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 3, name: "Booking List", href:"/admin/booking"},
]


export default function BookingListSection() {
  const {
      setDataList, 
      dataList, 
      isSearching, 
      isLoading,
      search,
      setSearch,
      toggleModal,
      setToggleModal
  } = useBookingStore()

  useEffect(() => {
    setDataList(BookingsData)
  }, [])

  console.log('BookingsData', BookingsData)


  async function handleDelete(id: string | number){
      //
  }

  async function handlePaginate(url: string) {
      //
  }

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //
  }

  if(isLoading){
    return (
      <LoaderPrimary />
    )
  }

  return (
    <> 
    <div className="px-4 sm:px-6 lg:px-8 w-full overflow-auto h-screen pb-20">
      <section className="h-16 sm:h-20 flex items-center justify-between border-b border-slate-300 pb-2">
        <Heading1 title={title} />
      </section>
      <BreadCrumbs data={BreadCrumbsData} />
      <div className="h-8 sm:h-16" />
      <section className="pb-30">
          {/* Search Bar */}
          <section className="flex lg:flex-row flex-col items-stretch lg:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
            <form onSubmit={handleSearch} className="lg:w-[60%] w-full flex items-center justify-start rounded-lg border border-gray-300">
              <input 
                type="text" 
                placeholder="Enter Name" 
                value={search}
                onChange={setSearch}
                className="flex-1 py-2 px-3 sm:px-4 outline-none rounded-l-lg text-sm sm:text-base" 
              />
              <button type="submit" className="group px-4 sm:px-6 py-2 border-l border-gray-300 rounded-r-lg">
                { isSearching ? 
                  <GoDotFill className="cursor-pointer text-xl sm:text-2xl animate-pulse text-gray-900" />
                :
                  <IoSearch className="cursor-pointer text-lg sm:text-xl text-gray-500 transition-all ease-initial duration-200 group-hover:text-gray-900 group-hover:scale-110" />
                }
              </button>
            </form>
            <ButtonTertiary 
              title='Add' 
              onClick={() => setToggleModal(true)} />
          </section>

          { dataList && dataList.length > 0  ? 
            <>
              {/* Desktop Table View - Hidden on mobile */}
              <section className="hidden md:block w-full overflow-x-auto rounded-lg border border-gray-400">
                <div className='min-w-[700px]'>
                  {/* HEADER */}
                  <section className="bg-gray-300 font-bold text-sm lg:text-base flex items-center">
                    <div className="w-[35%] border-r border-gray-400 px-2 py-2">NAME</div>
                    <div className="w-[30%] border-r border-gray-400 px-2 py-2">DATE & TIME</div>
                    <div className="w-[20%] border-r border-gray-400 px-2 py-2">PHONE</div>
                    <div className="w-[15%] px-2 py-2 text-center">ACTION</div>
                  </section>
                  {/* ITEMS */}
                  {dataList.map((i, key) => (
                    <section key={key} className="border-b border-gray-400 flex items-center hover:bg-gray-50 transition-colors">
                      <div className="w-[35%] border-r border-gray-400 px-2 py-2 text-sm lg:text-base wrap-break-word">
                        {i.tableName}</div>
                      <div className="w-[30%] border-r border-gray-400 px-2 py-2 text-sm lg:text-base wrap-break-word">
                        {`${i.date}, ${i.startTime} to ${i.endTime}`}
                      </div>
                      <div className="w-[20%] border-r border-gray-400 px-2 py-2 text-sm lg:text-base">
                        {i.phone}
                      </div>
                      <div className="w-[15%] px-2 py-2 flex items-center justify-center gap-3">
                        <button className="cursor-pointer group">
                          <Link href={`/admin/booking/${i.id}`}>
                            <FaEye className="text-lg lg:text-xl text-gray-800 group-hover:text-green-600 group-hover:scale-110 ease-initial transition-all duration-200" />
                          </Link>
                        </button>
                        <button 
                          onClick={() => handleDelete(i.id)} 
                          className="cursor-pointer group">
                          <FaDeleteLeft className="text-lg lg:text-xl text-gray-800 group-hover:text-red-600 group-hover:scale-110 ease-initial transition-all duration-200" />
                        </button>
                      </div>
                    </section>
                  ))}
                </div>
              </section>

              {/* Mobile Card View - Visible only on mobile */}
              <section className="md:hidden space-y-3">
                {dataList.map((i, key) => (
                  <div key={key} className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 font-medium mb-1">NAME</p>
                          <p className="text-sm font-semibold text-gray-900 wrap-break-word">
                            {i.tableName}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 pt-5">
                          <button className="cursor-pointer group p-1">
                            <Link href={`/admin/user/${i.id}`}>
                              <FaEye className="text-xl text-gray-800 group-hover:text-green-600 group-hover:scale-110 ease-initial transition-all duration-200" />
                            </Link>
                          </button>
                          <button 
                            onClick={() => handleDelete(i.id)} 
                            className="cursor-pointer group p-1">
                            <FaDeleteLeft className="text-xl text-gray-800 group-hover:text-red-600 group-hover:scale-110 ease-initial transition-all duration-200" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-xs text-gray-500 font-medium mb-1">DATE & TIME</p>
                        <p className="text-sm text-gray-900 wrap-break-word">
                          {`${i.date}, ${i.startTime} to ${i.endTime}`}
                        </p>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-xs text-gray-500 font-medium mb-1">PHONE</p>
                        <p className="text-sm text-gray-900">{i.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </>
          : 
            <NoDataPrimary />
          }
      </section>
    </div>
    </>
  )
}