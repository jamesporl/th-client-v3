import Cookies from 'js-cookie';
import { createContext } from 'react';
import { observable, action, makeObservable } from 'mobx';
import { AUTH_TOKEN_KEY, VERIFICATION_TOKEN_KEY } from '../utils/constants/storageKeys';
import { MyProfileQuery } from '../../__generated__/graphql';

export type MyProfileRes = MyProfileQuery['myProfile'];

export class Auth {
  constructor() {
    makeObservable(this);
  }

  @observable authToken = '';

  @observable verificationToken = '';

  @observable isLoadingMyProfile = true;

  @observable myProfile: MyProfileRes | undefined = undefined;

  @action setVerificationToken = (token: string) => {
    this.verificationToken = token;
    localStorage.setItem(VERIFICATION_TOKEN_KEY, token);
  };

  @action setIsLoadingMyProfile = (value: boolean) => {
    this.isLoadingMyProfile = value;
  };

  @action setMyProfile = (profile: MyProfileRes) => {
    this.myProfile = profile;
  };

  @action removeVerificationToken = () => {
    this.verificationToken = '';
    localStorage.removeItem(VERIFICATION_TOKEN_KEY);
  };

  @action login = (authToken: string) => {
    localStorage.setItem(AUTH_TOKEN_KEY, authToken);
    Cookies.set(AUTH_TOKEN_KEY, authToken);
    this.authToken = authToken;
  };

  @action logout = () => {
    Cookies.remove(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_TOKEN_KEY);
    this.authToken = '';
  };
}

const AuthContext = createContext<Auth>(new Auth());

export default AuthContext;
