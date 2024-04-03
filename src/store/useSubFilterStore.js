import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

let subFilterStore =
    (set) => ({
        category: 'all',
        sort: 'rating,desc',
        setCategory: (payload) => set((state) => ({
            category: payload
        })),
        setSort: (payload) => set((state) => ({
            sort: payload
        })),
        clear: (payload) => set((state) => ({
            category: 'all',
            sort: 'rating,desc'
        })),

    })

subFilterStore = devtools(subFilterStore)
subFilterStore = persist(subFilterStore, {
    name: 'subFilter'
})

export const useSubFilterStore = create(subFilterStore)



