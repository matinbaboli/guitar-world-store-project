import { create } from "zustand"

export const useWindowWidthStore = create((set) => ({
    windowWidth: window.innerWidth,
    setWindowWidth: (width) => set({ windowWidth: width }),
}))

