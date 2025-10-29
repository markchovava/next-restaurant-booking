"use client"
import { BsBuildings } from "react-icons/bs";
import { FaRegMap, FaRegRectangleList } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

interface IconPrimaryInterface{
    iconType?: string, 
    css?: string
}

export const IconPrimary = ({ 
    iconType, 
    css="text-white text-[2.2rem]" 
}: IconPrimaryInterface
) => {
    
    switch (iconType) {
        case 'user':
            return <FaRegUser className={css} />;
        case 'group':
            return <MdOutlineGroups className={css} />;
        case 'map':
            return <FaRegMap className={css} />;
        case 'list':
            return <FaRegRectangleList className={css} />;
        case 'info':
            return <MdOutlineInfo className={css} />;
        case 'booking':
            return <IoBookOutline className={css} />;
        case 'dashboard':
            return <MdOutlineDashboard className={css} />;
        case 'building':
            // Using BsBuildings from react-icons/bs as an example
            return <BsBuildings className={css} />;
        default:
            // Fallback icon if iconType doesn't match
            return <FiLink className={css} />;
    }

}