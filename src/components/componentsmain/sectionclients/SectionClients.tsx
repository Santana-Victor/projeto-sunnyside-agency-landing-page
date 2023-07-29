import styles from "./styles.module.css";

import Subtitle from "../subtitle/Subtitle";
import ImageClient from "../imageclient/ImageClient";

import { informationsClients } from "../../../informations/informationsClients";
import OpinionClient from "../opinionclient/OpinionClient";

export default function SectionClients() {
  return (
    <section className={styles.section}>
      <Subtitle type='clients'>Client testimonials</Subtitle>
      <div className={styles.section__container}>
        {informationsClients.map((client) => (
          <div className={styles.container__container} key={client.id}>
            <ImageClient
              image={client.image}
              alt={client.alt}
              width={client.width}
              height={client.height}
            />
            <OpinionClient>{client.opinion}</OpinionClient>
            <div className={styles.container__container__container}>
              <p className={styles.container__name}>{client.name}</p>
              <p className={styles.container__office}>{client.office}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
