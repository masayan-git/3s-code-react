import { notFound } from "next/navigation";

import BlogCard from "@/components/blog/blogCard";
import Pagination from "@/components/pagination";
import { BLOG_LIST_LIMIT } from "@/data/contents";
import { getBlogList, getCategoryDetail } from "@/libs/microcms";

import styles from "./index.module.scss";

type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 1;

const CategoryArchive = async ({ params }: Props) => {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: article, totalCount } = await getBlogList({
    filters: `category[equals]${category.id}`,
    limit: BLOG_LIST_LIMIT,
  });
  if (!article) return <p>記事がありません</p>;

  return (
    <div className={styles.container}>
      <h2>
        <span className={styles.category}>カテゴリー</span>
        <span className={styles.categoryName}>{category.name}</span>
      </h2>
      {article.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      <Pagination
        totalCount={totalCount}
        basePath={`/blog/category/${category.id}`}
      />
    </div>
  );
};

export default CategoryArchive;
