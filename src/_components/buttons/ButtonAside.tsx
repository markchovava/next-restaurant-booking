"use client"
import { NavDataInterface } from '@/_data/entity/NavDataEntity';
import { IconPrimary } from '../icons/IconPrimary';


interface ButtonAsideInterface {
    dbData: NavDataInterface,
    onClick: () => void
}



export default function ButtonAside({ dbData, onClick }: ButtonAsideInterface) {
    // Destructure href as well
    const { id, name, isClicked, iconType, href  } = dbData;

    console.log('dbData', dbData)

    return (
    // Wrap content in an <a> tag for accessibility and proper link usage
    <li className="w-full">
        <a  href={href} // Use the href from dbData
            onClick={onClick} 
            className={`${isClicked ? "bg-slate-950" : "bg-slate-900 " } 
            w-full flex flex-col items-center justify-center p-4 
            space-y-1 transition-all hover:bg-slate-950 cursor-pointer`}>
            <IconPrimary iconType={iconType} />
            <span className="text-white text-xs font-light text-center leading-tight">
                {name}
            </span>
        </a>
    </li>
    )
}