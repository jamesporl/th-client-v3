import React from 'react';
import AboutUs from '../../../mods/website/containers/AboutUs/AboutUs';

export const metadata = {
  title: 'About Us',
  openGraph: {
    title: 'About Us',
    url: `${process.env.NEXT_PUBLIC_TH_CLIENT_BASE_URL}/about-us`,
  },
};

export default function AboutUsPage() {
  return <AboutUs />;
}
