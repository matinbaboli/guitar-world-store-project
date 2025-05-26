import {create} from "zustand"

export const useScrollPositionY = create((set) => ({
    windowScrollPositionY: 0,
    setWindowScrollPositionY: (position) => set({windowScrollPositionY: position})
}));

