import styles from "./styles.module.css";

export default function IconHamburger() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 18'
      className={styles.icon}
    >
      <path
        d='M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z'
        fill='#FFF'
        fillRule='evenodd'
      />
    </svg>
  );
}
