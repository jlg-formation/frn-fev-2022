import {create} from 'zustand';
import {domainUrl} from '../config';
import {sleep} from '../misc';

export interface AuthenticationStore {
  isConnected: boolean;
  connect: (login: string, password: string) => Promise<void>;
  disconnect: () => Promise<void>;
}

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  isConnected: false,
  connect: async (login, password) => {
    try {
      console.log('login: ', login);
      console.log('password: ', password);
      const response = await fetch(domainUrl + '/api/connect', {
        method: 'POST',
        body: JSON.stringify({
          login: login,
          password: password,
        }),
      });
      if (response.status === 401) {
        throw new Error('Bad login');
      }
      if (response.status >= 400) {
        throw new Error('Technical error');
      }
      const user = await response.json();
      console.log('user: ', user);
      set(() => ({isConnected: true}));
    } catch (err) {
      console.log('err: ', err);
      throw new Error('Technical error');
    }
  },
  disconnect: async () => {
    await sleep(2000);
    set({isConnected: false});
  },
}));
