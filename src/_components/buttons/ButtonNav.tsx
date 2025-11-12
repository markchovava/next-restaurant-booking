"use client";

export default function ButtonNav({title}: {title: string}) {
  return (
    <>
     <button className={`px-4.5 py-2 cursor-pointer rounded-lg 
        text-white hover:text-black uppercase
        border-white border hover:bg-white transition-all duration-200`}>
        {title}
    </button>
    </>
  )
}
