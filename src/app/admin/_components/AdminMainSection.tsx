"use client"
import CardSecondary from '@/_components/cards/CardSecondary';
import Heading1 from '@/_components/headings/Heading1'
import { AdminData } from '@/_data/sample/AdminData';
import { IoBookOutline } from "react-icons/io5";

const title = "Dashboard"

export default function AdminMainSection() {
  return (
    <div className='px-8'>
        <section className="h-20 flex items-center justify-between border-b border-slate-300 pb-2">
        <Heading1 title={title} />
        </section>

        <section className='pt-10 pb-20 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6'>
           {AdminData.map((i, key) => (
            <CardSecondary key={key} data={i} />
           ))}
        </section>
    </div>
  )
}
