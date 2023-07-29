import styles from "./styles.module.css";

import { informationsTransformPublic } from "../../../informations/informationsTransformPublic";
import { informationsDesignPhoto } from "../../../informations/informationsDesignPhoto";

import SectionTransformPublic from "../sectiontransformpublic/SectionTransformPublic";
import SectionDesignPhoto from "../sectiondesignphoto/SectionDesignPhoto";

export default function ContainerSection({ id }: { id: number }) {
  return (
    <div
      className={
        id === 44
          ? `${styles.container}`
          : `${styles.container} ${styles.design_photography}`
      }
    >
      {id === 44
        ? informationsTransformPublic.map((item) => (
            <SectionTransformPublic
              type={item.type}
              title={item.title}
              about={item.about}
              largeImage={item.largeImage}
              smallImage={item.smallImage}
              alt={item.alt}
              width={item.width}
              height={item.height}
              key={item.id}
            />
          ))
        : informationsDesignPhoto.map((item) => (
            <SectionDesignPhoto
              type={item.type}
              title={item.title}
              about={item.about}
              largeImage={item.largeImage}
              smallImage={item.smallImage}
              alt={item.alt}
              width={item.width}
              height={item.height}
              key={item.id}
            />
          ))}
    </div>
  );
}
