import styles from "./styles.module.css";

export default function OpinionClient({ children }: { children: string }) {
  return (
    <div className={styles.container}>
      <p className={styles.opinion}>{children}</p>
    </div>
  );
}
