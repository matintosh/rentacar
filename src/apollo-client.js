import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AppConfig } from "utils/AppConfig";

const client = new ApolloClient({
  uri: AppConfig.api_url + "/graphql",
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: AppConfig.api_url + "/graphql",
  }),
});

export default client;
