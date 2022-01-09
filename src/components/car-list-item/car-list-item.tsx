import { AppConfig } from "utils/AppConfig";
import Image from "next/image";
import styles from "./car-list-item.module.scss";
export function CarListItemAvatar({
  value,
  original,
}: {
  value: string;
  original: any;
}) {
  return (
    <div className={styles["car-item-avatar"]}>
      <Image
        src={`${AppConfig.api_url}${original.pictures[0].url}`}
        alt={original.pictures[0].name}
        className={styles["car-image"]}  
        objectFit={"contain"}
        height={80}
        width={80}
      />
      <div className={styles["car-avatar-model"]}>
        <p>{value}</p>
        <p className={styles["car-model"]}>{original.model}</p>
      </div>
    </div>
  );
}
