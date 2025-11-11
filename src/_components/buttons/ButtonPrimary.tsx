"use client"


interface ButtonPrimaryInterface{
    status: boolean,
    title?: string,
    css?: string,
}


export default function ButtonPrimary({
    status, 
    title="Submit",
    css="px-12 py-3 from-black to-slate-800 hover:from-slate-800 hover:to-black"
}: ButtonPrimaryInterface
) {
  return (
    <div className='w-full flex items-center justify-center'>
        <button 
            type='submit' 
            className={`${css} cursor-pointer rounded-xl bg-linear-to-br hover:bg-linear-to-tr hover:drop-shadow-lg  ease-linear transition-all duration-150 text-white`}>
            { status ? 
                'Processing' : 
                title 
            }
        </button>
    </div>
  )
}
