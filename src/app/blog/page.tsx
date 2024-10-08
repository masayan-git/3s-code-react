import BlogCard from "@/components/blog/blogCard";
import Pagination from "@/components/pagination";
import { BLOG_LIST_LIMIT } from "@/data/contents";
import { getBlogList } from "@/libs/microcms";

import styles from "./index.module.scss";

export const revalidate = 1;

const Blog = async () => {
  const { contents: article, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
  });
  if (!article) return <p>記事がありません</p>;

  return (
    <div className={styles.container}>
      {article.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      <Pagination totalCount={totalCount} />
    </div>
  );
};

export default Blog;
