import {create} from "zustand"

export const useMediaQueryStore = create((set) => ({
    isMobile: false,
    isTablet: false,
    isSmallLaptop: false,
    isDesktop: false,
    isTabletAndMobile: false,
    setBreakpoints: (state) => set(state),
  }));

