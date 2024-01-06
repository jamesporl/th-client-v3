import React from 'react';
import getClient from '../../../lib/apollo/apolloClient';
import AppTagsQry from '../../../mods/website/gql/AppTagsQry';
import Categories from '../../../mods/website/containers/Categories/Categories';

export const metadata = {
  title: 'Categories',
  openGraph: {
    title: 'Categories',
    url: `${process.env.NEXT_PUBLIC_TH_CLIENT_BASE_URL}/categories`,
  },
};

export default async function CategoriesPage() {
  const { data } = await getClient().query({
    query: AppTagsQry,
  });

  return <Categories tags={data.appTags.nodes} />;
}
