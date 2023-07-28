import styles from "./styles.module.css";

import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import ImageArrow from "../imagearrow/ImageArrow";
import MenuMobile from "../menumobile/nav/MenuMobile";

export default function Header() {
  return (
    <header className={styles.header}>
      <picture>
        <source
          media='(max-width: 768px)'
          srcSet='/images/mobile/image-header.jpg'
        />
        <img
          src='/images/desktop/image-header.jpg'
          alt='blue background with an orange'
        />
      </picture>
      <div className={styles.header__container}>
        <Logo isFooter={false} />
        <NavBar isFooter={false} />
        <MenuMobile />
      </div>
      <div className={styles.header__container__title_image}>
        <h1 className={styles.header__title}>We are creatives</h1>
        <ImageArrow />
      </div>
    </header>
  );
}
