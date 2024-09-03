import { notFound } from "next/navigation";

import BlogCard from "@/components/blog/blogCard";
import Pagination from "@/components/pagination";
import { BLOG_LIST_LIMIT } from "@/data/contents";
import { getBlogList } from "@/libs/microcms";

import styles from "./index.module.scss";

export const revalidate = 1;

type Props = {
  params: {
    current: string;
  };
};

const page = async ({ params }: Props) => {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: article, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    offset: BLOG_LIST_LIMIT * (current - 1),
  });

  if (article.length === 0) {
    notFound();
  }

  return (
    <div className={styles.container}>
      {article.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      <Pagination totalCount={totalCount} current={current} />
    </div>
  );
};

export default page;
