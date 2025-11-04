"use client"

import { _profileViewAction } from "@/_api/_actions/ProfileActions";
import { ProfileEntity, ProfileInterface } from "@/_data/entity/ProfileEntity";
import { create } from "zustand"


interface ProfileStoreInterface{
    data: ProfileInterface,
    preData: ProfileInterface,
    errors: ProfileInterface,
    isLoading: boolean,
    isSubmitting: boolean,
    message: string,
    toggleModal: boolean,
    setToggleModal: (status: boolean) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    setData: (data: ProfileInterface) => void,
    setMessage: (msg: string) => void,
    setIsSubmitting: (status: boolean) => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: ProfileInterface },
    clearErrors: () => void,
    getData: () => Promise<void>
}


export const useProfileStore = create<ProfileStoreInterface>((set, get) => ({
    data: ProfileEntity,
    preData: ProfileEntity,
    errors: ProfileEntity,
    isLoading: true,
    isSubmitting: false,
    toggleModal: false,
    message: "",
    setToggleModal: (status) => {
        set({
            toggleModal: status 
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
            isLoading: false
        })
    },
    setIsSubmitting: (status) => {
        set({isSubmitting: status})
    },
    clearErrors: () => {
            set({ errors: ProfileEntity })
    },
    setMessage: (msg) => {
        set({
            message: msg
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value?.trim()) {
                    error = "Name is required.";
                }
                break;
            case "phone":
                if(!value?.trim()) {
                    error = "Phone is required.";
                }
                break;
            case "email":
                if(!value?.trim()){
                    error = "Email is required.";
                } 
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...ProfileEntity };
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
        // Validate PHONE
        const emailError = get().validateField("email", data.email);
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }

        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
    getData: async () => {
        try {
            const res = await _profileViewAction();
            if (res && res.data ) {
                set({
                    data: res.data,
                    preData: res.data,
                    isLoading: false,
                });
            } else {
                set({
                    data: ProfileEntity,
                    preData: ProfileEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: ProfileEntity,
                preData: ProfileEntity,
                isLoading: false,
            });
        }
    }
}))