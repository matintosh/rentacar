import client from "apollo-client";
import gql from "graphql-tag";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const findCars = async (branch: string) => {
  const { data } = await client.query({
    query: gql`
      query getCars {
        branch(id: 1) {
          cars {
            id
            model
            brand
            price
            plate
            year
            booking {
              client {
                firstName
                lastName

                avatar {
                  url
                  name
                }
              }

              startDate
              endDate
            }
            pictures {
              url
              name
            }
          }
        }
      }
    `,
  });

  return data.branch.cars;
};
