import dayjs from "dayjs";
import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

let searchFilterStore =
    (set) => ({
        area: 'all',
        date: {
            startDate: null,
            endDate: null
        },
        people: {
            adult: 1,
            kids: 0,
            baby: 0
        },
        setArea: (payload) => set((state) => ({
            area: payload
        })),
        setDate: (payload) => set((state) => ({
            date: {
                ...state.date,
                startDate: payload.startDate,
                endDate: payload.endDate
            }
        })),
        setAdult: (payload) => set((state) => ({
            people: {
                ...state.people,
                adult: payload
            }
        })),
        setKids: (payload) => set((state) => ({
            people: {
                ...state.people,
                kids: payload
            }
        })),
        setBaby: (payload) => set((state) => ({
            people: {
                ...state.people,
                baby: payload
            }
        })),
        clearPeople: (payload) => set((state) => ({
            people: {
                adult: 1,
                kids: 0,
                baby: 0
            },
        })),
        clearAll: (payload) => set((state) => ({
            area: 'all',
            date: {
                startDate: dayjs().format('YYYY-MM-DD'), 
                endDate: dayjs().add(1, 'day').format('YYYY-MM-DD'), 
            },
            people: {
                adult: 1,
                kids: 0,
                baby: 0
            },
        })),
    })


searchFilterStore = devtools(searchFilterStore)
searchFilterStore = persist(searchFilterStore, {
    name: 'searchFilter'
})

export const useSearchFilterStore = create(searchFilterStore)



