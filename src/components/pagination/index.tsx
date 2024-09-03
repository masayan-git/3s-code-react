import Link from "next/link";

import { BLOG_LIST_LIMIT } from "@/data/contents";

import styles from "./index.module.scss";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

const Pagination = ({ totalCount, current = 1, basePath = "/blog" }: Props) => {
  const totalPages = Math.ceil(totalCount / BLOG_LIST_LIMIT);
  const pages = Array.from(
    { length: Math.ceil(totalCount / BLOG_LIST_LIMIT) },
    (_, i) => i + 1
  );

  if (totalPages <= 1) return null;

  return (
    <nav className={styles.container}>
      <ul className={styles.lists}>
        {pages.map((page) => (
          <li key={page} className={styles.list}>
            {current !== page ? (
              <Link href={`${basePath}/p/${page}`} className={styles.link}>
                {page}
              </Link>
            ) : (
              <span className={styles.link} data-current>
                {page}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
