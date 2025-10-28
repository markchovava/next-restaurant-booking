"use client"


interface ButtonPrimaryInterface{
    status: boolean,
    title?: string,
    css?: string,
}


export default function ButtonPrimary({
    status, 
    title="Submit",
    css="px-12 py-3 from-slate-600 to-slate-900 hover:from-slate-600 hover:to-slate-900"
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
