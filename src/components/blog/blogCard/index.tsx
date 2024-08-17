import Link from "next/link";

import CategoryLabel from "@/components/label/categoryLabel";

import styles from "./index.module.scss";

const BlogCard = () => {
  return (
    <article className={styles.container}>
      <Link href="/blog/1" className={styles.link}>
        <div className={styles.image}>
          <img src="https://via.placeholder.com/300" alt="" />
        </div>
        <div className={styles.contents}>
          <h1 className={styles.title}>
            SEOライティングに必要な構成の作り方！基本8ステップとは？
          </h1>
          <div className={styles.categories}>
            <CategoryLabel category="Web制作" />
          </div>
          <p className={styles.description}>
            SEOライティングに必要な構成の作り方！基本8ステップとは？SEOライティングに必要な構成の作り方！基本8ステップとは？
          </p>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
