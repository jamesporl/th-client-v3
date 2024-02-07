import { Descendant } from 'slate';

export type LocalAppDraft = {
  _id: string;
  appId: string;
  name: string;
  shortDesc: string;
  websiteUrl?: string;
  socialUrls?: {
    facebook?: string;
    instagram?: string;
    x?: string;
    linkedIn?: string;
    github?: string;
  };
  tags?: {
    _id: string;
    name: string;
    slug: string;
  }[];
  logoImg?: string;
  jsonDesc?: Descendant[];
  videoUrl?: string;
  bannerImgs?: {
    _id: string;
    order: number;
    image: {
      large: string;
      thumbnail: string;
    }
  }[];
};
