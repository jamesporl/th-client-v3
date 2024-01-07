import type { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    title: 'TechHustlers PH - Local Tech Products in One Place',
    type: 'website',
    url: process.env.NEXT_PUBLIC_TH_CLIENT_BASE_URL,
    images: [`${process.env.NEXT_PUBLIC_TH_CLIENT_BASE_URL}/techhustlers-logo-banner.png`],
  },
};

export default async function HomePage() {
  return null;
}
