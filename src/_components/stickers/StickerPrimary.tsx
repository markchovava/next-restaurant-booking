"use client"


export default function StickerPrimary({status}: {status: string}) {
    const css = () => {
        switch(status){
            case "Available":
                return "bg__available";
            case "Reserved":
                return "bg__reserved"
            case "Unavailable":
                return "bg__unavailable"
            default:
                return "bg__available";
        }
    }

  return (
    <span className={`${css()} rounded-full text-white px-2 py-1`}>
        {status}
    </span>
  )
}
