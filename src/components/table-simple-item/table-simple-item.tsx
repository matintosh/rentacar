import styles from "./table-simple-item.module.scss";

export function TableSimpleItem({ value }: { value: string }) {
  return <p className={styles["table-simple-item"]}>{value}</p>;
}
