"use client"


interface ButtonTertiaryInterface{
    title?: string,
    css?: string,
}


export default function ButtonTertiary({ 
    title="Edit",
    css="px-8 py-3 from-slate-600 to-slate-900 hover:from-slate-600 hover:to-slate-900"
}: ButtonTertiaryInterface
) {
  return (
    <button  
        className={`${css} cursor-pointer rounded-xl bg-linear-to-br 
        hover:bg-linear-to-tr hover:drop-shadow-lg  ease-linear transition-all 
        duration-150 text-white`}>
        {title}
    </button>
   
  )
}
