import Image from "next/image";
import Link from "next/link";

import MoreButton from "@/components/button/moreButton";
import CategoryLabel from "@/components/label/categoryLabel";
import { getBlogList } from "@/libs/microcms";

import SectionTitle from "../sectionTitle";
import styles from "./index.module.scss";

const TopBlog = async () => {
  const data = await getBlogList({
    limit: 3,
  });
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <SectionTitle titleEn="BLOG" titleJa="ブログ" />
        <div className={styles.cards}>
          {data.contents.map((blog) => (
            <article key={blog.id} className={styles.card}>
              <Link href={`/blog/${blog.id}`} className={styles.cardLink}>
                <div className={styles.cardImage}>
                  <Image
                    src={blog.eyecatch.url}
                    width={370}
                    height={260}
                    alt={blog.title}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h1 className={styles.cardTitle}>{blog.title}</h1>
                  <div className={styles.cardCategory}>
                    <CategoryLabel category={blog.category.name} />
                  </div>
                  <p className={styles.cardText}>
                    {blog.content.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.moreButton}>
          <MoreButton href="/blog/" text="記事一覧を見る" />
        </div>
      </div>
    </div>
  );
};

export default TopBlog;
