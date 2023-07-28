import styles from "./styles.module.css";

import { informationsTransformPublic } from "../../../informations/informationsTransformPublic";
import { informationsGraphicDesignPhotography } from "../../../informations/informationsGraphicDesignPhotography";

import SectionTransformPublic from "../sectiontransformpublic/SectionTransformPublic";
import SectionGraphicDesignPhotography from "../sectiondesignphoto/SectionDesignPhoto";

export default function ContainerSection({ id }: { id: number }) {
  return (
    <div
      className={
        id === 1
          ? `${styles.container}`
          : `${styles.container} ${styles.design_photography}`
      }
    >
      {id === 1
        ? informationsTransformPublic.map((item) => (
            <SectionTransformPublic
              type={item.type}
              title={item.title}
              about={item.about}
              image={item.image}
              alt={item.alt}
              width={item.width}
              height={item.height}
              key={item.id}
            />
          ))
        : informationsGraphicDesignPhotography.map((item) => (
            <SectionGraphicDesignPhotography
              type={item.type}
              title={item.title}
              about={item.about}
              image={item.image}
              alt={item.alt}
              width={item.width}
              height={item.height}
              key={item.id}
            />
          ))}
    </div>
  );
}
