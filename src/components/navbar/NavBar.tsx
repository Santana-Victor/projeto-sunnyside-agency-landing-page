import styles from "./styles.module.css";

import { informationsNavBar } from "../../informations/informationsNavBar";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.navBar__ul}>
        {informationsNavBar.map((item) => (
          <li className={styles.navBar__li} key={item.content}>
            <a
              className={styles.navBar__a}
              href='#'
              aria-label={item.ariaLabel}
            >
              {item.content}
            </a>
          </li>
        ))}
        <button
          className={styles.navBar__button}
          role='button'
          aria-label='Contact us'
        >
          Contact
        </button>
      </ul>
    </nav>
  );
}
