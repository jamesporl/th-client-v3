import { HttpLink } from '@apollo/client';
import { NextSSRInMemoryCache, NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const { getClient } = registerApolloClient(() => new NextSSRApolloClient({
  cache: new NextSSRInMemoryCache(),
  link: new HttpLink({
    // https://studio.apollographql.com/public/spacex-l4uc6p/
    uri: process.env.INTERNAL_GRAPHQL_URL,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with
    // `export const dynamic = "force-static"`)
    // fetchOptions: { cache: "no-store" },
  }),
}));

export default getClient;
