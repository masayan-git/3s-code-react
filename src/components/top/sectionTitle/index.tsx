import type { FC } from "react";

import styles from "./index.module.scss";

type SectionTitleProps = {
  titleEn: string;
  titleJa: string;
  theme?: "light";
};

const SectionTitle: FC<SectionTitleProps> = ({ titleEn, titleJa, theme }) => {
  return (
    <h2 className={styles.sectionTitle} data-theme-light={theme}>
      <span className={styles.titleEn}>{titleEn}</span>
      <span className={styles.titleJa}>{titleJa}</span>
    </h2>
  );
};

export default SectionTitle;
