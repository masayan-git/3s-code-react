import Image from "next/image";
import type { FC } from "react";

import styles from "@/components/top/mainView/index.module.scss";

const MainView: FC = () => {
  return (
    <section className={styles.MainView}>
      <div className={styles.arrowTopLeft} />
      <div className={styles.arrowTopRight} />
      <div className={styles.arrowBottomLeft} />
      <div className={styles.inner}>
        <div className={styles.contents}>
          <div className={styles.copyContainer}>
            <div className={styles.copy}>
              <h1 className={styles.title}>
                <span className={styles.titleInner}>
                  <span className={styles.titleTextBlock}>
                    あなたの想いを、
                  </span>
                  <span className={styles.titleTextBlock}>
                    Webに表現します。
                  </span>
                </span>
              </h1>
              <p className={styles.copyText}>
                大阪を拠点にコーディング業務を請け負っております。
              </p>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <Image
                src={"/top/mv/mv-object.webp"}
                width={500}
                height={532}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainView;
