import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/graphql' }), // Your GraphQL endpoint
    cache: new InMemoryCache(),
  });
};
