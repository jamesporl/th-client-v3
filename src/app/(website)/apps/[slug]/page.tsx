import React from 'react';
import type { Metadata } from 'next';
import sortBy from 'lodash/sortBy';
import getClient from '../../../../lib/apollo/apolloClient';
import AppQry from '../../../../mods/website/gql/AppQry';
import App from '../../../../mods/website/containers/App/App';

type AppPageProps = {
  params: { slug: string }
};

export async function generateMetadata(
  { params: { slug } }: AppPageProps,
): Promise<Metadata> {
  const { data } = await getClient().query({
    query: AppQry,
    variables: { slug },
  });

  const {
    name, textDesc, shortDesc, bannerImgs,
  } = data.app;

  const pageTitle = `${name} - ${shortDesc}`;
  const sortedBannerImgs = sortBy(bannerImgs, 'order');
  const ogImageUrl = sortedBannerImgs[0].image.large;
  const ogUrl = `${process.env.NEXT_PUBLIC_TH_CLIENT_BASE_URL}/apps/${slug}`;

  return {
    title: pageTitle,
    openGraph: {
      title: `${pageTitle} - TechHustlers PH`,
      type: 'article',
      description: `${textDesc || ''.slice(0, 120)}...`,
      images: [ogImageUrl],
      url: ogUrl,
    },
  };
}

export default async function AppPage({ params }: { params: { slug: string } }) {
  const { data } = await getClient().query({
    query: AppQry,
    variables: { slug: params.slug },
  });

  return <App app={data.app} />;
}
