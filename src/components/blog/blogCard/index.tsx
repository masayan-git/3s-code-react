import Image from "next/image";
import Link from "next/link";

import CategoryLabel from "@/components/label/categoryLabel";
import type { Blog } from "@/libs/microcms";

import styles from "./index.module.scss";

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <article className={styles.container}>
      <Link href={`/blog/${blog.id}`} className={styles.link}>
        <div className={styles.image}>
          <Image
            src={blog.eyecatch.url}
            alt=""
            width={blog.eyecatch.width}
            height={blog.eyecatch.height}
          />
        </div>
        <div className={styles.contents}>
          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.categories}>
            <CategoryLabel category={blog.category.name} />
          </div>
          <p className={styles.description}>
            {blog.content.replace(/<\/?[^>]+(>|$)/g, "")}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
