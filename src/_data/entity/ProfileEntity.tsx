export interface ProfileInterface{
    id: number,
    name: string,
    phone: string,
    isAdmin: number,
    accessLevel: number,
    email: string,
    code: string,
    password: string,
    createdAt: string,
    updatedAt: string,
}


export const ProfileEntity: ProfileInterface = {
    id: 0,
    name: '',
    phone: '',
    isAdmin: 0,
    accessLevel: 0,
    email: '',
    code: '',
    password: '',
    createdAt: '',
    updatedAt: '',
}