"use client"

import { _contactListAction, _contactPaginateAction, _contactSearchAction, _contactViewAction } from "@/_api/_actions/ContactActions";
import { MetaEntity, MetaInterface, MetaLinksEntity, MetaLinksInterface, ResponseInterface } from "@/_data/entity/ResponseEntity";
import { MessageEntity, MessageInterface } from "@/_data/entity/MessageEntity";
import { create } from "zustand";



interface MessageStoreInterface{
    data: MessageInterface,
    preData: MessageInterface,
    dataList: MessageInterface[],
    message: string,
    errors: MessageInterface,
    isLoading: boolean,
    isSearching: boolean,
    meta: MetaInterface,
    links: MetaLinksInterface,
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
    setDataList: (data: ResponseInterface) => void,
    setData: (data: MessageInterface) => void,
    setMessage: (i: string) => void,
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSubmitting: (status: boolean) => void,
    setDelete: (id: number | string) => void,
    setUpdate: (id: number | string) => void,
    setError: (field: keyof MessageInterface, message: string) => void,
    setStore: (data: MessageInterface) => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: MessageInterface },
    clearErrors: () => void,
    resetData: () => void,
    getDatalist: () => Promise<void>
    getSearchDatalist: (search: string) => Promise<void>
    getPaginatedDatalist: (url: string) => Promise<void>
    getDataById: (id: string | number) => Promise<void>
}



export const useMessageStore = create<MessageStoreInterface>((set, get) => ({
    data: MessageEntity,
    preData: MessageEntity,
    message: "",
    errors: MessageEntity,
    isLoading: true,
    isSearching: false,
    search: "",
    toggleModal: false,
    isSubmitting: false,
    dataList: [],
    meta: MetaEntity,
    links: MetaLinksEntity,
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
    setDataList: (res) => {
        const {links, meta, data} = res
        set({
            dataList: data,
            links: links,
            meta: meta,
            isLoading: false,
        })
    },
    setIsSubmitting: (status) => {
        set({isSubmitting: status})
    },
    setToggleModal: (status) => {
        set({
            toggleModal: status
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
            case "message":
                if(!value.trim()) {
                    error = "Message is required.";
                }
                break;
            case "email":
                if(!value.trim()) {
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
        let errors = { ...MessageEntity };
        let hasError = false;
        // Validate name
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }
         // Validate PHONE
        const emailError = get().validateField("email", data.email);
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }
        // Validate PHONE
        const messageError = get().validateField("message", data.message);
        if (messageError) {
            errors.message = messageError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
    clearErrors: () => {
        set({ errors: MessageEntity })
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
            data: MessageEntity,
        })
    },
    getDatalist: async() => {
        set({ isLoading: true });
        try {
            const res = await _contactListAction();
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
    getSearchDatalist: async (search) => {
        set({ isSearching: true });
        try {
            const res = await _contactSearchAction(search);
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
    getPaginatedDatalist: async (url: string) => {
        set({ isLoading: true });
        try {
            const res = await _contactPaginateAction(url);
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
    getDataById: async (id) => {
            try {
                const res = await _contactViewAction(id);
                if (res && res.data ) {
                    set({
                        data: res.data,
                        preData: res.data,
                        isLoading: false,
                    });
                } else {
                    set({
                        data: MessageEntity,
                        preData: MessageEntity,
                        isLoading: false,
                    });
                }
            } catch (error) {
                console.error(`Error: ${error}`);
                set({
                    data: MessageEntity,
                    preData: MessageEntity,
                    isLoading: false,
                });
            }
        },

}))



