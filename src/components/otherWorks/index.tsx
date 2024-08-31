import { Works } from "@/libs/microcms";
import MoreButton from "../button/moreButton";
import WorksCard from "../worksCard";
import styles from "./index.module.scss";

type Props = {
  data: Works[];
};

const OtherWorks = ({ data }: Props) => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>その他制作実績</h3>
      <div className={styles.contents}>
        {data.map((content) => (
          <WorksCard key={content.id} data={content} />
        ))}
      </div>
      <div className={styles.buttonArea}>
        <MoreButton href="/works" text="制作実績一覧を見る" />
      </div>
    </section>
  );
};

export default OtherWorks;
