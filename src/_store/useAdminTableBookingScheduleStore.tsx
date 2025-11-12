"use client"
import { _tableBookingScheduleListAction, _tableBookingSchedulePaginatedAction, _tableBookingScheduleSearchAction, _tableBookingScheduleViewAction } from "@/_api/_actions/TableBookingScheduleActions";
import { MetaEntity, MetaInterface, MetaLinksEntity, MetaLinksInterface, ResponseInterface } from "@/_data/entity/ResponseEntity";
import { TableBookingScheduleEntity, TableBookingScheduleInterface } from "@/_data/entity/TableBookingScheduleEntity";
import { create } from "zustand";

interface AdminTableBookingScheduleStoreInterface {
    data: TableBookingScheduleInterface;
    preData: TableBookingScheduleInterface;
    dataList: TableBookingScheduleInterface[];
    errors: TableBookingScheduleInterface;
    isLoading: boolean;
    message: string;
    search: string;
    meta: MetaInterface;
    links: MetaLinksInterface;
    isSubmitting: boolean;
    toggleModal: boolean;
    isSearching: boolean;
    
    /* ACTIONS */
    setIsSearching: (i: boolean) => void;
    setToggleModal: (i: boolean) => void;
    setData: (data: TableBookingScheduleInterface) => void;
    setDataList: (data: ResponseInterface) => void;
    setSearch: (value: string) => void;
    setIsSubmitting: (i: boolean) => void;
    setIsLoading: (i: boolean) => void;
    resetData: () => void;
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void;
    clearErrors: () => void;
    getDataList: () => Promise<void>;
    getPaginatedList: (url: string) => Promise<void>;
    getSearchDataList: (i: string) => Promise<void>; 
    validateField: (name: string, value: string) => string,
    validateForm1: () => { isValid: boolean; errors: TableBookingScheduleInterface },
    getData: (id: number | string) => Promise<void>
}

export const useAdminTableBookingScheduleStore = create<AdminTableBookingScheduleStoreInterface>((set, get) => ({
    data: TableBookingScheduleEntity,
    preData: TableBookingScheduleEntity,
    dataList: [],
    errors: TableBookingScheduleEntity,
    message: "",
    search: "",
    meta: MetaEntity,
    links: MetaLinksEntity,
    isSubmitting: false,
    toggleModal: false,
    isLoading: true,
    isSearching: false,
    
    /* ACTIONS */
    setIsSearching: (i: boolean) => {
    set({ isSearching: i });
    },
    
    setToggleModal: (i: boolean) => {
        set({ toggleModal: i });
    },
    
    setData: (i: TableBookingScheduleInterface) => {
        set({
            preData: i,
            data: i,
            isLoading: false
        });
    },
    
    setDataList: (res: ResponseInterface) => {
        const { links, meta, data } = res;
        set({
            dataList: data,
            links: links,
            meta: meta,
            isLoading: false,
        });
    },
    
    setSearch: (value: string) => {
        set({ search: value });
    },
    
    setIsSubmitting: (i: boolean) => {
        set({ isSubmitting: i });
    },
    
    setIsLoading: (i: boolean) => {
        set({ isLoading: i });
    },
    
    resetData: () => {
        set({ data: TableBookingScheduleEntity });
    },
    
    setInputValue: (e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> | 
        React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        const currentData = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...currentData,
                [name]: value
            },
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    
    clearErrors: () => {
        set({ errors: TableBookingScheduleEntity });
    },

    getDataList: async () => {
        set({ isLoading: true });
        try {
            const res = await _tableBookingScheduleListAction();
            // Check if response has the expected structure
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isLoading: false,
                });
            } else {
                // Fallback if structure is different
                set({
                    dataList: Array.isArray(res) ? res : res.data || [],
                    meta: res.meta || MetaEntity,
                    links: res.links || MetaLinksEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                dataList: [],
                meta: MetaEntity,
                links: MetaLinksEntity,
                isLoading: false,
            });
        }
    },
    
    getPaginatedList: async (url) => {
        set({ isSearching: true }); 
        try {
            const res = await _tableBookingSchedulePaginatedAction(url);
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isSearching: false,
                });
            } else {
                // Fallback if structure is different
                set({
                    dataList: Array.isArray(res) ? res : res.data || [],
                    meta: res.meta || MetaEntity,
                    links: res.links || MetaLinksEntity,
                    isSearching: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                dataList: [],
                meta: MetaEntity,
                links: MetaLinksEntity,
                isSearching: false,
            });
        }
    },
    
    getSearchDataList: async (search) => { 
        set({ isSearching: true });
        try {
            const res = await _tableBookingScheduleSearchAction(search);
            // Check if response has the expected structure
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isSearching: false,
                });
            } else {
                // Fallback if structure is different
                set({
                    dataList: Array.isArray(res) ? res : res.data || [],
                    meta: res.meta || MetaEntity,
                    links: res.links || MetaLinksEntity,
                    isSearching: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                dataList: [],
                meta: MetaEntity,
                links: MetaLinksEntity,
                isSearching: false,
            });
        }
    },

    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "fullName":
                if(!value.trim()) {
                    error = "fullName is required.";
                }
                break;
            case "email":
                if(!value.trim()) {
                    error = "Email is required.";
                }
                break;
            case "phone":
                if(!value.trim()) {
                    error = "Phone is required.";
                }
                break;
            case "date":
                if(!value.trim()) {
                    error = "Date is required.";
                }
                break;
            case "time":
                if(!value.trim()) {
                    error = "Time is required.";
                }
                break;
            case "status":
                if(!value.trim()) {
                    error = "Status is required.";
                }
                break;
            case "numberOfGuests":
                if(!value.trim()) {
                    error = "Number Of Guests is required.";
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
        // Validate NAME
        const fullNameError = get().validateField("fullName", data?.fullName || "");
        if (fullNameError) {
            errors.fullName = fullNameError;
            hasError = true;
        }
        const emailError = get().validateField("email", data?.email || "");
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }
        const phoneError = get().validateField("phone", data?.phone || "");
        if (phoneError) {
            errors.phone = phoneError;
            hasError = true;
        }
        const numberOfGuestsError = get().validateField("numberOfGuests", data?.numberOfGuests || "");
        if (numberOfGuestsError) {
            errors.numberOfGuests = numberOfGuestsError;
            hasError = true;
        }
        const dateError = get().validateField("date", data?.date || "");
        if (dateError) {
            errors.date = dateError;
            hasError = true;
        }
        const timeError = get().validateField("time", data?.time || "");
        if (timeError) {
            errors.time = timeError;
            hasError = true;
        }
        const statusError = get().validateField("status", data?.status || "");
        if (statusError) {
            errors.status = statusError;
            hasError = true;
        }

        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
    getData: async (id) => {
         try {
            const res = await _tableBookingScheduleViewAction(id);
            if (res && res.data ) {
                set({
                    data: res.data,
                    preData: res.data,
                    isLoading: false,
                });
            } else {
                set({
                    data: TableBookingScheduleEntity,
                    preData: TableBookingScheduleEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: TableBookingScheduleEntity,
                preData: TableBookingScheduleEntity,
                isLoading: false,
            });
        }
    }
}));