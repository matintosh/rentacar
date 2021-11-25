import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const client = new ApolloClient({
  uri: "https://polar-ravine-93732.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "https://polar-ravine-93732.herokuapp.com/graphql",
  }),
});

export default client;
