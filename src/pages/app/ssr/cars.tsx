import { Button } from "@components/button";
import { CarItem } from "@components/car-item";
import { Card } from "@components/card";
import { Layout } from "@components/layout";
import gql from "graphql-tag";
import client from "../../../apollo-client";
import nookies from "nookies";
import Link from "next/link";

import styles from "../cars/cars.module.scss";
import { Paths } from "utils/Paths";

export default function App({ cars }: { cars: any[] }) {
  return (
    <Layout>
      <div className={styles["cars-container"]}>
        <Card className={styles["cars-header"]}>
          <h2>Vehiculos</h2>
          <Link href={Paths.newCar} passHref>
            <Button>Nuevo vehiculo</Button>
          </Link>
        </Card>

        <div className={styles["cars-list"]}>
          {cars &&
            cars.length &&
            cars.map((c) => <CarItem {...c} key={c.id} />)}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx: any) {
  const cookies = nookies.get(ctx);
  const user_token = cookies.user_token;

  const { data } = await client.query({
    context: {
      headers: {
        Authorization: "Bearer " + user_token,
      },
    },
    query: gql`
      query getCars {
        self {
          branch {
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
      }
    `,
  });

  console.log("DATA", data);

  return { props: { cars: data.self.branch.cars } };
}
