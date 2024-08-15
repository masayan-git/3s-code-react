import MoreButton from "@/components/button/moreButton";
import WorksCard from "@/components/worksCard";

import SectionTitle from "../sectionTitle";
import styles from "./index.module.scss";

const TopWorks = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bgInner}>
        <div className={styles.inner}>
          <SectionTitle titleEn="WORKS" titleJa="制作実績" />
          <div className={styles.cards}>
            <WorksCard />
            <WorksCard />
            <WorksCard />
          </div>
          <div className={styles.buttonArea}>
            <MoreButton href="/" text="実績一覧を見る" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopWorks;
