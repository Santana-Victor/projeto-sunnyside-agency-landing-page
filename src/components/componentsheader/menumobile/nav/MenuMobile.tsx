import { useState } from "react";

import styles from "./styles.module.css";

import IconHamburger from "../../iconhamburger/IconHamburger";
import IconClose from "../../iconclose/IconClose";
import LinksMenuMobile from "../ul/LinksMenuMobile";

export default function MenuMobile() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <button
        className={styles.nav__button_icon}
        role='button'
        aria-label='Button that opens a menu'
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <IconClose /> : <IconHamburger />}
      </button>
      <LinksMenuMobile open={open} />
    </nav>
  );
}
