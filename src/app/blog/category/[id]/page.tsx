import { notFound } from "next/navigation";

import BlogCard from "@/components/blog/blogCard";
import { getBlogList, getCategoryDetail } from "@/libs/microcms";

import styles from "./index.module.scss";

type Props = {
  params: {
    id: string;
  };
};

const CategoryArchive = async ({ params }: Props) => {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: article, totalCount } = await getBlogList({
    filters: `category[equals]${category.id}`,
    limit: 10,
  });
  if (!article) return <p>記事がありません</p>;
  // ページネーションで利用予定
  console.log(totalCount, "blog total count");
  return (
    <div className={styles.container}>
      <h2>
        <span className={styles.category}>カテゴリー</span>
        <span className={styles.categoryName}>{category.name}</span>
      </h2>
      {article.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default CategoryArchive;
