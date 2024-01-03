import { createContext } from 'react';
import { observable, action, makeObservable } from 'mobx';
import { AppsQuery } from '../../__generated__/graphql';

export type AppRes = AppsQuery['apps']['nodes'][0];

export class UI {
  constructor() {
    makeObservable(this);
  }

  @observable apps: AppRes[] = [];

  @action addApp = (app: AppRes) => {
    const appExists = this.apps.find((a) => a._id === app._id);
    if (!appExists) {
      this.apps = [...this.apps, app];
    }
  };

  @action updateApp = (appId: string, isSupported: boolean, supportsCount: number) => {
    this.apps = this.apps.map((a) => {
      if (a._id === appId) {
        return { ...a, isSupported, supportsCount };
      }
      return a;
    });
  };
}

const UIContext = createContext<UI>(new UI());

export default UIContext;
