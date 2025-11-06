"use client"

import { BookingEntity, BookingInterface } from "@/_data/entity/BookingEntity"
import { create } from "zustand"


interface BookingUserStoreInterface{
    data: BookingInterface,
    errors: BookingInterface,
    isLoading: boolean,
    isSubmitting: boolean,
    setData: (data: BookingInterface) => void,
    setValue: (name: string, value: string | number) => void,
    getData: () => void,
    setIsLoading: (status: boolean) => void,
    validateField: (name: string, value: string | number) => string
    validateForm: () => { isValid: boolean; errors: BookingInterface },
}


export const useBookingUserStore = create<BookingUserStoreInterface>((set, get) => ({ 
    data: BookingEntity,
    errors: BookingEntity,
    isLoading: true,
    isSubmitting: false,
    setValue: (name, value) => {
        const data = get().data
        set({
            data: {...data, [name]: value}
        })
    },
    setData: (data) => {
        set({ data })
    },
    getData: () => {
        return get().data
    }, 
    setIsLoading: (status) => {
        set({ isLoading: status })
    }, 
    validateField: (name, value) => {
        let error = ""
        const stringValue = String(value)
        switch(name){
            case "numberOfGuests":
                if(!stringValue.trim()) {
                    error = "Number of Guests is required.";
                }
                break;
            case "time":
                if(!stringValue.trim()) {
                    error = "Time is required.";
                }
                break;
            case "date":
                if(!stringValue.trim()) {
                    error = "Date is required.";
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
        // Validate numberOfGuests
        const numberOfGuestsError = get().validateField("numberOfGuests", data.numberOfGuests);
        if (numberOfGuestsError) {
            errors.numberOfGuests = numberOfGuestsError;
            hasError = true;
        }
        // Validate date
        const dateError = get().validateField("date", data.date);
        if (dateError) {
            errors.date = dateError;
            hasError = true;
        }
        // Validate time
        const timeError = get().validateField("time", data.time);
        if (timeError) {
            errors.time = timeError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
}))