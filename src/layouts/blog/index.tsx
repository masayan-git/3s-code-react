import Sidebar from "@/components/blog/sidebar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageTitle from "@/components/pageTitle";
import type { LayoutProps } from "@/types";

import styles from "./index.module.scss";

const BlogLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <PageTitle titleEn="BLOG" titleJa="ブログ" />
      <div className={styles.container}>
        <main>{children}</main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
};

export default BlogLayout;
