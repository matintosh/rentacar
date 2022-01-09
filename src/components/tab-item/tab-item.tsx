import classNames from "classnames";
import styles from "./tab-item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Card } from "../card";

interface TabItemProps {
  children: React.ReactNode;
  className?: string;
  icon?: IconProp;
  active?: boolean;
}

export function TabItem({
  children,
  className,
  icon,
  active = false,
}: TabItemProps) {
  const tabItemStyles = classNames(styles["tab-item"], className, {
    [styles.active]: active,
  });

  const cardContent = (
    <>
      {/* {icon && (
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
      )} */}
      <p className={styles.label}>{children}</p>
    </>
  );

  return active ? (
    <div className={tabItemStyles}>{cardContent}</div>
  ) : (
    <div className={tabItemStyles}>{cardContent}</div>
  );
}
