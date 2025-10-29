"use client"

export default function Heading1({title}: {title: string}) {
  return (
    <>
    <h3 className="lg:text-[3rem] text-[2.3rem] font-black leading-tight">
          {title}
    </h3>
    </>
  )
}
