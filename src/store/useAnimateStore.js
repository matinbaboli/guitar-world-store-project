import {create} from "zustand"

export const useAnimateStore = create((set) => ({
    animate: false,
    setAnimate: (state) => set({animate: state}),
  }));

