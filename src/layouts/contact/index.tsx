import NextHeadSeo from "next-head-seo";

import Footer from "@/components/footer";
import Header from "@/components/header";
import PageTitle from "@/components/pageTitle";
import type { LayoutProps } from "@/types";

const ContactLayout = ({ page, children, description }: LayoutProps) => {
  return (
    <>
      <NextHeadSeo title={`3S code - ${page}`} description={description} />
      <Header />
      <PageTitle titleEn="Contact" titleJa="お問い合わせ" />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ContactLayout;
