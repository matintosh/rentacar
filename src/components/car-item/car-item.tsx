import { Card } from "@components/card";
import Image from "next/image";
import { AppConfig } from "utils/AppConfig";
import styles from "./car-item.module.scss";
import Carousel from "framer-motion-carousel";
import { Button } from "@components/button";

export interface CarItemProps {
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
export function CarItem({
  model,
  brand,
  price,
  pictures,
  booking,
  year,
}: CarItemProps) {
  return (
    <Card className={styles["car-item"]}>
      <div className={styles["car-header"]}>
        <div className={styles["car-title"]}>
          <p>{year}</p>
          <h3>
            {brand} {model}
          </h3>
        </div>
        <div className={styles["car-price"]}>
          <p>Dia</p>
          <h3 className={styles["car-price-value"]}>${price}</h3>
        </div>
      </div>
      <div>
        <Carousel
          renderDots={() => null}
          autoPlay={false}
          interval={1000}
          loop={true}
        >
          {pictures.map((item, i) => (
            <div key={i} className={styles["car-image-container"]}>
              <Image
                src={`${AppConfig.api_url}${item.url}`}
                alt={item.name}
                className={styles["car-image"]}
                objectFit={"contain"}
                height={300}
                width={300}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <hr />

      {booking && (
        <div className={styles["car-booking-container"]}>
          <div className={styles["car-booking-client"]}>
            <p>
              {booking.client.firstName} {booking.client.lastName}
            </p>
            <span>Hasta 12/12/12</span>
          </div>
          <Image
            src={`${AppConfig.api_url}${booking.client.avatar.url}`}
            alt={booking.client.avatar.name}
            className={styles["car-booking-client-avatar"]}
            objectFit={"contain"}
            height={60}
            width={60}
          />
        </div>
      )}
      {!booking && (
        <div className={styles["car-booking-now"]}>
          <Button className={styles['book-now']}>Reservar ahora</Button>
        </div>
      )}
    </Card>
  );
}
