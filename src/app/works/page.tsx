import WorksCard from "@/components/worksCard";
import { getWorksList } from "@/libs/microcms";

import styles from "./index.module.scss";

const Works = async () => {
  const data = await getWorksList();
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.contents}>
          {data.contents.map((content) => (
            <WorksCard key={content.id} data={content} />
          ))}
        </div>
        {/* <div className={styles.paginationArea}>ページネーション...</div> */}
      </div>
    </div>
  );
};

export default Works;
