import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import OtherWorks from "@/components/otherWorks";
import { getWorksDetail } from "@/libs/microcms";

import styles from "./index.module.scss";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export const generateMetadata = async ({
  params,
  searchParams,
}: Props): Promise<Metadata> => {
  const data = await getWorksDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: `${data.title} | 3S code`,
    description: data.seoDescription,
    openGraph: {
      title: data.title,
      description: data.seoDescription,
      images: [data?.eyecatch?.url || "/favicon/android-chrome-512x512.png"],
    },
  };
};

const WorksShow = async ({ params, searchParams }: Props) => {
  const data = await getWorksDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  if (!data) return null;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <article className={styles.contents}>
          <div className={styles.image}>
            <Image
              src={data.screenshot.url}
              width={data.screenshot.width}
              height={data.screenshot.height}
              alt={data.title}
            />
          </div>
          <div className={styles.titleArea}>
            <h1 className={styles.title}>{data.title}</h1>
            {data.url && (
              <a href={data.url} className={styles.link}>
                {data.url}
              </a>
            )}
          </div>
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.infoContent}>
                <div className={styles.infoTitle}>業種</div>
                <p className={styles.infoText}>{data.industry}</p>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.infoTitle}>サイト種別</div>
                <p className={styles.infoText}>{data.kinds}</p>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.infoTitle}>提供サービス</div>
                <p className={styles.infoText}>{data.service}</p>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.infoTitle}>制作期間</div>
                <p className={styles.infoText}>{data.period}</p>
              </div>
              <div className={styles.comment}>
                <div className={styles.infoTitle}>コメント</div>
                <p className={styles.infoText}>{data.comment}</p>
              </div>
            </div>
          </div>
        </article>
        <OtherWorks data={data.related} />
      </div>
    </div>
  );
};

export default WorksShow;
