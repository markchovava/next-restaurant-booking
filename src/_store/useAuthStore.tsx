"use client"
import { AuthEntity, AuthInterface } from "@/_data/entity/AuthEntity"
import { create } from "zustand";


interface AuthStoreInterface{
    data: AuthInterface,
    errors: AuthInterface,
    message: string,
    isLoading: boolean,
    isSubmitting: boolean,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    setData: (data: AuthInterface) => void,
    resetData: () => void,
    setIsSubmitting: (status: boolean) => void,
    setMessage: (str: string) => void,
    clearErrors: () => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: AuthInterface },
}


export const useAuthStore = create<AuthStoreInterface>((set, get) => ({ 
    data: AuthEntity,
    errors: AuthEntity,
    message: "",
    isLoading: true,
    isSubmitting: false,
    setIsSubmitting: (status) => {
        set({
            isSubmitting: status
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
            isLoading: false
        })
    },
    resetData: () => {
        data: AuthEntity
    },
    clearErrors: () => {
        set({ errors: AuthEntity })
    },
    setMessage: (str) => {
        set({
            message: str
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value.trim()) {
                    error = "Name is required.";
                }
                break;
            case "phone":
                if(!value.trim()) {
                    error = "Phone is required.";
                }
                break;
            case "email":
                if(!value.trim()){
                    error = "Email is required.";
                } 
                break;
            case "password":
                if (!value.trim()) {
                    error = "Password is required.";
                }
                break;
            case "passwordConfirm":
                if (!value.trim()) {
                    error = "Confirm Password is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...AuthEntity };
        let hasError = false;
        // Validate name
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }
        // Validate EMAIL
        const emailError = get().validateField("email", data.email);
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }
        // Validate PASSWORD
        const passwordError = get().validateField("password", data.password);
        if (passwordError) {
            errors.password = passwordError;
            hasError = true;
        }
        // Validate PASSWORD
        const passwordConfirmError = get().validateField("passwordConfirm", data.passwordConfirm);
        if (passwordConfirmError) {
            errors.passwordConfirm = passwordConfirmError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
}));