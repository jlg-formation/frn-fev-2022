import {create} from 'zustand';
import {sleep} from '../misc';

export interface AuthenticationStore {
  isConnected: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  isConnected: false,
  connect: async () => {
    await sleep(2000);
    set(() => ({isConnected: true}));
  },
  disconnect: async () => {
    await sleep(2000);
    set({isConnected: false});
  },
}));
