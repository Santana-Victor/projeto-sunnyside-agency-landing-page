import styles from "./styles.module.css";

interface PropsSubtitle {
  type: string;
  children: string;
}

export default function Subtitle({ type, children }: PropsSubtitle) {
  return (
    <h2
      className={
        type === "graphic design"
          ? `${styles.subtitle} ${styles.graphic}`
          : type === "photography"
          ? `${styles.subtitle} ${styles.photography}`
          : type === "clients"
          ? `${styles.subtitle} ${styles.clients}`
          : `${styles.subtitle}`
      }
    >
      {children}
    </h2>
  );
}
