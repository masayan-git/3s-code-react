import WorksCard from "@/components/worksCard";

import styles from "./index.module.scss";

const Works = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.contents}>
          <WorksCard />
          <WorksCard />
          <WorksCard />
          <WorksCard />
          <WorksCard />
          <WorksCard />
          <WorksCard />
          <WorksCard />
          <WorksCard />
        </div>
        <div className={styles.paginationArea}>ページネーション...</div>
      </div>
    </div>
  );
};

export default Works;
