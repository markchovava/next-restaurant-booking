"use client"
import { _tableFloorPlanAction, _tableFloorPlanPaginateAction, _tableFloorPlanSearchAction, _tableFloorPlanViewAction } from "@/_api/_actions/TableFloorPlanActions";
import { MetaEntity, MetaInterface, MetaLinksEntity, MetaLinksInterface, ResponseInterface } from "@/_data/entity/ResponseEntity";
import { TableFloorPlanEntity, TableFloorPlanInterface } from "@/_data/entity/TableFloorPlanEntity";
import { create } from "zustand";


interface TableFloorPlanStoreInterface{
    data: TableFloorPlanInterface,
    preData: TableFloorPlanInterface,
    errors: TableFloorPlanInterface,
    dataList: TableFloorPlanInterface[],
    message: string,
    isLoading: boolean,
    search: string,
    isSearching: boolean,
    isSubmitting: boolean,
    meta: MetaInterface,
    links: MetaLinksInterface,
    toggleModal: boolean,
    setData: (i: TableFloorPlanInterface) => void,
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSearching: (i: boolean) => void,
    setToggleModal: (i: boolean) => void,
    setMessage: (i: string) => void,
    setIsLoading: (i: boolean) => void,
    setIsSubmitting: (i: boolean) => void,
    setDataList: (i: ResponseInterface) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: TableFloorPlanInterface },
    clearErrors: () => void,
    getData: (i: string | number | null) => Promise<void>,
    getDatalist: () => Promise<void>,
    getPaginatedDataList: (url: string) => Promise<void>,
    getSearchDataList: (i: string) => Promise<void>,
}


export const useTableFloorPlanStore = create<TableFloorPlanStoreInterface>((set, get) => ({
    data: TableFloorPlanEntity,
    preData: TableFloorPlanEntity,
    message: "",
    search: "",
    errors: TableFloorPlanEntity,
    isSearching: false,
    meta: MetaEntity,
    links: MetaLinksEntity,
    isLoading: true,
    isSubmitting: false,
    toggleModal: false,
    dataList: [],
    setData: (i) => {
        set({
            data: i,
            preData: i,
            isLoading: false,
        })
    },
    setSearch: (e) => {
        const { value } = e.target;
        set({
            search: value
        })
    },
    setIsSearching: (i) => {
        set({
            isSearching: i
        })
    },
    setToggleModal: (i) => {
        set({
            toggleModal: i
        })
    },
    setMessage: (i) => {
        set({
            message: i
        })
    },
    setIsLoading: (i) => {
        set({
            isLoading: i
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
        })
    },
    setDataList: (i) => {
        const {links, meta, data} = i
        set({
            dataList: data,
            links: links,
            meta: meta,
            isLoading: false,
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
    clearErrors: () => {
        set({ errors: TableFloorPlanEntity })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value.trim()) {
                    error = "Name is required.";
                }
                break;
            case "details":
                if(!value.trim()) {
                    error = "Details is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...TableFloorPlanEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data?.name || "");
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }
        // Validate DETAILS
        const detailsError = get().validateField("details", data?.details || "");
        if (detailsError) {
            errors.details = detailsError;
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
            const res = await _tableFloorPlanViewAction(id)
            if(res && res?.data) {
                set({
                    data: res?.data,
                    preData: res?.data,
                    isLoading: false,
                });
                return
            }
            set({
                data: TableFloorPlanEntity,
                preData: TableFloorPlanEntity,
                isLoading: false,
            });
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: TableFloorPlanEntity,
                preData: TableFloorPlanEntity,
                isLoading: false,
            });
        }
    },
    getDatalist: async () => {
        set({ isLoading: true });
        try {
            const res = await _tableFloorPlanAction();
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
    getPaginatedDataList: async (url) => {
        set({ isLoading: true });
        try {
            const res = await _tableFloorPlanPaginateAction(url);
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
    getSearchDataList: async (i) => {
        set({ isSearching: true });
        try {
            const res = await _tableFloorPlanSearchAction(i);
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isSearching: false,
                });
            } else {
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
    }

}));