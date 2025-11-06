"use client"
import CardSecondary from '@/_components/cards/CardSecondary';
import Heading1 from '@/_components/headings/Heading1'
import { AdminData } from '@/_data/sample/AdminData';


const title = "Dashboard"

export default function AdminMainSection() {
  return (
    <div className=''>
        <section className="h-20 flex items-center justify-between border-b border-slate-300 pb-2">
          <div className='px-8 w-full flex items-center justify-between'>
            <Heading1 title={title} />
            <div>
              <button className={`cursor-pointer px-5 absolute z-90 top-4 right-8 border ease-initial 
                transition-all duration-200 border-slate-900 hover:border-transparent 
                hover:bg-slate-900 hover:text-white hover:drop-shadow-lg rounded-lg py-2`}>
                Logout
              </button>
            </div>
          </div>
        </section>

        <section className='pt-10 px-8 pb-20 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6'>
           {AdminData.map((i, key) => (
            <CardSecondary key={key} data={i} />
           ))}
        </section>
        
    </div>
  )
}
