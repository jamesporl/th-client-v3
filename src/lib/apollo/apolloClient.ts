import { HttpLink } from '@apollo/client';
import { NextSSRInMemoryCache, NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

// RSC seems to not be a good idea for personal data for now
// TODO: If cookies are to be used for authentication, how to make makeClient be dynamic
const { getClient } = registerApolloClient(() => {
  const client = new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: process.env.INTERNAL_GRAPHQL_URL,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with
      // `export const dynamic = "force-static"`)
      // fetchOptions: { cache: 'no-store' },
    }),
  });
  return client;
});

export default getClient;
