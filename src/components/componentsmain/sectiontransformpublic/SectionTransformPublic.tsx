import styles from "./styles.module.css";

import Article from "../article/Article";
import ContainerImage from "../containerimage/ContainerImage";

interface PropsSection {
  type: string;
  title: string;
  about: string;
  largeImage: string;
  smallImage: string;
  alt: string;
  width: number;
  height: number;
}

export default function SectionTransformPublic({
  type,
  title,
  about,
  largeImage,
  smallImage,
  alt,
  width,
  height,
}: PropsSection) {
  return (
    <section
      className={
        type === "transform"
          ? `${styles.section} ${styles.transform}`
          : `${styles.section}`
      }
    >
      {type === "transform" ? (
        <>
          <Article type={type} title={title} about={about} />
          <ContainerImage
            type={type}
            largeImage={largeImage}
            smallImage={smallImage}
            alt={alt}
            width={width}
            height={height}
          />
        </>
      ) : (
        <>
          <ContainerImage
            type={type}
            largeImage={largeImage}
            smallImage={smallImage}
            alt={alt}
            width={width}
            height={height}
          />
          <Article type={type} title={title} about={about} />
        </>
      )}
    </section>
  );
}
