import {domainUrl} from './config';
import {useAuthenticationStore, User} from './store/authentication';

export class API {
  async checkIfConnected() {
    const {update} = useAuthenticationStore.getState();
    try {
      const response = await fetch(domainUrl + '/api/auth/isConnected');
      if (response.status >= 400) {
        update(undefined);
        return;
      }
      const user: User = await response.json();
      update(user);
    } catch (err) {
      console.log('err: ', err);
    }
  }
}

export const api = new API();
