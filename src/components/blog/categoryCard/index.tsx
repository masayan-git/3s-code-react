import Link from "next/link";

import styles from "./index.module.scss";

const CategoryCard = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>カテゴリー</h2>
      <ul className={styles.categories}>
        <li className={styles.category}>
          <Link href={"/"} className={styles.link}>
            <span></span>
            Web制作
          </Link>
        </li>
        <li className={styles.category}>
          <Link href={"/"} className={styles.link}>
            <span></span>
            WordPress
          </Link>
        </li>
        <li className={styles.category}>
          <Link href={"/"} className={styles.link}>
            <span></span>
            お知らせ
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default CategoryCard;
