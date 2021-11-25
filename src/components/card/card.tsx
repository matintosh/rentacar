import classnames from "classnames";
import styles from "./card.module.css";

export interface CardProps {
  // Card content
  children: React.ReactNode;
  //   Custom styles
  className?: string;
}
export function Card({ children, className }: CardProps) {
  const cardStyles = classnames(styles.card, className);

  return <div className={cardStyles}>{children}</div>;
}
