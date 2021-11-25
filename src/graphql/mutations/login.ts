import gql from "graphql-tag";

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
    }
  }
`;
