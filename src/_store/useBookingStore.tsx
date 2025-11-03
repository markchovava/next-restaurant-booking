"use client"

import { BookingEntity, BookingInterface } from "@/_data/entity/BookingEntity";
import { create } from "zustand";




interface BookingStoreInterface{
    data: BookingInterface,
    preData: BookingInterface,
    dataList: BookingInterface[],
    message: string,
    errors: BookingInterface,
    isLoading: boolean,
    isSearching: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
    setToggleModal: (status: boolean) => void,
    search: string,
     // Actions
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    setDataList: (data: BookingInterface[]) => void,
    setData: (data: BookingInterface) => void,
    setMessage: (i: string) => void,
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSubmitting: (status: boolean) => void,
    setDelete: (id: number | string) => void,
    setUpdate: (id: number | string) => void,
    setError: (field: keyof BookingInterface, message: string) => void,
    setStore: (data: BookingInterface) => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: BookingInterface },
    clearErrors: () => void,
    resetData: () => void
}



export const useBookingStore = create<BookingStoreInterface>((set, get) => ({
    data: BookingEntity,
    preData: BookingEntity,
    message: "",
    errors: BookingEntity,
    isLoading: true,
    isSearching: false,
    search: "",
    toggleModal: false,
    isSubmitting: false,
    dataList: [],
    // Actions
    setToggleModal: (status) => {
        set({
            toggleModal: status
        })
    },
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
            case "tableName":
                if(!value.trim()) {
                    error = "Table Name is required.";
                }
                break;
            case "startTime":
                if(!value.trim()) {
                    error = "Start Time is required.";
                }
                break;
            case "endTime":
                if(!value.trim()) {
                    error = "Ending Time is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...BookingEntity };
        let hasError = false;
        // Validate name
        const tableNameError = get().validateField("tableName", data.tableName);
        if (tableNameError) {
            errors.tableName = tableNameError;
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
        set({ errors: BookingEntity })
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
            data: BookingEntity,
        })
    },

})) 