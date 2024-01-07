import React from 'react';
import AboutUs from '../../../mods/website/containers/AboutUs/AboutUs';

export const metadata = {
  title: 'About Us',
  openGraph: {
    type: 'website',
    title: 'About Us',
    url: `${process.env.NEXT_PUBLIC_TH_CLIENT_BASE_URL}/about-us`,
    images: [`${process.env.NEXT_PUBLIC_TH_CLIENT_BASE_URL}/techhustlers-logo-banner.png`],
  },
};

export default function AboutUsPage() {
  return <AboutUs />;
}
