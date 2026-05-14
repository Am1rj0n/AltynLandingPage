import { create } from "zustand";

interface AppState {
  sidebarOpen: boolean;
  commandPaletteOpen: boolean;
  chatOpen: boolean;
  activeTheme: "dark" | "light";
  notifications: number;
  toggleSidebar: () => void;
  toggleCommandPalette: () => void;
  toggleChat: () => void;
  setTheme: (theme: "dark" | "light") => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  commandPaletteOpen: false,
  chatOpen: false,
  activeTheme: "dark",
  notifications: 7,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  toggleCommandPalette: () => set((s) => ({ commandPaletteOpen: !s.commandPaletteOpen })),
  toggleChat: () => set((s) => ({ chatOpen: !s.chatOpen })),
  setTheme: (theme) => set({ activeTheme: theme }),
}));
