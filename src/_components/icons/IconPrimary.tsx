"use client"
import { BsBuildings } from "react-icons/bs";
import { FaRegMap, FaRegRectangleList } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";



export const IconPrimary = ({ iconType }: { iconType: string }) => {
    const iconClass = "text-white text-[2.2rem]";

    switch (iconType) {
        case 'map':
            return <FaRegMap className={iconClass} />;
        case 'list':
            return <FaRegRectangleList className={iconClass} />;
        case 'building':
            // Using BsBuildings from react-icons/bs as an example
            return <BsBuildings className={iconClass} />;
        default:
            // Fallback icon if iconType doesn't match
            return <FiLink className={iconClass} />;
    }

}