import { createContext } from 'react';
import { observable, action, makeObservable } from 'mobx';

export type AppSupport = {
  _id: string;
  isSupported: boolean;
  supportsCount: number;
};

export class UI {
  constructor() {
    makeObservable(this);
  }

  @observable apps: AppSupport[] = [];

  // use lower case only because react is confused that it can be a div attribute
  @observable screenheight = 768;

  @observable screenwidth = 1200;

  @action setScreenSize = (width: number, height: number) => {
    this.screenwidth = width;
    this.screenheight = height;
  };

  @action addApp = (app: AppSupport) => {
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
