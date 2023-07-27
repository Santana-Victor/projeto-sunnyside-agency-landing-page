import styles from "./styles.module.css";

import { informationsImageGallery } from "../../../informations/informationsImageGallery";

export default function ImageGallery() {
  return (
    <div className={styles.container_images}>
      {informationsImageGallery.map((item) => (
        <picture key={item.id}>
          <source
            media='(max-width: 500px)'
            srcSet={`/images/mobile/${item.image}`}
          />
          <img
            src={`/images/desktop/${item.image}`}
            alt={item.alt}
            width={item.width}
            height={item.height}
            loading='lazy'
          />
        </picture>
      ))}
    </div>
  );
}
