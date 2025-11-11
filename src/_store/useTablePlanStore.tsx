"use client"
import { tableBookingScheduleFloorDateTimeAction, tableBookingScheduleFloorDateTimeAction2 } from "@/_api/_actions/TableBookingScheduleActions";
import { DbTableFloorPlanInterface } from "@/_data/entity/DbTableFloorPlanEntity";
import { TableBookingScheduleEntity, TableBookingScheduleInterface } from "@/_data/entity/TableBookingScheduleEntity";
import { create } from "zustand";


interface TablePlanStoreInterface{
    cookieData: TableBookingScheduleInterface,
    groundFloorTablesData: DbTableFloorPlanInterface[],
    firstFloorTablesData: DbTableFloorPlanInterface[],
    dbTablesData: DbTableFloorPlanInterface[],
    tablesData: DbTableFloorPlanInterface[],
    isLoading: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
    hoveredTable: DbTableFloorPlanInterface | null,
    selectedTable: DbTableFloorPlanInterface | null,
    setCookieData: (data: TableBookingScheduleInterface) => void,
    setDbTablesData: (data: DbTableFloorPlanInterface[]) => void,
    setToggleModal: (status: boolean) => void,
    setTablesData: (data: DbTableFloorPlanInterface[]) => void,
    setHoveredTable: (data: DbTableFloorPlanInterface) => void,
    setSelectedTable: (data: DbTableFloorPlanInterface) => void,
    setLeaveTable: () => void,
    getDataList: (date: string, time: string) => Promise<void>
}


export const useTablePlanStore = create<TablePlanStoreInterface>((set, get) => ({ 
    dbTablesData: [],
    groundFloorTablesData: [],
    firstFloorTablesData: [],
    tablesData: [],
    cookieData: TableBookingScheduleEntity,
    isLoading: true,
    isSubmitting: false,
    hoveredTable: null,
    selectedTable: null,
    toggleModal: false,
    setCookieData: (data) => {
        set({
            cookieData: data,
        })
    },
    setDbTablesData: (data) => {
        console.log('booking data in useTablePlanStore::::: ', data)
        set({
            dbTablesData: data,
            groundFloorTablesData: data.filter(i => i.floor === 'ground-floor'),
            firstFloorTablesData: data.filter(i => i.floor === 'first-floor'),
            isLoading: false,
        })
    },
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
    },
    getDataList: async (date, time) => {
        set({ isLoading: true });
        try {
            const res = await tableBookingScheduleFloorDateTimeAction2(date, time);
            console.log()
            // Check if response has the expected structure
            if (res && res.data && res.meta && res.links) {
                const { data } = res
                set({
                    dbTablesData: data,
                    groundFloorTablesData: data.filter((i: DbTableFloorPlanInterface) => i.floor === 'ground-floor'),
                    firstFloorTablesData: data.filter((i: DbTableFloorPlanInterface) => i.floor === 'first-floor'),
                    isLoading: false,
                })
            } else {
                // Fallback if structure is different
                set({
                    dbTablesData: [],
                    groundFloorTablesData: [],
                    firstFloorTablesData: [],
                    isLoading: false,
                })
            }
                } catch (error) {
                console.error(`Error: ${error}`);
                set({
                    dbTablesData: [],
                    groundFloorTablesData: [],
                    firstFloorTablesData: [],
                    isLoading: false,
                })
        }
    },
}))