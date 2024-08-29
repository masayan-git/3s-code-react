import PageTitle from "@/components/pageTitle";
import Cta from "@/components/top/cta";
import type { LayoutProps } from "@/types";

const WorksLayoutContainer = ({ children }: LayoutProps) => {
  return (
    <>
      <PageTitle titleEn="Works" titleJa="制作実績" />
      <main>{children}</main>
      <Cta theme="light" />
    </>
  );
};

export default WorksLayoutContainer;
