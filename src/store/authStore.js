import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")),
  loginUser: (user) => set({ user }),
  logoutUser: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));
