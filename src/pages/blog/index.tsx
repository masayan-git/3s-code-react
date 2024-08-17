import BlogCard from "@/components/blog/blogCard";
import BlogLayout from "@/layouts/blog";

import styles from "./index.module.scss";

const Blog = () => {
  return (
    <BlogLayout page="ブログ" description="ブログ一覧です。">
      <div className={styles.container}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </BlogLayout>
  );
};

export default Blog;
