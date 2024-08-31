import Image from "next/image";
import Link from "next/link";

import type { Works } from "@/libs/microcms";

import styles from "./index.module.scss";

type Props = {
  data: Works;
};

const WorksCard = ({ data }: Props) => {
  if (!data) return null;
  return (
    <article className={styles.container}>
      <Link href={`/works/${data.id}`} className={styles.link}>
        <div className={styles.image}>
          <Image
            src={data.eyecatch.url}
            width={300}
            height={300}
            alt={data.title}
          />
        </div>
        <div className={styles.titleArea}>
          <h1 className={styles.title}>{data.title}</h1>
          {data.url && <p className={styles.urlText}>{data.url}</p>}
        </div>
      </Link>
    </article>
  );
};

export default WorksCard;
