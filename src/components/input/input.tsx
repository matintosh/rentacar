import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./input.module.scss";

interface InputProps {
  placeholder?: string;
  onChange?: (e: { target: { value: string; name: string } }) => void;
  value?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  name: string;
  icon?: IconProp;
  type?: string;
}
export function Input({ icon, placeholder, onChange, value, name, type = "text" }: InputProps) {
  return (
    <div className={styles.input}>
      {icon && <FontAwesomeIcon icon={icon} color='#67748e' />}
      <input
        style={{ width: "90%" }}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}
