import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

let isSearchedStore =
    (set) => ({
        isSearched: false,
        setIsSearched: (payload) => set((state) => ({
            isSearched: true
        })),
        clearIsSearched: (payload) => set((state) => ({
            isSearched: false
        }))
    })


isSearchedStore = devtools(isSearchedStore)
isSearchedStore = persist(isSearchedStore, {
    name: 'isSearched'
})

export const useIsSearchedStore = create(isSearchedStore)



