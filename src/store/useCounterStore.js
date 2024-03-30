import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'

let counterStore =
    (set) => ({
        count: 1,
        increment: () => set((state) => ({
            count: state.count + 1
        }))
    })


counterStore = devtools(counterStore)
counterStore = persist(counterStore, {
    name: 'counter'
})

export const useCounterStore = create(counterStore)
