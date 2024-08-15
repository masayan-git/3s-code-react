import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./index.module.scss";

const Cta = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>CONTACT</h2>
      <div className={styles.contents}>
        <p className={styles.mainText}>
          <span>Webコーディング業務の</span>
          <span>お問い合わせはこちら</span>
        </p>
        <p className={styles.subText}>
          <span>お気軽にご相談ください。</span>
          <span>24時間以内に返答させていただきます。</span>
        </p>
        <div className={styles.buttonArea}>
          <button className={styles.button}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            お問い合わせする
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
