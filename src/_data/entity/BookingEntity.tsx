export interface BookingInterface{
    id: number,
    fullName: string,
    email: string,
    phone: string,
    numberOfPeople: number,
    numberOfChildren: number,
    startTime: string,
    endTime: string,
    date: string,
    tableName: string,
    tableId: number,
    tableDetails: string,
    createdAt: string,
    updatedAt: string,
    status: string,
}


export const BookingEntity = {
    id: 0,
    fullName: "",
    email: "",
    phone: "",
    numberOfPeople: 0,
    numberOfChildren: 0,
    startTime: "",
    endTime: "",
    date: "",
    tableName: "",
    tableId: 0,
    tableDetails: "",
    createdAt: "",
    updatedAt: "",
    status: "",
}

