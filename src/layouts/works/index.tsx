import NextHeadSeo from "next-head-seo";

import Footer from "@/components/footer";
import Header from "@/components/header";
import PageTitle from "@/components/pageTitle";
import Cta from "@/components/top/cta";
import type { LayoutProps } from "@/types";

const WorksLayout = ({ page, children, description }: LayoutProps) => {
  return (
    <>
      <NextHeadSeo title={`3S code - ${page}`} description={description} />
      <Header />
      <PageTitle titleEn="Works" titleJa="制作実績" />
      <main>{children}</main>
      <Cta theme="light" />
      <Footer />
    </>
  );
};

export default WorksLayout;
