import Image from "next/image";

import SectionTitle from "../sectionTitle";
import styles from "./index.module.scss";

const TopAbout = () => {
  const promiseItems = [
    {
      title: "納期厳守",
      content:
        "貴社のパートナーとしてプロジェクトの一端をお任せ頂いていることを強く意識し、納期を厳守致します。",
    },
    {
      title: "報告・連絡・相談・再確認",
      content:
        "報告・連絡・相談に加えて再確認を行います。打ち合わせの議事録を取り、認識のずれがないか再確認をさせていただきます。",
    },
    {
      title: "不明点を自己完結しない",
      content:
        "ご担当者様の意図しない実装をしないためにも不明点を明確にしご質 問の上対応いたします。 を強く意識し、納期を厳守致します。",
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.titleContainer}>
          <SectionTitle titleEn="ABOUT" titleJa="3s codeについて" />
        </div>
        <div className={styles.contents}>
          <div className={styles.message}>
            <div className={styles.massageImageArea}>
              <div className={styles.massageImage}>
                <Image
                  src="/top/about/about-1.webp"
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
          <div className={styles.promise}>
            <div className={styles.promiseContent}>
              <h3 className={styles.promiseTitle}>３つのお約束</h3>
              <div className={styles.promiseItems}>
                {promiseItems.map((item, index) => (
                  <div key={index} className={styles.promiseItem}>
                    <h4 className={styles.promiseItemTitle}>
                      <span className={styles.promiseItemLabel}>
                        PROMISE / 0{index + 1}
                      </span>
                      <span className={styles.promiseItemTitleText}>
                        {item.title}
                      </span>
                    </h4>
                    <p className={styles.promiseItemText}>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.promiseImageArea}>
              <div className={styles.promiseImage}>
                <Image
                  src={"/top/about/about-2.webp"}
                  width={440}
                  height={506}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopAbout;
