import { from, HttpLink } from '@apollo/client';
import { NextSSRInMemoryCache, NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { cookies } from 'next/headers';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN_KEY } from '../utils/constants/storageKeys';

const { getClient } = registerApolloClient(() => {
  const authLink = setContext(() => {
    const cookieStore = cookies();
    const authTokenCookie = cookieStore.get(AUTH_TOKEN_KEY);
    if (authTokenCookie) {
      return { headers: { authorization: authTokenCookie.value } };
    }
    return { headers: {} };
  });

  const client = new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: from([
      authLink,
      new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
        uri: process.env.INTERNAL_GRAPHQL_URL,
        // you can disable result caching here if you want to
        // (this does not work if you are rendering your page with
        // `export const dynamic = "force-static"`)
        fetchOptions: { cache: 'no-store' },
      }),
    ]),
  });
  return client;
});

export default getClient;
