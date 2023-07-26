import styles from "./styles.module.css";

export default function ImageArrow() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 36 114'
      className={styles.svg}
    >
      <g
        stroke='#FFF'
        strokeWidth={6}
        fill='none'
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M18 3v100M3 95.484l15 15 15-15' />
      </g>
    </svg>
  );
}
