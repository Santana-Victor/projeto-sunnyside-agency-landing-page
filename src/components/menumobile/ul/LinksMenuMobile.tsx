import styles from "./styles.module.css";

import { informationsNavBar } from "../../../informations/informationsNavBar";

interface PropsLinksMenuMobile {
  open: boolean;
}

export default function LinksMenuMobile({ open }: PropsLinksMenuMobile) {
  return (
    open && (
      <ul className={styles.nav__ul}>
        {informationsNavBar.map((item) => (
          <li className={styles.nav__li} key={`${item.content}2`}>
            <a className={styles.nav__a} href='#' aria-label={item.ariaLabel}>
              {item.content}
            </a>
          </li>
        ))}
        <button
          className={styles.nav__button}
          role='button'
          aria-label='Contact us'
        >
          Contact
        </button>
      </ul>
    )
  );
}
