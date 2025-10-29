"use client"

export default function StickerSecondary({status}: {status: string}) {
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
    <div className={`${css()} text-xl font-bold w-[80%] text-white px-4 py-2`}>
        {status}
    </div>
  )
}
