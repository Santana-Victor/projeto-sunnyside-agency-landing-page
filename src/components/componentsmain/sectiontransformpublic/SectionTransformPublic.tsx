import styles from "./styles.module.css";

import Article from "../article/Article";
import ContainerImage from "../containerimage/ContainerImage";

interface PropsSection {
  type: string;
  title: string;
  about: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

export default function SectionTransformPublic({
  type,
  title,
  about,
  image,
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
            image={image}
            alt={alt}
            width={width}
            height={height}
          />
        </>
      ) : (
        <>
          <ContainerImage
            type={type}
            image={image}
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
