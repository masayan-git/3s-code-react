import OtherWorks from "@/components/otherWorks";
import WorksLayout from "@/layouts/works";

import styles from "./index.module.scss";

const WorksShow = () => {
  return (
    <WorksLayout page="制作実績" description="制作実績の詳細です">
      <div className={styles.container}>
        <div className={styles.inner}>
          <article className={styles.contents}>
            <div className={styles.image}>
              <img
                src="https://via.placeholder.com/300"
                height={7377}
                width={1920}
                alt="alt"
              />
            </div>
            <div className={styles.titleArea}>
              <h1 className={styles.title}>タイトルです</h1>
              <a href="https//google.com" className={styles.link}>
                https//google.com
              </a>
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <div className={styles.infoContent}>
                  <div className={styles.infoTitle}>業種</div>
                  <p className={styles.infoText}>
                    ステンレス板金製品の製造・販売
                  </p>
                </div>
                <div className={styles.infoContent}>
                  <div className={styles.infoTitle}>業種</div>
                  <p className={styles.infoText}>
                    ステンレス板金製品の製造・販売
                  </p>
                </div>
                <div className={styles.infoContent}>
                  <div className={styles.infoTitle}>業種</div>
                  <p className={styles.infoText}>
                    ステンレス板金製品の製造・販売
                  </p>
                </div>
                <div className={styles.infoContent}>
                  <div className={styles.infoTitle}>業種</div>
                  <p className={styles.infoText}>
                    ステンレス板金製品の製造・販売
                  </p>
                </div>
                <div className={styles.comment}>
                  <div className={styles.infoTitle}>コメント</div>
                  <p className={styles.infoText}>
                    シンコー株式会社様のコーポレート兼採用サイトをWordPressテーマをベースに制作しました。
                    採用サイトに必要な募集要項や社員紹介が簡単に更新できるテーマを選定し、構築後に運用しやすいよう制作しました。
                  </p>
                </div>
              </div>
            </div>
          </article>
          <OtherWorks />
        </div>
      </div>
    </WorksLayout>
  );
};

export default WorksShow;
