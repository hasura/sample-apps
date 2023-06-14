import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

const accessToken = process.env.ACCESS_TOKEN
const link = new WebSocketLink({
  uri: process.env.HASURA_GRAPHQL_URL_WSS,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'X-Hasura-Admin-Secret': accessToken,
        'Authorization': `Bearer ${accessToken}`
      }
    }
  },
})

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ),
  document.getElementById('root')
);
