import BlogCard from "@/components/blog/blogCard";

import styles from "./index.module.scss";

const Blog = () => {
  return (
    <div className={styles.container}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Blog;
