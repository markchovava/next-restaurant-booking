"use client"
import { TablePlanEntity, TablePlanInterface } from "@/_data/entity/TablePlanEntity";
import { create } from "zustand";


interface TablePlanStoreInterface{
    tablesData: TablePlanInterface[],
    isLoading: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
    hoveredTable: TablePlanInterface | null,
    selectedTable: TablePlanInterface | null,
    setToggleModal: (status: boolean) => void,
    setTablesData: (data: TablePlanInterface[]) => void,
    setHoveredTable: (data: TablePlanInterface) => void,
    setSelectedTable: (data: TablePlanInterface) => void,
    setLeaveTable: () => void
}


export const useTablePlanStore = create<TablePlanStoreInterface>((set, get) => ({ 
    tablesData: [],
    isLoading: true,
    isSubmitting: false,
    hoveredTable: null,
    selectedTable: null,
    toggleModal: false,
    setToggleModal: (status) => {
        set({
            toggleModal: status
        })
    },
    setTablesData: (data) => {
        set({
            tablesData: data,
            isLoading: false,
        })
    },
    setHoveredTable: (data) => {
        set({
            hoveredTable: data,
        })
    },
    setLeaveTable: () => {
        set({
            hoveredTable: null
        })
    },
    setSelectedTable: (data) => {
        set({
            selectedTable: data,
            toggleModal: true,
        })
    }
}))