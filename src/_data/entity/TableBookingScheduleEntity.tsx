import { TableFloorPlanEntity, TableFloorPlanInterface } from "./TableFloorPlanEntity"

export interface TableBookingScheduleInterface{
    id: number,
    userId: number,
    bookingRef: string,
    tableFloorPlanId: number | string,
    date: string,
    time: string,
    status: string,
    css: string,
    fullName: string,
    email: string,
    phone: string,
    numberOfGuests: string,
    notes: string
    createdAt: string,
    updatedAt: string,
    tableFloorPlan?: TableFloorPlanInterface
}


export const TableBookingScheduleEntity: TableBookingScheduleInterface = {
    id: 0,
    userId: 0,
    bookingRef: "",
    tableFloorPlanId: 0,
    date: "",
    time: "",
    status: "",
    css: "",
    fullName: "",
    email: "",
    phone: "",
    numberOfGuests: "",
    notes: "",
    createdAt: "",
    updatedAt: "",
    tableFloorPlan: TableFloorPlanEntity
}


