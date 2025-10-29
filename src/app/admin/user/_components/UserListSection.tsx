"use client"

import BreadCrumbs from "@/_components/breadcrumbs/BreadCrumbs"
import ButtonTertiary from "@/_components/buttons/ButtonTertiary"
import Heading1 from "@/_components/headings/Heading1"
import LoaderPrimary from "@/_components/loaders/LoaderPrimary"
import NoDataPrimary from "@/_components/NoDataPrimary"
import { UsersData } from "@/_data/sample/UsersData"
import { useUserStore } from "@/_store/useUserStore"
import Link from "next/link"
import { useEffect } from "react"
import { FaDeleteLeft, FaEye } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import { IoSearch } from "react-icons/io5"
import { toast } from "react-toastify"



const title = "User List"

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 3, name: "User List", href:"/admin/user"},
]


export default function UserListSection() {
  const {
      setDataList, 
      dataList, 
      isSearching, 
      isLoading,
      search,
      setSearch,
      toggleModal,
      setToggleModal
  } = useUserStore()

  useEffect(() => {
    setDataList(UsersData)
  }, [])

  console.log('toggleModal', toggleModal)


  async function handleDelete(id: string | number){
      //
  }

  async function handlePaginate(url: string) {
      //
  }

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        //
  }

  if(isLoading){
    return (
      <LoaderPrimary />
    )
  }

  return (
    <>
    <section className="h-20 px-8 flex items-center justify-between border-b border-slate-300 pb-2">
      <Heading1 title={title} />
    </section>
    
    <BreadCrumbs data={BreadCrumbsData} />

    <section className="overflow-auto h-[calc(100vh-5rem)] pb-30">
        <div className="h-16" />
        {/* Search Bar */}
        <section className="px-8 flex lg:flex-row flex-col items-user justify-between gap-4 mb-4">
          <form onSubmit={handleSearch} className="lg:w-[60%] w-full flex items-user justify-start rounded-lg border border-gray-300">
            <input 
              type="text" 
              placeholder="Enter Name" 
                value={search}
              onChange={setSearch}
              className="flex-1 py-2 px-4 outline-none rounded-l-full" 
            />
            <button type="submit" className="group px-6 py-2 border-l border-gray-300 rounded-r-full">
              { isSearching ? 
                <GoDotFill className="cursor-pointer text-2xl animate-pulse text-gray-900" />
              :
                <IoSearch className="cursor-pointer text-xl text-gray-500 transition-all ease-initial duration-200 group-hover:text-gray-900 group-hover:scale-110" />
              }
            </button>
          </form>
          <ButtonTertiary 
            title='Add' 
            onClick={() => setToggleModal(true)} />

        </section>
        { dataList && dataList.length > 0  ? 
          <section className="w-full lg:overflow-hidden overflow-scroll">
            <div className='lg:w-full w-280'>
              {/* HEADER */}
              <section className=" mx-8 bg-gray-300 font-bold text-lg border border-gray-400 flex items-user justify-start">
                <div className="flex-5 border-r border-gray-400 px-2 py-1">NAME</div>
                <div className="flex-4 border-r border-gray-400 px-2 py-1">EMAIL</div>
                <div className="flex-3 border-r border-gray-400 px-2 py-1">ROLE</div>
                <div className="flex-2 px-2 border-gray-400 py-1 text-end">ACTION</div>
              </section>
              {/* ITEMS */}
              {dataList.map((i, key) => (
                <section key={key} className="mx-8 border-x border-b border-gray-400 flex items-user justify-start">
                  <div className="flex-5 border-r border-gray-400 px-2 py-1">{i.name}</div>
                  <div className="flex-4 border-r border-gray-400 px-2 py-1">{i.email}</div>
                  <div className="flex-3 border-r border-gray-400 px-2 py-1">
                    User
                  </div>
                  <div className="flex-2 px-2 border-gray-400 py-1 text-end flex items-user justify-end gap-3">
                    <button className="cursor-pointer group">
                      <Link href={`/admin/user/${i.id}`}>
                      <FaEye className="text-xl text-gray-800 group-hover:text-green-600 group-hover:scale-110 ease-initial transition-all duration-200" />
                      </Link>
                    </button>
                    <button 
                      onClick={() => handleDelete(i.id)} 
                      className="cursor-pointer group">
                      <FaDeleteLeft className="text-xl text-gray-800 group-hover:text-red-600 group-hover:scale-110 ease-initial transition-all duration-200" />
                    </button>
                  </div>
                </section>
              ))}
            </div>
          </section>
        : 
          <NoDataPrimary />
        }
    </section>

          
    
    </>
  )
}
