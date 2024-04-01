import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

let currentRoomStore =
    (set) => ({
        currentRoom: {},
        setNewCurrentRoom: (payload) => set((state) => ({
            currentRoom: payload
        }))
    })

currentRoomStore = devtools(currentRoomStore)


export const useCurrentRoomStore = create(currentRoomStore)



