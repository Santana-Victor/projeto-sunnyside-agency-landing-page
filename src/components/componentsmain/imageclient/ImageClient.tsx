import styles from "./styles.module.css";

interface PropsImage {
  image: string;
  alt: string;
  width: number;
  height: number;
}

export default function ImageClient({ image, alt, width, height }: PropsImage) {
  return (
    <div className={styles.image__container}>
      <img src={image} alt={alt} width={width} height={height} loading='lazy' />
    </div>
  );
}
