export interface TablePlanInterface{
    id: number,
    name: string,
    css: string,
    details: string,
    d:string,
    size: string,
    numberOfSeats: number,
    status: string,
    createdAt: string,
    updatedAt: string,
}


export const TablePlanEntity: TablePlanInterface = {
    id: 0,
    name: "",
    css: "",
    details: "",
    d: "",
    size: "",
    numberOfSeats: 0,
    status: "",
    createdAt: "",
    updatedAt: "",
}