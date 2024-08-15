import Link from "next/link";

import styles from "./index.module.scss";

const WorksCard = () => {
  return (
    <article className={styles.container}>
      <Link href="/" className={styles.link}>
        <div className={styles.image}>
          <img
            src="https://via.placeholder.com/300"
            width={300}
            height={300}
            alt="サイトタイトル"
          />
        </div>
        <div className={styles.titleArea}>
          <h1 className={styles.title}>タイトルです</h1>
          <p className={styles.urlText}>https://via.placeholder.com/300</p>
        </div>
      </Link>
    </article>
  );
};

export default WorksCard;
