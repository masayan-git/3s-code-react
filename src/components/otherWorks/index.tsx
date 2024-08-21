import MoreButton from "../button/moreButton";
import WorksCard from "../worksCard";
import styles from "./index.module.scss";

const OtherWorks = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>その他制作実績</h3>
      <div className={styles.contents}>
        <WorksCard />
        <WorksCard />
        <WorksCard />
      </div>
      <div className={styles.buttonArea}>
        <MoreButton href="/works" text="制作実績一覧を見る" />
      </div>
    </section>
  );
};

export default OtherWorks;
