export interface TableFloorPlanInterface{
    id: number,
    userId: number,
    name: string, 
    d: string,
    details: string,
    floor: string,
    createdAt: string,
    updatedAt: string
}


export const TableFloorPlanEntity: TableFloorPlanInterface = {
    id: 0,
    userId: 0,
    name: "", 
    d: "",
    details: "",
    floor: "",
    createdAt: "",
    updatedAt: ""
}