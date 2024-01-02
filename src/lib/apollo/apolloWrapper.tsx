'use client';

import React from 'react';
import {
  from,
  HttpLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.INTERNAL_GRAPHQL_URL,
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

  const authLink = setContext(() => {
    let authToken = '';
    if (typeof window !== 'undefined') {
      authToken = localStorage.getItem('authToken');
    }
    if (authToken) {
      return { headers: { authorization: authToken } };
    }
    return { headers: {} };
  });

  const uploadLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_EXTERNAL_GRAPHQL_URL,
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          authLink,
          errorLink,
          httpLink,
        ])
        : from([authLink, errorLink, uploadLink]),
  });
}

function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

export default ApolloWrapper;
