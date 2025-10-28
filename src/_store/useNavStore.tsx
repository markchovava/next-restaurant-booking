"use client"

import { NavDataEntity, NavDataInterface } from "@/_data/entity/NavDataEntity"
import { AsideNavData, BottomNavData } from "@/_data/sample/NavData"
import { create } from "zustand"




interface NavStoreInterface{
    asideNavData: NavDataInterface[],
    bottomNavData: NavDataInterface[],
    setAsideNavData: (data: NavDataInterface[]) => void,
    setBottomNavData: (data: NavDataInterface[]) => void,
    setAsideIsClicked: (id: number) => void,
    setBottomIsClicked: (id: number) => void,
}


export const useNavStore = create<NavStoreInterface>((set, get) => ({ 
    asideNavData: AsideNavData,
    bottomNavData: BottomNavData,
    data: NavDataEntity,
    setAsideNavData: (data) => {
        set({
            asideNavData: data
        })
    },
    setBottomNavData: (data) => {
        set({
            bottomNavData: data
        })
    },
    setAsideIsClicked: (id) => {
        set((state) => ({
            asideNavData: state.asideNavData.map((i) => ({
                ...i, 
                isClicked: i.id === id 
            }))
        }))
    },
    setBottomIsClicked: (id) => {
        set((state) => ({
            bottomNavData: state.bottomNavData.map((i) => ({
                ...i, 
                isClicked: i.id === id 
            }))
        }))
    },
}))