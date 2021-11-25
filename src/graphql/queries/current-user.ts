import gql from "graphql-tag";

export const CURRENT_USER = gql`
  query getUser {
    self {
      id
      email
      username
      branch {
        id
      }
    }
  }
`;
