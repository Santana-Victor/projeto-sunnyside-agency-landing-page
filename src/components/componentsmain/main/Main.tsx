import styles from "./styles.module.css";

import ContainerSection from "../containersection/ContainerSection";
import SectionClients from "../sectionclients/SectionClients";
import ImageGallery from "../imagegallery/ImageGallery";

export default function Main() {
  return (
    <main className={styles.main} role='main'>
      <ContainerSection id={44} />
      <ContainerSection id={18} />
      <SectionClients />
      <ImageGallery />
    </main>
  );
}
