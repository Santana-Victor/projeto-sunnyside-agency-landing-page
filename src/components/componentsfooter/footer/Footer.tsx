import styles from "./styles.module.css";

import Logo from "../../componentsheader/logo/Logo";
import NavBar from "../../componentsheader/navbar/NavBar";
import SocialLinks from "../sociallinks/SocialLinks";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo isFooter={true} />
      <NavBar isFooter={true} />
      <SocialLinks />
    </footer>
  );
}
