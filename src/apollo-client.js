import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "http://localhost:1337/graphql",
  }),
});

export default client;
