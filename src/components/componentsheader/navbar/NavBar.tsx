import styles from "./styles.module.css";

import { informationsNavBar } from "../../../informations/informationsNavBar";

export default function NavBar({ isFooter }: { isFooter: boolean }) {
  return (
    <nav>
      <ul
        className={
          isFooter
            ? `${styles.navBar__ul} ${styles.footer}`
            : `${styles.navBar__ul}`
        }
      >
        {informationsNavBar.map((item) => (
          <li className={styles.navBar__li} key={item.content}>
            <a
              className={
                isFooter
                  ? `${styles.navBar__a} ${styles.footer}`
                  : `${styles.navBar__a}`
              }
              href='#'
              aria-label={item.ariaLabel}
            >
              {item.content}
            </a>
          </li>
        ))}
        <button
          className={
            isFooter
              ? `${styles.navBar__button} ${styles.footer}`
              : `${styles.navBar__button}`
          }
          role='button'
          aria-label='Contact us'
        >
          Contact
        </button>
      </ul>
    </nav>
  );
}
