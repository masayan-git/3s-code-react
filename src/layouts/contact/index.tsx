import PageTitle from "@/components/pageTitle";
import type { LayoutProps } from "@/types";

const ContactLayoutContainer = ({ children }: LayoutProps) => {
  return (
    <>
      <PageTitle titleEn="Contact" titleJa="お問い合わせ" />
      <main>{children}</main>
    </>
  );
};

export default ContactLayoutContainer;
