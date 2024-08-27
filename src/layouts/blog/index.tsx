import Sidebar from "@/components/blog/sidebar";
import PageTitle from "@/components/pageTitle";
import type { LayoutProps } from "@/types";

import styles from "./index.module.scss";

const BlogLayoutContainer = ({ children }: LayoutProps) => {
  return (
    <>
      <PageTitle titleEn="BLOG" titleJa="ブログ" />
      <div className={styles.container}>
        <main>{children}</main>
        <Sidebar />
      </div>
    </>
  );
};

export default BlogLayoutContainer;
