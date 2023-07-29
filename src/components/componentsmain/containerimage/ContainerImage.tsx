import styles from "./styles.module.css";

interface PropsImage {
  type: string;
  largeImage: string;
  smallImage: string;
  alt: string;
  width: number;
  height: number;
}

export default function ContainerImage({
  type,
  largeImage,
  smallImage,
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
          <source media='(max-width: 500px)' srcSet={smallImage} />
        ) : (
          <source media='(max-width: 768px)' srcSet={smallImage} />
        )}
        <img
          src={largeImage}
          alt={alt}
          width={width}
          height={height}
          loading='lazy'
        />
      </picture>
    </div>
  );
}
