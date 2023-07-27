import styles from "./styles.module.css";

interface PropsButton {
  type: string;
}

export default function Button({ type }: PropsButton) {
  return (
    <button
      className={
        type === "transform"
          ? `${styles.button}`
          : `${styles.button} ${styles.public}`
      }
    >
      Learn more
    </button>
  );
}
