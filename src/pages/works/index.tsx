import WorksCard from "@/components/worksCard";
import WorksLayout from "@/layouts/works";

import styles from "./index.module.scss";

const Works = () => {
  return (
    <WorksLayout page="Works" description="制作物の一覧です">
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
    </WorksLayout>
  );
};

export default Works;
