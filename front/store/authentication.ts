import {create} from 'zustand';
import {domainUrl} from '../config';

export interface User {
  displayName: string;
}

export interface AuthenticationStore {
  isConnected: boolean;
  user: User | undefined;
  connect: (login: string, password: string) => Promise<void>;
  disconnect: () => Promise<void>;
  update: (user: User | undefined) => void;
}

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  isConnected: false,
  user: undefined,
  connect: async (login, password) => {
    try {
      console.log('login: ', login);
      console.log('password: ', password);
      const response = await fetch(domainUrl + '/api/auth/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: login,
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
      set(() => ({isConnected: true, user: user}));
    } catch (err) {
      console.log('err: ', err);
      throw new Error('Technical error');
    }
  },
  disconnect: async () => {
    try {
      await fetch(domainUrl + '/api/auth/disconnect', {
        method: 'POST',
      });
    } catch (err) {
      console.log('err: ', err);
    } finally {
      set({isConnected: false, user: undefined});
    }
  },
  update: (user: User | undefined) => {
    if (user === undefined) {
      set({isConnected: false, user: undefined});
      return;
    }
    set({isConnected: true, user: user});
  },
}));
