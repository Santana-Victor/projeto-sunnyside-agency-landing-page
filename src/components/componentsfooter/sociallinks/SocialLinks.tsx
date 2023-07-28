import styles from "./styles.module.css";

import Facebook from "../facebook/Facebook";
import Instagram from "../instagram/Instagram";
import Twitter from "../twitter/Twitter";
import Pinterest from "../pinterest/Pinterest";

export default function SocialLinks() {
  return (
    <div className={styles.container}>
      <Facebook />
      <Instagram />
      <Twitter />
      <Pinterest />
    </div>
  );
}
