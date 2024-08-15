import MoreButton from "@/components/button/more-button";
import WorksCard from "@/components/works-card";

import SectionTitle from "../sectionTitle";
import styles from "./index.module.scss";

const TopWorks = () => {
  return (
    <section className={styles.topWorks}>
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
