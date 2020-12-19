import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Header from 'components/Header';
import { SharedStyle } from 'components/shared';
import { useApollo } from 'ownHooks';

function MyApp({ Component, pageProps }) {
  const { initialApolloState } = pageProps?.props || {};
  const client = useApollo(initialApolloState);

  return (
    <div id="app">
      <ApolloProvider client={client}>
        <SharedStyle />
        <Header />
        <Component {...pageProps.props} />
      </ApolloProvider>
    </div>
  );
}

export default MyApp;
