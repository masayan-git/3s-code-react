import BlogCard from "@/components/blog/blogCard";
import { getBlogList } from "@/libs/microcms";

import styles from "./index.module.scss";

export const revalidate = 1;

const Blog = async () => {
  const { contents: article, totalCount } = await getBlogList({
    limit: 10,
  });
  if (!article) return <p>記事がありません</p>;
  // ページネーションで利用予定
  console.log(totalCount, "blog total count");
  return (
    <div className={styles.container}>
      {article.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
