import { Card } from "@components/card";
import Image from "next/image";
import { AppConfig } from "utils/AppConfig";
import styles from "./car-item.module.scss";
import Carousel from "framer-motion-carousel";
import { Button } from "@components/button";

export interface BookingItemProps {
  model: string;
  brand: string;
  plate: string;
  price: number;
  year: number;
  booking: null | {
    client: {
      firstName: string;
      lastName: string;
      avatar: {
        url: string;
        name: string;
      };
    };
  };
  pictures: { name: string; url: string }[];
}
export function BookingItem({

}: BookingItemProps) {
  return (
    <Card className={styles["car-item"]}>
      <div className={styles["car-header"]}>
        <div className={styles["car-title"]}>
          <p>asdasd</p>
          <h3>
            asdasdasd
          </h3>
        </div>
        <div className={styles["car-price"]}>
          <p>Dia</p>
          <h3 className={styles["car-price-value"]}>asdasd</h3>
        </div>
      </div>
     
      <hr />

   
    </Card>
  );
}
