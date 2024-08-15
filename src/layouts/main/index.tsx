import NextHeadSeo from "next-head-seo";

import Footer from "@/components/footer";
import Header from "@/components/header";
import type { LayoutProps } from "@/types";

const MainLayout = ({ page, children, description }: LayoutProps) => {
  return (
    <>
      <NextHeadSeo title={`3S code - ${page}`} description={description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
