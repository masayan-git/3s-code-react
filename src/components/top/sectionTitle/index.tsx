import type { FC } from "react";

import styles from "./index.module.scss";

type SectionTitleProps = {
  titleEn: string;
  titleJa: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ titleEn, titleJa }) => {
  return (
    <h2 className={styles.sectionTitle}>
      <span className={styles.titleEn}>{titleEn}</span>
      <span className={styles.titleJa}>{titleJa}</span>
    </h2>
  );
};

export default SectionTitle;
