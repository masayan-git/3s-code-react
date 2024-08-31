import MoreButton from "@/components/button/moreButton";
import PageTitle from "@/components/pageTitle";

import styles from "./not-found.module.scss";

const notFound = () => {
  return (
    <>
      <PageTitle titleEn="Not Found" titleJa="ページがみつかりません" />
      <div className={styles.container}>
        <div className={styles.inner}>
          <strong className={styles.mainText}>
            ページが見つかりませんでした。
          </strong>
          <p className={styles.text}>URLを再度ご確認ください。</p>
          <div className={styles.buttonArea}>
            <MoreButton href="/" text="TOPへ戻る" />
          </div>
        </div>
      </div>
    </>
  );
};

export default notFound;
