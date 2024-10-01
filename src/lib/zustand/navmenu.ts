import { create } from "zustand";

interface NavMenu {
  isSideBarActive: boolean;
  setSideBarActive: (isSideBarActive: boolean) => void;
  floatNav: boolean;
  setFloatNav: (floatNav: boolean) => void;
}

const useNavMenu = create<NavMenu>((set) => ({
  isSideBarActive: false,
  setSideBarActive: (isSideBarActive) => set({ isSideBarActive }),
  floatNav: true,
  setFloatNav: (floatNav) => set({ floatNav }),
}));

// const useNavMenu = create((set) => ({
//   isSideBarActive: false,
//   setSideBarActive: (isSideBarActive) => set({ isSideBarActive }),
//   floatNav: false,
//   setFloatNav: (floatNav) => set({ floatNav }),
// }));

export default useNavMenu;
