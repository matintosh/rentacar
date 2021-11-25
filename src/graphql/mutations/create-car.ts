import gql from "graphql-tag";

export const CREATE_CAR = gql`
  mutation createCar($input: createCarInput!) {
    createCar(input: $input) {
      car {
        id
        pictures {
          url
        }
      }
    }
  }
`;
