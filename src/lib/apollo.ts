import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4onyax50hic01xx4eyg4jjg/master',
  cache: new InMemoryCache()
})