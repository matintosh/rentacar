import { Header } from "../header";
import { Sidebar } from "../sidebar";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}
