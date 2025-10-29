"use client"

import { TablePlanInterface } from "@/_data/entity/TablePlanEntity"
import RecordSecondary from "../records/RecordSecondary"
import StickerSecondary from "../stickers/StickerSecondary"
import ButtonSecondary from "../buttons/ButtonSecondary"
import { useTablePlanStore } from "@/_store/useTablePlanStore"

export default function CardPrimary({data}:{data: TablePlanInterface}) {
     const { setSelectedTable } = useTablePlanStore()
     const i = data
  return (
    <div  className="bg-white drop-shadow-md px-4 pt-2 pb-4">
        <h3 className="font-light text-[2rem]">{i.name}</h3>
        <div className="h-2" />
            <StickerSecondary status={i.status} />
            <div className="pt-2 pb-3 flex flex-col gap-1">
            <RecordSecondary label="Floor" value={i.floor} />
            <RecordSecondary label="Number of Seats" value={i.numberOfSeats} />
            <RecordSecondary label="Table Id" value={i.id} />
            <RecordSecondary label="Details" value={i.details} />
        </div>
        <div className="">
        <ButtonSecondary title="Book Now" onClick={() => setSelectedTable(data)} />
        </div>
    </div>
  )
}
