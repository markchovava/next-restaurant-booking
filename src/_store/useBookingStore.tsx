"use client"
import { BookingEntity, BookingInterface } from "@/_data/entity/BookingEntity";
import { create } from "zustand";



interface BookingStoreInterface{
    data: BookingInterface,
    errors: BookingInterface,
    isSubmitting: boolean,
    isLoading: boolean,
    dataList: BookingInterface[],
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    setData: (data: BookingInterface) => void,
    setDataList: (data: BookingInterface[]) => void,
    resetData: () => void,
    setErrors: (data: BookingInterface) => void,
    setIsSubmitting: (status: boolean) => void,
}


export const useBookingStore = create<BookingStoreInterface>((set, get) => ({ 
    data: BookingEntity,
    errors: BookingEntity,
    isSubmitting: false,
    isLoading: true,
    dataList: [],
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
            data: data
        })
    },
    setDataList: (data) => {
        set({
            dataList: data
        })
    },
    setErrors: (data) => {
        set({
            errors: data
        })
    },
    setIsSubmitting: (status) => {
        set({
            isSubmitting: status
        })
    },
    resetData: () => {
        set({
            data: BookingEntity,
            errors: BookingEntity
        })
    }
}));