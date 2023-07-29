import styles from "./styles.module.css";

import ContainerImage from "../containerimage/ContainerImage";
import Subtitle from "../subtitle/Subtitle";

interface PropsGraphicDesignPhotography {
  type: string;
  largeImage: string;
  smallImage: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  about: string;
}

export default function SectionDesignPhoto({
  type,
  largeImage,
  smallImage,
  alt,
  width,
  height,
  title,
  about,
}: PropsGraphicDesignPhotography) {
  return (
    <section className={styles.section}>
      <ContainerImage
        type={type}
        largeImage={largeImage}
        smallImage={smallImage}
        alt={alt}
        width={width}
        height={height}
      />
      <div className={styles.section__container}>
        <Subtitle type={type}>{title}</Subtitle>
        <div className={styles.container__container}>
          <p
            className={
              type === "photography"
                ? `${styles.container__about} ${styles.photography}`
                : `${styles.container__about}`
            }
          >
            {about}
          </p>
        </div>
      </div>
    </section>
  );
}
