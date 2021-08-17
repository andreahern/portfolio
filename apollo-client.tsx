import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://wi1a8swk.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});

export default client;
