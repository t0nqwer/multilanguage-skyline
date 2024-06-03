import { create } from "zustand";

interface ModalState {
  isModalActive: boolean;
  setModalActive: (isModalActive: boolean) => void;
  ModalId: string;
  setModalId: (ModalId: string) => void;
}

const initialState = {
  isModalActive: false,
  ModalId: "so1",
};

const useModalState = create<ModalState>((set) => ({
  isModalActive: initialState.isModalActive,
  ModalId: initialState.ModalId,
  setModalActive: (isModalActive) =>
    set((state) => ({ ...state, isModalActive })),
  setModalId: (ModalId) => set((state) => ({ ...state, ModalId })),
}));

export default useModalState;
