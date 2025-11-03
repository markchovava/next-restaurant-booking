export interface AuthInterface{
    id: number,
    name: string,
    phone: string,
    email: string,
    password: string,
    passwordConfirm: string,
    code: string,
    isAdmin: number,
    accessLevel: number,
    createdAt: string,
    updatedAt: string,
}


export const AuthEntity: AuthInterface = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: '',
    code: '',
    isAdmin: 0,
    accessLevel: 0,
    createdAt: '',
    updatedAt: '',
}