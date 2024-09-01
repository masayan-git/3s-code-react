import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import CategoryLabel from "@/components/label/categoryLabel";
import { getBlogDetail } from "@/libs/microcms";
import { formatDate } from "@/libs/utils";

import styles from "./index.module.scss";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export const revalidate = 1;

export const generateMetadata = async ({
  params,
  searchParams,
}: Props): Promise<Metadata> => {
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: `${data.title} | 3S code`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.eyecatch?.url || "/favicon/android-chrome-512x512.png"],
    },
  };
};

const BlogShow = async ({ params, searchParams }: Props) => {
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  if (!data) return <p>記事がありません</p>;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {data.category && (
          <div className={styles.categories}>
            <CategoryLabel category={data.category.name} />
          </div>
        )}
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.date}>
          {data.updatedAt
            ? formatDate(data.updatedAt)
            : formatDate(data.createdAt)}
        </div>
        <div className={styles.eyeCatch}>
          <Image
            src={data.eyecatch.url}
            width={data.eyecatch.width}
            height={data.eyecatch.height}
            alt={data.title}
          />
        </div>
        <div className={styles.content}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          />
        </div>
      </div>
      {/* <div className={styles.buttonArea}>
        <ReturnButton href="/" text="前の記事" />
        <MoreButton href="/" text="次の記事" />
      </div> */}
    </div>
  );
};

export default BlogShow;
