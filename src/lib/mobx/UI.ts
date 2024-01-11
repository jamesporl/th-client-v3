import { createContext } from 'react';
import { observable, action, makeObservable } from 'mobx';

export type AppUpvote = {
  _id: string;
  isUpvoted: boolean;
  upvotesCount: number;
};

export class UI {
  constructor() {
    makeObservable(this);
  }

  @observable apps: AppUpvote[] = [];

  // use lower case only because react is confused that it can be a div attribute
  @observable screenheight = 768;

  @observable screenwidth = 1200;

  @action setScreenSize = (width: number, height: number) => {
    this.screenwidth = width;
    this.screenheight = height;
  };

  @action addApp = (app: AppUpvote) => {
    const appExists = this.apps.find((a) => a._id === app._id);
    if (!appExists) {
      this.apps = [...this.apps, app];
    }
  };

  @action updateApp = (appId: string, isUpvoted: boolean, upvotesCount: number) => {
    this.apps = this.apps.map((a) => {
      if (a._id === appId) {
        return { ...a, isUpvoted, upvotesCount };
      }
      return a;
    });
  };
}

const UIContext = createContext<UI>(new UI());

export default UIContext;
