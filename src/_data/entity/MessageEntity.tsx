export interface MessageInterface{
    id: number,
    message: string,
    email: string,
    name: string,
    status: string,
    userId: number,
    updatedAt: string,
    createdAt: string,
}


export const MessageEntity: MessageInterface = {
    id: 0,
    message: "",
    email: "",
    name: "",
    status: "",
    userId: 0,
    updatedAt: "",
    createdAt: "",
}