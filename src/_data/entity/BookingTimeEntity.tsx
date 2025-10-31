export interface BookingTimeInterface{
    id: number,
    startTime: string,
    endTime: string,
    status: string,
    tableId: number,
    createdAt: string,
    updatedAt: string,
}


export const BookingTimeEntity = {
    id: 0,
    startTime: "",
    endTime: "",
    status: "",
    tableId: "",
    createdAt: "",
    updatedAt: "",
}