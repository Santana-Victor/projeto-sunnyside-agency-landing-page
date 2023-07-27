import styles from "./styles.module.css";

interface PropsImage {
  type: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

export default function ContainerImage({
  type,
  image,
  alt,
  width,
  height,
}: PropsImage) {
  return (
    <div
      className={
        type === "graphic design" || type === "photography"
          ? `${styles.image} ${styles.photography}`
          : `${styles.image}`
      }
    >
      <picture>
        {type === "graphic design" || type === "photography" ? (
          <source
            media='(max-width: 500px)'
            srcSet={`images/mobile/${image}`}
          />
        ) : (
          <source
            media='(max-width: 768px)'
            srcSet={`images/mobile/${image}`}
          />
        )}
        <img
          src={`images/desktop/${image}`}
          alt={alt}
          width={width}
          height={height}
          loading='lazy'
        />
      </picture>
    </div>
  );
}
