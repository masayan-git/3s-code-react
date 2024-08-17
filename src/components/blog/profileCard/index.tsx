import Image from "next/image";

import styles from "./index.module.scss";

const ProfileCard = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageArea}>
        <div className={styles.image}>
          <img
            src="https://via.placeholder.com/300"
            width={300}
            height={300}
            alt="まさやん"
          />
        </div>
        <h2 className={styles.name}>まさやん</h2>
      </div>
      <div className={styles.textArea}>
        <p>
          iPad大好きなiPadブロガー。
          猫4匹と暮らしつつiPadメインのガジェット活用ブログを運営しています。
        </p>
        <p>
          iPadでのブログ運営やiPadのおすすめアクセサリー、アプリや使い方を中心に、iPhoneやMacBook、デスク周りの情報も発信中です。
        </p>
      </div>
      <div className={styles.snsArea}>
        <a
          href="https//google.com"
          className={styles.snsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/blog/instagram-icon.svg"}
            width={38}
            height={38}
            alt="Instagram"
          />
        </a>
      </div>
    </section>
  );
};

export default ProfileCard;
