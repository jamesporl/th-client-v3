import { from, HttpLink } from '@apollo/client';
import { NextSSRInMemoryCache, NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { cookies } from 'next/headers';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
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

  const errorLink = onError(({
    operation, forward, graphQLErrors, networkError,
  }) => { // eslint-disable-line consistent-return
    if (graphQLErrors) {
      // eslint-disable-next-line array-callback-return
      graphQLErrors.map(({ message, locations, path }) => {
        const displayMessage = `
          [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}
        `;
        console.log(displayMessage); // eslint-disable-line no-console
      });
    }
    if (networkError) {
      operation.setContext({ headers: {} });
      return forward(operation);
    }
  });

  const client = new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: from([
      authLink,
      errorLink,
      new HttpLink({
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
