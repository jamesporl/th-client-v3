'use client';

import React from 'react';
import {
  from,
  HttpLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
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
          httpLink,
        ])
        : from([authLink, uploadLink]),
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
