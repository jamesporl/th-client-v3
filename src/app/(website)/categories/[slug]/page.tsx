import type { Metadata } from 'next';
import getClient from '../../../../lib/apollo/apolloClient';
import AppTagQry from '../../../../mods/website/gql/AppTagQry';

type CategoryPageProps = {
  params: { slug: string }
};

export async function generateMetadata(
  { params: { slug } }: CategoryPageProps,
): Promise<Metadata> {
  const { data } = await getClient().query({
    query: AppTagQry,
    variables: { slug },
    context: {
      fetchOptions: {
        next: { revalidate: 3000 },
      },
    },
  });

  const pageTitle = data.appTag.name;
  const ogImageUrl = data.appTag.imgUrl;
  const ogUrl = `${process.env.NEXT_PUBLIC_TH_CLIENT_BASE_URL}/categories/${slug}`;

  return {
    title: pageTitle,
    openGraph: {
      title: `${pageTitle} - TechHustlers PH`,
      type: 'article',
      images: ogImageUrl,
      url: ogUrl,
    },
  };
}

export default async function CategoryPage() {
  return null;
}
