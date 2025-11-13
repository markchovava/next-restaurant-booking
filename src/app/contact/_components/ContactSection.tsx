"use client"
import BreadCrumbs from "@/_components/breadcrumbs/BreadCrumbs"
import CardContact from "@/_components/cards/CardContact";
import FormContact from "@/_components/forms/FormContact";
import Heading1 from "@/_components/headings/Heading1"
import { ContactInfoData } from "@/_data/sample/ContactData";
import { useContactStore } from "@/_store/useContactStore";



const title = "Contact Us"
const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 3, name: "Contact Us", href:"/contact"},
]

export default function ContactSection() {
    const {
        data, 
        setInputValue, 
        errors, 
        isSubmitting
    } = useContactStore()

  return (
    <div className="w-full min-h-screen pb-30">
        <section className="h-16 sm:h-20 flex items-center justify-between border-b border-slate-300 pb-2">
            <div className="px-8 w-full text-center flex items-center justify-center">
                <Heading1 title={title} />
            </div>
            </section>
        <div className="px-8">
            <BreadCrumbs data={BreadCrumbsData} />
        </div>
        <div className="h-16" />
        <section className="px-8 grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="bg-white drop-shadow py-8 px-5 ">
                <h3 className="text-[2.5rem] font-light mb-3">Contact Details</h3>
                <div className="flex flex-col items-start justify-start gap-4">
                    {ContactInfoData.map((i, key) => (
                        <CardContact key={key} data={i} />
                    ))}
                </div>
            </div>

            <div className="bg-white drop-shadow py-8 px-5 ">
                <FormContact />
            </div>
           
        </section>

        <div className="h-30" />
    </div>
  )
}
