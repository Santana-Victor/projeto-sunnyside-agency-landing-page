import styles from "./styles.module.css";

import Subtitle from "../subtitle/Subtitle";
import Button from "../button/Button";

interface PropsArticle {
  type: string;
  title: string;
  about: string;
}

export default function Article({ type, title, about }: PropsArticle) {
  return (
    <article className={styles.article} role='article'>
      <div className={styles.article__container}>
        <Subtitle type={type}>{title}</Subtitle>
      </div>
      <div className={styles.article__container}>
        <p className={styles.about}>{about}</p>
      </div>
      <div className={styles.article__container}>
        <Button type={type} />
      </div>
    </article>
  );
}
