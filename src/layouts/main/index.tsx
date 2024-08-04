import NextHeadSeo from "next-head-seo";

import Header from "@/components/header";
import type { LayoutProps } from "@/types";

const MainLayout = ({ page, children, description }: LayoutProps) => {
  return (
    <>
      <NextHeadSeo title={`3Scode - ${page}`} description={description} />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
