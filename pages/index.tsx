import { VerticalScroll, HorizontalScroll } from "@components/sample";

import styles from "@styles/Home.module.scss";

export default function Home() {
  return (
    <section className={styles["container"]}>
      <div className={styles["vertical"]}>
        <VerticalScroll />
      </div>
      <div>
        <HorizontalScroll />
      </div>
    </section>
  );
}
