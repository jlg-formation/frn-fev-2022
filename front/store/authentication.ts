import {create} from 'zustand';
import {sleep} from '../misc';

export interface AuthenticationStore {
  isConnected: boolean;
  connect: () => void;
  disconnect: () => Promise<void>;
}

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  isConnected: false,
  connect: () => set(() => ({isConnected: true})),
  disconnect: async () => {
    await sleep(2000);
    return set({isConnected: false});
  },
}));
