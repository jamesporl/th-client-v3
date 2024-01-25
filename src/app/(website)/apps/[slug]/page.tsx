import React from 'react';
import type { Metadata } from 'next';
import sortBy from 'lodash/sortBy';
import getClient from '../../../../lib/apollo/apolloClient';
import AppQry from '../../../../mods/website/gql/AppQry';
import App from '../../../../mods/website/containers/App/App/App';
import AppTagQry from '../../../../mods/website/gql/AppTagQry';
import { AppTagQuery } from '../../../../__generated__/graphql';

type AppPageProps = {
  params: { slug: string }
};

export async function generateMetadata(
  { params: { slug } }: AppPageProps,
): Promise<Metadata> {
  const { data } = await getClient().query({
    query: AppQry,
    variables: { slug },
    context: {
      fetchOptions: {
        next: { revalidate: 300 },
      },
    },
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

type AppPageParams = {
  params: {
    slug: string;
  },
  searchParams: {
    c?: string;
  }
};

export default async function AppPage({ params, searchParams }: AppPageParams) {
  const { data: appData } = await getClient().query({
    query: AppQry,
    variables: { slug: params.slug },
    context: {
      fetchOptions: {
        next: { revalidate: 300 },
      },
    },
  });

  let appTag: AppTagQuery['appTag'];
  if (searchParams.c) {
    const isTagValid = (appData.app.tags || []).find((t) => t.slug === searchParams.c);
    if (isTagValid) {
      const { data: tagData } = await getClient().query({
        query: AppTagQry,
        variables: { slug: searchParams.c },
        context: {
          fetchOptions: {
            next: { revalidate: 300 },
          },
        },
      });
      appTag = tagData.appTag;
    }
  }

  return <App app={appData.app} appTag={appTag} />;
}
