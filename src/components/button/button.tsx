import classNames from "classnames";
import styles from "./button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  const buttonStyle = classNames(styles.button, className);
  return (
    <div className={buttonStyle} {...rest}>
      {children}
    </div>
  );
}
