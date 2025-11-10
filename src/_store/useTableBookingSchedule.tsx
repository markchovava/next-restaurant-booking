"use client"
import { ResponseInterface } from "@/_data/entity/ResponseEntity";
import { TableBookingScheduleEntity, TableBookingScheduleInterface } from "@/_data/entity/TableBookingScheduleEntity";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/_localstorages/DataLocal";
import { getTheCookie, removeTheCookie, setTheCookie } from "@/cookies/CookiesClient";
import { create } from "zustand";



const localName = 'COBBLESTONE_BOOKING_COOKIE'


interface TableBookingScheduleStoreInterface{
    dataList: TableBookingScheduleInterface[],
    data: TableBookingScheduleInterface,
    preData: TableBookingScheduleInterface,
    errors: TableBookingScheduleInterface,
    isLoading: boolean,
    isSubmitting: boolean,
    setValue: (name: string, value: string | number) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    setIsSubmitting: (i: boolean) => void,
    setIsLoading: (i: boolean) => void,
    setDataList: (i: ResponseInterface) => void,
    getDataList: () => Promise<void>,
    setData: (data: any) => void,
    getData: () => void,
    validateField: (name: string, value: string | number) => string
    validateForm1: () => { isValid: boolean; errors: TableBookingScheduleInterface },
    validateForm2: () => { isValid: boolean; errors: TableBookingScheduleInterface },
    resetData: () => void,
    resetErrors: () => void,
}

export const useTableBookingScheduleStore = create<TableBookingScheduleStoreInterface>((set, get) => ({
    dataList: [],
    data: TableBookingScheduleEntity,
    preData: TableBookingScheduleEntity,
    errors: TableBookingScheduleEntity,
    isLoading: true,
    isSubmitting: false, 
    setValue: (name, value) => {
        const data = get().data
        const currentErrors = get().errors;
        set({
            data: {...data, [name]: value},
            errors: currentErrors && currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
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
            errors: currentErrors && currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    setIsSubmitting: (i) => {
        set({ isSubmitting: i })
    },
    setIsLoading: (i) => {
        set({ isLoading: i })
    },
    setDataList: (i) => {
        // TODO: Implement based on your ResponseInterface structure
    },
    getDataList: async () => {
        // TODO: Implement your API call here
    },
    setData: (i) => {
        const data = {...TableBookingScheduleEntity, ...i}
        set({ 
            data: data, 
            preData: data,
            isLoading: false 
        })
        const str = JSON.stringify(data)
        setTheCookie(localName, str)
    },
    getData: () => {
        //
        getTheCookie(localName)
    },
    validateField: (name, value) => {
        let error = ""
        const stringValue = String(value);
        switch(name){
            case "numberOfGuests":
                if(!stringValue.trim()) {
                    error = "Number Of Guests is required.";
                }
                break;
            case "date":
                if(!stringValue.trim()) {
                    error = "Date is required.";
                }
                break;
            case "time":
                if(!stringValue.trim()) {
                    error = "Time is required.";
                }
                break;
            case "fullName":
                if(!stringValue.trim()) {
                    error = "Full Name is required.";
                }
                break;
            case "email":
                if(!stringValue.trim()) {
                    error = "Email is required.";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stringValue)) {
                    error = "Please enter a valid email address.";
                }
                break;
            case "phone":
                if(!stringValue.trim()) {
                    error = "Phone Number is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm1: () => { 
        const { data } = get();
        let errors = { ...TableBookingScheduleEntity };
        let hasError = false;
        // Validate numberOfGuests
        const numberOfGuestsError = get().validateField("numberOfGuests", data?.numberOfGuests || "");
        if (numberOfGuestsError) {
            errors.numberOfGuests = numberOfGuestsError;
            hasError = true;
        }
        // Validate TIME
        const timeError = get().validateField("time", data?.time || "");
        if (timeError) {
            errors.time = timeError;
            hasError = true;
        }    
        // Validate DATE
        const dateError = get().validateField("date", data?.date || "");
        if (dateError) {
            errors.date = dateError;
            hasError = true;
        }     
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
    validateForm2: () => { 
        const { data } = get();
        let errors = { ...TableBookingScheduleEntity };
        let hasError = false;
        
        // Validate fullName
        const fullNameError = get().validateField("fullName", data?.fullName || "");
        if (fullNameError) {
            errors.fullName = fullNameError;
            hasError = true;
        }
        
        // FIXED: Validate EMAIL (was validating "time" instead)
        const emailError = get().validateField("email", data?.email || "");
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }
        
        // Validate PHONE
        const phoneError = get().validateField("phone", data?.phone || "");
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
    resetData: () => {
        set({
            data: TableBookingScheduleEntity,
            preData: TableBookingScheduleEntity,
        })
        removeTheCookie(localName)
    },
    resetErrors: () => {
        set({
            errors: TableBookingScheduleEntity,
        })
    },
}))