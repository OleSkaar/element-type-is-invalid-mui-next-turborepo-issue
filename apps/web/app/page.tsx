import styles from "./page.module.css";
import { Hello } from "@repo/ui/hello";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hello />
      </main>
    </div>
  );
}
