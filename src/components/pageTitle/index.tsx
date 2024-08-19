import type { FC } from "react";

import styles from "./index.module.scss";

type Props = {
  titleEn: string;
  titleJa: string;
};

const PageTitle: FC<Props> = ({ titleEn, titleJa }) => {
  return (
    <h1 className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <span className={styles.titleEn}>{titleEn}</span>
          <span className={styles.titleJa}>{titleJa}</span>
        </div>
      </div>
    </h1>
  );
};

export default PageTitle;
