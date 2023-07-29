import styles from "./styles.module.css";

import { informationsImageGallery } from "../../../informations/informationsImageGallery";

export default function ImageGallery() {
  return (
    <div className={styles.container_images}>
      {informationsImageGallery.map((item) => (
        <picture key={item.id}>
          <source media='(max-width: 500px)' srcSet={item.smallImage} />
          <img
            src={item.largeImage}
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
