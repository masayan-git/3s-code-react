import Link from "next/link";

import MoreButton from "@/components/button/more-button";
import CategoryLabel from "@/components/label/categoryLabel";

import SectionTitle from "../sectionTitle";
import styles from "./index.module.scss";

const TopBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <SectionTitle titleEn="BLOG" titleJa="ブログ" />
        <div className={styles.cards}>
          {Array.from({ length: 3 }).map((_, index) => (
            <article key={index} className={styles.card}>
              <Link href="/" className={styles.cardLink}>
                <div className={styles.cardImage}>
                  <img
                    src="https://via.placeholder.com/300"
                    width={370}
                    height={260}
                    alt="記事タイトル"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h1 className={styles.cardTitle}>
                    SEOライティングに必要な構成の作り方!基本8ステップとは？
                  </h1>
                  <div className={styles.cardCategory}>
                    <CategoryLabel category="SEOライティング" />
                  </div>
                  <p className={styles.cardText}>
                    構成とは、SEO記事の骨組みになる部分を
                    指します。SEOライティングでは、記事の本
                    文を執筆する前に構成（構成案）を作成し
                    ます。ライティングを始める前に、構成を作成しておくことで、記事の方向性が明確になり、効率的に記事を執筆することができます。
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.moreButton}>
          <MoreButton href="/" text="記事一覧を見る" />
        </div>
      </div>
    </div>
  );
};

export default TopBlog;
