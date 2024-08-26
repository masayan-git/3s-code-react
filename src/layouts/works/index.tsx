import Footer from "@/components/footer";
import Header from "@/components/header";
import PageTitle from "@/components/pageTitle";
import Cta from "@/components/top/cta";
import type { LayoutProps } from "@/types";

const WorksLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <PageTitle titleEn="Works" titleJa="制作実績" />
      <main>{children}</main>
      <Cta theme="light" />
      <Footer />
    </>
  );
};

export default WorksLayout;
