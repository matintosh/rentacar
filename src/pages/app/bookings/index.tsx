import { Button } from "@components/button";
import { CarItem } from "@components/car-item";
import { Card } from "@components/card";
import { Layout } from "@components/layout";
import client from "../../../apollo-client";
import Link from "next/link";

import styles from "./bookings.module.scss";
import { Paths } from "utils/Paths";

export default function App({ cars }: { cars: any[] }) {
  return (
    <Layout>
      <div className={styles["cars-container"]}>
        <Card className={styles["cars-header"]}>
          <h2>Reservas</h2>
          <Link href={Paths.newCar} passHref>
            <Button>Nueva reserva</Button>
          </Link>
        </Card>

        <div className={styles["cars-list"]}>
          <div>Bookings</div>
        </div>
      </div>
    </Layout>
  );
}

// export async function getStaticProps({
//   params,
// }: GetStaticPropsContext<{ id: string }>) {
//   const cars = await findCars(params?.id ?? "1");

//   return {
//     props: {
//       cars,
//     },
//     revalidate: 10,
//   };
// }

// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: BRANCHES,
//   });

//   const paths = data.branches.map((b: { id: number }) => ({
//     params: { id: b.id },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// }
