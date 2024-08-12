import Image from "next/image";

import SectionTitle from "../sectionTitle";
import styles from "./index.module.scss";

const TopAbout = () => {
  return (
    <section className={styles.topAbout}>
      <div className={styles.inner}>
        <div className={styles.titleContainer}>
          <SectionTitle titleEn="ABOUT" titleJa="3s codeについて" />
        </div>
        <div className={styles.contents}>
          <div className={styles.message}>
            <div className={styles.massageImageArea}>
              <div className={styles.massageImage}>
                <Image
                  src="/top/about/about-1.jpg"
                  width={720}
                  height={510}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.messageContent}>
              <h3 className={styles.messageTitle}>代表メッセージ</h3>
              <div className={styles.messageTextArea}>
                <p className={styles.messageText}>
                  Webコーダーとして活動しております。デザインは、「想い」そのものだと考えております。その「想い」をWebに表現できることを感謝し、日々業務に取り組んでおります。
                </p>
                <p className={styles.messageText}>
                  屋号名の「3S」は三方良し（three way
                  satisfaction）を略したものです。私にとっての「三方」とは、制作会社様・クライアント様・Webサイトの利用者様です。こちらの方々に満足（satisfaction）して頂きたいという想いで名づけました。
                </p>
              </div>
              <p className={styles.messageSign}>3S code 代表 庄司雅幸</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopAbout;
