export interface AppInfoInterface{
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
    address: string,
    whatsapp: string,
    facebook: string,
    createdAt: string,
    updatedAt: string,
    userId: number,
    description: string,
}


export const AppInfoEntity: AppInfoInterface = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    website: '',
    address: '',
    whatsapp: '',
    facebook: '',
    createdAt: '',
    updatedAt: '',
    userId: 0,
    description: ''
}