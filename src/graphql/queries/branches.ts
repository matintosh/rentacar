import gql from "graphql-tag";

export const BRANCHES = gql`
  query getBranches {
    branches {
      id
      name
    }
  }
`;
