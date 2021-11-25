import { fab, faMarkdown } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import {
  faBookmark,
  faCar,
  faDiceFive,
  faMoneyCheck,
  faPeopleArrows,
  faShoppingBasket,
  faStore,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@components/button";
import { TabItem } from "@components/tab-item";
import styles from "./sidebar.module.scss";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Paths } from "utils/Paths";

export function Sidebar() {
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <Link href={Paths.app} passHref>
          <h3>Rent a car</h3>
        </Link>
      </div>
      <div>
        <Link href={Paths.app} passHref>
          <div>
            <TabItem icon={faStore} active={router.pathname === Paths.app}>
              Dashboard
            </TabItem>
          </div>
        </Link>
        <Link href={Paths.cars} passHref>
          <div>
            <TabItem icon={faCar} active={router.pathname.includes(Paths.cars)}>
              Autos
            </TabItem>
          </div>
        </Link>
        <Link href={Paths.users} passHref>
          <div>
            <TabItem icon={faUsers}>Usuarios</TabItem>
          </div>
        </Link>
        <Link href={Paths.customers} passHref>
          <div>
            <TabItem
              icon={faPeopleArrows}
              active={router.pathname.includes(Paths.customers)}
            >
              Clientes
            </TabItem>
          </div>
        </Link>

        <Link href={Paths.bookings} passHref>
          <div>
            <TabItem
              icon={faBookmark}
              active={router.pathname.includes(Paths.bookings)}
            >
              Reservas
            </TabItem>
          </div>
        </Link>
        <p className={styles.subtitle}>ADMIN PANEL</p>
        <TabItem icon={faMoneyCheck}>Finanzas</TabItem>
      </div>

      <div className={styles.footer}>
        <Button>Reservar</Button>
      </div>
    </div>
  );
}
