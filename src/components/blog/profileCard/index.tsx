import Image from "next/image";

import styles from "./index.module.scss";

const ProfileCard = () => {
  const snsUrl = null;
  return (
    <section className={styles.container}>
      <div className={styles.imageArea}>
        <div className={styles.image}>
          <Image
            src={"/blog/profile.webp"}
            width={300}
            height={300}
            alt="まさやん"
          />
        </div>
        <h2 className={styles.name}>まさやん</h2>
      </div>
      <div className={styles.textArea}>
        <p>フロントエンドエンジニア兼HTMLコーダーとして活動しています。</p>
        <p>
          ReactやNext.jsを駆使し、フロントエンド開発と精密なコーディングを提供します。
        </p>
      </div>
      {snsUrl && (
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
      )}
    </section>
  );
};

export default ProfileCard;
