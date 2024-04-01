import { create } from "zustand";
import { devtools } from 'zustand/middleware'

let mapStore =
    (set) => ({
        map: {},
        isMap: false,
        setNewMap: (payload) => set((state) => ({
            map: payload
        })),
        setIsMap: () => set((state) => ({
            isMap: true
        }))
    })


mapStore = devtools(mapStore)

export const useMapStore = create(mapStore)



