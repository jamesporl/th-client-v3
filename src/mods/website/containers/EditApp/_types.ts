export type LocalAppDraft = {
  _id: string;
  appId: string;
  name: string;
  shortDesc: string;
  websiteUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  socialUrls?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedIn?: string;
    github?: string;
  };
  tags?: {
    _id: string;
    name: string;
  }[];
  logoImg?: string;
  jsonDesc?: string;
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
