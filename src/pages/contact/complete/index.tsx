import MoreButton from "@/components/button/moreButton";
import ContactLayout from "@/layouts/contact";

import styles from "./index.module.scss";

const Complete = () => {
  return (
    <ContactLayout
      page={"お問い合わせ完了"}
      description={"お問い合わせが完了しました。"}
    >
      <div className={styles.container}>
        <div className={styles.inner}>
          <strong className={styles.mainText}>送信が完了しました。</strong>
          <p className={styles.text}>
            お問い合わせいただきましてありがとうございます。
            <br />
            24時間以内にご連絡をいたしますので、今しばらくお待ちくださいませ。
          </p>
          <div className={styles.buttonArea}>
            <MoreButton href="/" text="TOPへ戻る" />
          </div>
        </div>
      </div>
    </ContactLayout>
  );
};

export default Complete;
