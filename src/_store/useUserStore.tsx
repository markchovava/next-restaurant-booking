"use client"

import { UserEntity, UserInterface } from "@/_data/entity/UserEntity";
import { create } from "zustand";




interface UserStoreInterface{
    data: UserInterface,
    preData: UserInterface,
    dataList: UserInterface[],
    message: string,
    errors: UserInterface,
    isLoading: boolean,
    isSearching: boolean,
    isSubmitting: boolean,
    search: string,
     // Actions
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    setDataList: (data: UserInterface[]) => void,
    setData: (data: UserInterface) => void,
    setMessage: (i: string) => void,
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSubmitting: (status: boolean) => void,
    setDelete: (id: number | string) => void,
    setUpdate: (id: number | string) => void,
    setError: (field: keyof UserInterface, message: string) => void,
    setStore: (data: UserInterface) => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: UserInterface },
    clearErrors: () => void,
    resetData: () => void
}

export const useUserStore = create<UserStoreInterface>((set, get) => ({
    data: UserEntity,
    preData: UserEntity,
    message: "",
    errors: UserEntity,
    isLoading: true,
    isSearching: false,
    search: "",
    isSubmitting: false,
    dataList: [],
    // Actions
    setMessage: (msg) => {
        set({
            message: msg
        })
    },    
    setSearch: (e) => {
        const { value } = e.target;
        set({
            search: value
        })
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        const currentData = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...currentData,
                [name]: value
            },
            // Clear error for this field if it exists
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    setData: (data) => {
        set({
            data: data,
            preData: data,
            isLoading: false,
        })
    },
    setDataList: (data) => {
        
        set({
            dataList: data,
            isLoading: false,
        })
    },
    setIsSubmitting: (status) => {
        set({isSubmitting: status})
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value.trim()) {
                    error = "Question is required.";
                }
                break;
            case "phone":
                if(!value.trim()) {
                    error = "Answer is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...UserEntity };
        let hasError = false;
        // Validate name
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }
        // Validate PHONE
        const phoneError = get().validateField("phone", data.phone);
        if (phoneError) {
            errors.phone = phoneError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
    clearErrors: () => {
        set({ errors: UserEntity })
    },
    setError: (field, message) => {
        set((state) => ({
            errors: {
                ...state.errors,
                [field]: message
            }
        }));
    },
    setDelete: (id) => {},
    setUpdate: (id) => {},
    setStore: (data) => {},
    resetData: () => {
        set({
            data: UserEntity,
        })
    },

})) 