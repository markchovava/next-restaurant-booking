"use client"
import { IconPrimary } from '../icons/IconPrimary';


interface LinkPrimaryInterface {
    dbData: {
        href: string,
        name: string,
    },
    iconType: 'map' | 'list' | 'building' | string,
}



export default function LinkPrimary({ iconType, dbData }: LinkPrimaryInterface) {
    const { href, name } = dbData;

    return (
        <a href={href} className="w-full">
            <li className="w-full flex flex-col items-center justify-center p-4 space-y-1 bg-slate-900 transition hover:bg-slate-950 cursor-pointer">
                <IconPrimary iconType={iconType} />
                <span className="text-white text-xs font-light text-center leading-tight">
                    {name}
                </span>
            </li>
        </a>
    )
}