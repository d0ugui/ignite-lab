import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'suaapikey',
  cache: new InMemoryCache()
})