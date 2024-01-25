import React from 'react';
import { Metadata } from 'next';
import getClient from '../../../lib/apollo/apolloClient';
import AppTagsQry from '../../../mods/website/gql/AppTagsQry';
import Categories from '../../../mods/website/containers/Categories/Categories';

export const metadata: Metadata = {
  title: 'Categories',
  openGraph: {
    type: 'website',
    title: 'Categories - TechHustlers PH',
    url: `${process.env.NEXT_PUBLIC_TH_CLIENT_BASE_URL}/categories`,
    images: [`${process.env.NEXT_PUBLIC_TH_CLIENT_BASE_URL}/techhustlers-logo-banner.png`],
  },
};

export default async function CategoriesPage() {
  const { data } = await getClient().query({
    query: AppTagsQry,
    context: {
      fetchOptions: {
        next: { revalidate: 300 },
      },
    },
  });

  return <Categories tags={data.appTags.nodes} />;
}
