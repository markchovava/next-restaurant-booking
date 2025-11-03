export interface ContactInterface{
    id: number,
    message: string,
    email: string,
    name: string,
    status: string,
    userId: number,
    updatedAt: string,
    createdAt: string,
}


export const ContactEntity: ContactInterface = {
    id: 0,
    message: "",
    email: "",
    name: "",
    status: "",
    userId: 0,
    updatedAt: "",
    createdAt: "",
}