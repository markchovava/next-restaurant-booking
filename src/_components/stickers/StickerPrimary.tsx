"use client"

export default function StickerPrimary({status}: {status: string}) {
    const css = () => {
        switch(status){
            case "Available":
                return "bg-[#367F33]";
            case "Fully Booked":
                return "bg-[#ce1a14]"
            case "Partially Booked":
                return "bg-orange-400"
            default:
                return "bg-[#367F33]";
        }
    }

  return (
    <span className={`${css()} rounded-full text-white px-2 py-1`}>
        {status}
    </span>
  )
}
