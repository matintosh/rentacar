import {
  faBell,
  faCog,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "../input";
import styles from "./header.module.scss";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  const handleLogOut = () => {
    destroyCookie(null, "user_token");
    router.push("/auth/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.breadcrumbs}>
        <div className={styles["breadcrumbs-text"]}>
          <p>Pages</p> <span>/ Dashboard</span>
        </div>
        <p className={styles["page-indicator"]}>Dashboard</p>
      </div>
      <div className={styles.options}>
        <Input onChange={() => {}} />
        <FontAwesomeIcon icon={faCog} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faSignOutAlt} onClick={handleLogOut} />
      </div>
    </header>
  );
}
