import gql from "graphql-tag";

export const UPLOAD = gql`
  mutation ($file: Upload!) {
    upload(file: $file) {
      id
      name
      url
    }
  }
`;