import MoreButton from "@/components/button/moreButton";
import WorksCard from "@/components/worksCard";

import SectionTitle from "../sectionTitle";
import styles from "./index.module.scss";
import { getWorksList } from "@/libs/microcms";

const TopWorks = async () => {
  const data = await getWorksList({
    limit: 3,
  });
  return (
    <section className={styles.container}>
      <div className={styles.bgInner}>
        <div className={styles.inner}>
          <SectionTitle titleEn="WORKS" titleJa="制作実績" />
          <div className={styles.cards}>
            {data.contents.map((works) => (
              <WorksCard key={works.id} data={works} />
            ))}
          </div>
          <div className={styles.buttonArea}>
            <MoreButton href="/works" text="実績一覧を見る" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopWorks;
