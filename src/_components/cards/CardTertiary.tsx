"use client"


interface CardTertiaryInterface{
    status: string,
    startTime: string,
    endTime: string,
    onClick: () => void
}


export default function CardTertiary({
    status, 
    onClick,
    startTime, 
    endTime
}: CardTertiaryInterface
) {

    const css = () => {
        switch(status){
            case "Available":
                return `bg-teal-700 hover:bg-teal-800`;
            case "Unavailable":
                return `bg-gray-700 hover:bg-gray-800`;
            case "Reserved":
                return `bg-red-700 hover:bg-red-800`;
            default:
                return "bg-teal-700 hover:bg-teal-800"
        }
    }

  return (
    <div onClick={onClick} 
        className={` ${css()} cursor-pointer rounded-lg flex text-white 
            drop-shadow hover:drop-shadow-xl flex-col items-center 
            justify-center px-6 py-4 ease-initial transition-all `}>
        <p className='text-xl font-bold'>{status}</p>
        <div className='text-sm gap-2 flex items-center justify-center'>
            <p>{startTime}</p> |
            <p>{endTime}</p>
        </div>
    </div>
  )
}
