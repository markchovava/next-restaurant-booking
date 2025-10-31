"use client"

import Link from "next/link"
import { IconPrimary } from "../icons/IconPrimary"

interface CardSecondaryInterface{
    id: number,
    css:string,
    name:string,
    href:string,
    iconType: string
}

export default function CardSecondary({data}: {data: CardSecondaryInterface}) {
    const {id, css, name, href, iconType} = data
  return (
    <Link href={href}>
        <div className={`${css} cursor-pointer hover:drop-shadow-xl p-4 flex justify-start items-center gap-3 bg-linear-to-br 
        text-white rounded-lg drop-shadow`}>
            <div>
                <IconPrimary iconType={iconType} css="text-[3rem]" />
            </div>
            <div><h2 className='xl:text-xl text-lg font-light'>{name}</h2></div>
        </div>
    </Link>
  )
}
