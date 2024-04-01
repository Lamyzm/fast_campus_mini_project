import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

let locationStore =
    (set) => ({
        location: {
            lat: '', //37.xxx
            lng: '', //127.xxx
        },
        setNewLocation: (payload) => set((state) => ({
            location: {
                ...state.location,
                lat: payload.lat,
                lng: payload.lng
            }
        }))
    })

locationStore = devtools(locationStore)
locationStore = persist(locationStore, {
    name: 'location'
})

export const useLocationStore = create(locationStore)



