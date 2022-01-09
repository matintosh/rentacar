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
import { findCars } from "lib/find-cars";
import { BRANCHES } from "graphql/queries/branches";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CarTable } from "@components/car-table/car-table";

export default function App({ cars }: { cars: any[] }) {

  console.log(cars)
  return (
    <Layout>
      <div className={styles["cars-container"]}>
        <div className={styles["cars-header"]}>
          <h2>Vehiculos</h2>
          <div className={styles["cars-header-actions"]}>
            <FontAwesomeIcon icon={faSearch} />
            <Link href={Paths.newCar} passHref>
              <Button>+ Nuevo</Button>
            </Link>
          </div>
        </div>

        {/* <div className={styles["cars-list"]}>
          {cars &&
            cars.length &&
            cars.map\((c) => <CarItem {...c} key={c.id} />)}
        </div> */}
        <CarTable data={cars}/>
      </div>
    </Layout>
  );
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ id: string }>) {
  const cars = await findCars(params?.id ?? "1");

  return {
    props: {
      cars,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: BRANCHES,
  });

  const paths = data.branches.map((b: { id: number }) => ({
    params: { id: b.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
