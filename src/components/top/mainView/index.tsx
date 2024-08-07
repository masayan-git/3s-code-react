import Image from "next/image";
import type { FC } from "react";

import styles from "@/components/top/mainView/index.module.scss";

const MainView: FC = () => {
  return (
    <section className={styles.mainView}>
      <div className={styles.mainView__inner}>
        <div className={styles.mainView__contents}>
          <div>
            <div className={styles.mainView__copy}>
              <h1 className={styles.mainView__title}>
                あなたの想いを、
                <br />
                Webに表現します。
              </h1>
              <p className={styles.mainView__copyText}>
                大阪を拠点にコーディング業務を請け負っております。
              </p>
            </div>
          </div>
          <div>
            <div className={styles.mainView__image}>
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
