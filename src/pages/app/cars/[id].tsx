import { Button } from "@components/button";
import { CarItem } from "@components/car-item";
import { Card } from "@components/card";
import { Layout } from "@components/layout";
import gql from "graphql-tag";
import client from "../../../apollo-client";
import nookies from "nookies";
import Link from "next/link";

import styles from "./cars.module.scss";
import { Paths } from "utils/Paths";
import { GetStaticPropsContext } from "next";

export default function App({ cars }: { cars: any[] }) {
  console.log(cars);
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

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ id: string }>) {
  const { data } = await client.query({
    query: gql`
      query getCars {
        branch(id: ${params?.id}) {
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

  return {
    props: {
      cars: data.branch.cars,
    },
  };
}

export async function getStaticPaths() {

  const { data } = await client.query({
    query: gql`
      query getBranches {
        branches {
          id
          name
        }
      }
    `,
  });

  const paths = data.branches.map((b: { id: number }) => ({
    params: { id: b.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
