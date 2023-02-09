import {create} from 'zustand';

export interface AuthenticationStore {
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
}

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  isConnected: false,
  connect: () => set(() => ({isConnected: true})),
  disconnect: () => set({isConnected: false}),
}));
